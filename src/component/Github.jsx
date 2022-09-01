import React from "react";
import { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { getData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export const Github = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, []);
  console.log(data);
  return (
    <Box>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Most Starred Repos
      </Text>
      <Box w={"90%"} m={"auto"} pt={"10px"}>
        {data.map((elem) => {
          return (
            <Flex
              h={"150px"}
              w={"80%"}
              border={"1px solid black"}
              m={"auto"}
              mb={"10px"}
            >
              <Box w={"30%"} h={"90%"} mt={"8px"} ml={"10px"}>
                <Image src={elem.owner.avatar_url} w={"70%"} h={"100%"} />
              </Box>
              <Box>
                <Box fontSize={"2xl"} fontWeight={"bold"} textAlign={"start"}>
                  {elem.name}
                </Box>
                <Box fontSize={"md"} textAlign={"start"}>
                  {elem.description}
                </Box>
                <Flex justifyContent={"space-between"} p={1}>
                  <Flex justifyContent={"space-between"} p={1} w={"150px"}>
                    <Box border={"1px solid black"} p={"2"}>
                      {elem.stargazers_count}
                    </Box>
                    <Box border={"1px solid black"} p={"2"}>
                      {elem.open_issues_count}
                    </Box>
                  </Flex>
                  <Box ml={"10px"} >Last pushed at {elem.pushed_at}</Box>
                </Flex>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};
