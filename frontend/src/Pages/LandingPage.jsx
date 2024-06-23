import React, { useState } from "react";
import Footer from "./Footer";
import { Flex, Button } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Section1 from "./LandingPageComponents/Section1";
import Section2 from "./LandingPageComponents/Section2";
import Section5 from "./LandingPageComponents/Section5";
import Section6 from "./LandingPageComponents/Section6";
import LandingPageCarousel from "./LandingPageComponents/LandingPageCarousel";
import UserDashboard from "./UserDashboard";
import AddCourse from "../components/Adminitems/AddCourse";
import AddTeacher from "../components/TeacherComponents/AddTeacher";
import AddTeacherVideos from "../components/TeacherComponents/AddTeacherVideos";
import AddTeacherCourse from "../components/TeacherComponents/AddCourse";
import EditPage from "../components/Adminitems/EditPage";

const LandingPage = () => {
  const [showUserDashboard, setShowUserDashboard] = useState(false);
  const [showCourses, setShowCourses] = useState(false); // State to toggle AddCourse visibility
  const [showTeacher, setShowTeacher] = useState(false);

  const toggleUserDashboard = () => {
    setShowUserDashboard(!showUserDashboard);
  };

  const toggleAddCourseClick = () => {
    setShowCourses(!showCourses); // Toggle showCourses state
  };

  const toggleAddTeacherClick = () => {
    setShowTeacher(!showTeacher); // Toggle showCourses state
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Flex direction="column" align="center" justify="center" flex="1">
        <Section1 />
      </Flex>
      <Section2 />
      <Section5 />
      <Flex direction="column" align="center" justify="center" flex="1">
        <LandingPageCarousel />
        <Section6 />
        <br />
        <Flex justify="center" align="center" width="100%" height="100%">
          <Button
            onClick={toggleUserDashboard}
            colorScheme="red"
            size="md"
            width="200px"
            height="50px"
            borderRadius="none"
            mb={4}
          >
            {showUserDashboard ? "Hide Dashboard" : "Show Dashboard"}
          </Button>
        </Flex>
        {showUserDashboard && <UserDashboard />}
      </Flex>
      
      {/* Center-align the Add Courses button */}
      <Flex justify="center" mt={4}>
        <Button
          onClick={toggleAddCourseClick}
          colorScheme="red"
          size="md"
          width="200px"
          height="50px"
          borderRadius="none"
          mb={4}
        >
          {showCourses ? "Hide Courses" : "Show Courses"}
        </Button>
      </Flex >
      
      {/* Render AddCourse component when showCourses is true */}
      
      
      {/* Empty Flex container for spacing */}
      <Flex justify="center" mt={4}>
      {showCourses && <AddCourse />}
      </Flex>

      <Flex justify="center" mt={4}>
        <Button
          onClick={toggleAddTeacherClick}
          colorScheme="red"
          size="md"
          width="200px"
          height="50px"
          borderRadius="none"
          mb={4}
        >
          {showTeacher ? "Hide Teacher" : "Show Teacher"}
        </Button>
      </Flex >
      
      {/* Render AddCourse component when showCourses is true */}
      
      
      {/* Empty Flex container for spacing */}
      <Flex justify="center" mt={4}>
      {showTeacher && <AddTeacher />}
      </Flex>
      <br />
      <Footer />
    </Flex>
  );
};

export default LandingPage;
