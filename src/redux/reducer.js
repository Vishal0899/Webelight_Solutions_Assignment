const initState = {
  loading: true,
  data: [],
  error: false,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "DATA_REQUEST": {
      return {
        ...state,
        loading: true,
      };
    }
    case "DATA_SUCCESS": {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case "DATA_ERROR": {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};
