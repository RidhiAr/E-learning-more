import UserNavbar from "../components/UserComponents/UserNavbar";
import UserSlider from "../components/UserComponents/UserSlider";
import Footer from "./Footer";
import CourseComponent from "../components/UserComponents/CourseComponent";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const UserDashboard = () => {
  const userStore = useSelector((store) => store.UserReducer);
  return (
    <>
      <Box>
        <Flex>
          <UserNavbar />
        </Flex>
        <UserSlider />
        <CourseComponent />
        <Box
          border="4px solid"
          borderColor="gray.300"
          borderRadius="md"
          padding="4"
          textAlign="center"
          width="95%"
          margin="auto"
          bgColor="red.500"
        >
          <Text
            style={{
              fontStyle: "bold",
              fontFamily: "Heading Font Name",
              fontWeight: "900",
              fontSize: "30px",
              color: "white",
            }}
          >
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </Text>
        </Box>

      </Box>
    </>
  );
};

export default UserDashboard;
