import {
  Flex,
  Text,
  Link,
  Grid,
  Box, // Import Box component from Chakra UI
  Image, // Import Image component from Chakra UI
  useBreakpointValue,
} from "@chakra-ui/react";

const Section2 = () => {
  const columnCount = useBreakpointValue({ sm: 1, md: 2, lg: 3 });

  return (
    <Flex
      direction="column"
      gap={6}
      bg="#ecaf92"
      p={10}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={{
          lg: "2xl",
          sm: "lg",
          md: "xl",
        }}
        textAlign="center"
      >
        <Link color="#fe0821" href="#" fontWeight="bold">
          Why Choose Us?
        </Link>
      </Text>
      <Grid
        templateColumns={`repeat(${columnCount}, 1fr)`}
        gap={6}
        width="100%"
        maxWidth="900px" // Adjust max-width as needed
        margin="auto"     // Center align grid
      >
        <Box
          bg="white"
          p={6}
          boxShadow="md"
          borderRadius="md"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="https://cdni.iconscout.com/illustration/premium/thumb/chemistry-teacher-5595984-4660062.png?f=webp"
            alt="Expert Teachers"
            boxSize="150px"
            objectFit="cover"
            mb={4}
          />
          <Text fontWeight="bold">Expert Teachers</Text>
          <Text mt={2}>
            Meet our experienced teachers dedicated to your success.
          </Text>
        </Box>
        <Box
          bg="white"
          p={6}
          boxShadow="md"
          borderRadius="md"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-sticky-note-decorative-cartoon-illustration-image_2285804.jpg"
            alt="Notes Available"
            boxSize="150px"
            objectFit="cover"
            mb={4}
          />
          <Text fontWeight="bold">Notes Available</Text>
          <Text mt={2}>
            Access comprehensive study materials anytime, anywhere.
          </Text>
        </Box>
        <Box
          bg="white"
          p={6}
          boxShadow="md"
          borderRadius="md"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/8297/8297406.png"
            alt="User Friendly"
            boxSize="150px"
            objectFit="cover"
            mb={4}
          />
          <Text fontWeight="bold">User Friendly</Text>
          <Text mt={2}>
            Easy-to-use platform designed with you in mind.
          </Text>
        </Box>
      </Grid>
    </Flex>
  );
};

export default Section2;
