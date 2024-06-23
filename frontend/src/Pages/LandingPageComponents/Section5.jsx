import { Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const Section5 = () => {
  const handleButtonClick = (category) => {
    // Example function to handle button click
    console.log(`Explore ${category} clicked`);
    // You can add additional logic here based on the button clicked
  };

  return (
    <Flex
      direction={"column"}
      p={{
        base: "10px",
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "80px",
      }}
      gap={10}
    >
      <Flex>
        <Text
          fontSize={{
            sm: "3xl",
            md: "3xl",
            lg: "4xl",
            xl: "4xl",
          }}
          fontWeight={"semibold"}
        >
          Explore Courses
        </Text>
      </Flex>
      <Flex>
        <Grid
          w={"100%"}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={{
            base: "5",
            sm: "3",
            md: "4",
            lg: "5",
            xl: "6",
          }}
        >
          {courses.map((course, index) => (
            <Flex
              key={index}
              w="100%"
              h="20"
              gap={2}
              boxShadow="#ecaf92 0px 7px 29px 0px;"
              _hover={{
                boxShadow: "#ecaf92 0px 7px 29px 0px",
                cursor: "pointer",
              }}
            >
              <Flex width={"25%"}>
                <Image
                  width="120%"
                  src={course.image}
                  alt={course.title}
                  objectFit="fill"
                />
              </Flex>
              <Flex justifyContent="center" direction="column">
                <Text
                  fontSize="12px"
                  fontFamily="poppins"
                  fontWeight="semibold"
                >
                  {course.title}
                </Text>
                <Text
                  fontSize="12px"
                  color="#707070"
                  fontFamily="poppins"
                  fontWeight="semibold"
                >
                  {course.numCourses} Courses
                </Text>
                <Button
                  mt={2}
                  colorScheme="red"
                  size="sm"
                  onClick={() => handleButtonClick(course.title)}
                  width="100%" // Ensure all buttons have equal width
                >
                  Explore
                </Button>
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Section5;

// Sample data for courses
const courses = [
  {
    title: "Data Science",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100",
    numCourses: 425,
  },
  {
    title: "Business",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100",
    numCourses: 1395,
  },
  {
    title: "Computer Science",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&fit=crop&h=100",
    numCourses: 668,
  },
  // Add more courses as needed
];
