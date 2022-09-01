import axios from "axios";

export const Data_Request = () => {
  return {
    type: "DATA_REQUEST",
  };
};

export const Data_Success = (payload) => {
  return {
    type: "DATA_SUCCESS",
    payload,
  };
};

export const Data_Error = () => {
  return {
    type: "DATA_ERROR",
  };
};

export const getData = (dispatch) => {
  dispatch(Data_Request());
  return axios
    .get(
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
    )
    .then((res) => dispatch(Data_Success(res.data.items)))
    .catch((err) => dispatch(Data_Error()));
};
