import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import teacher from "../../asset/A.png";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  const navigate = useNavigate();
  return (
    <Flex mt={100} mb={70} gap={50} p="15px" justify="center">
      <Flex
        direction="column"
        w={{
          base: "100%",
          sm: "60%",
          md: "55%",
          lg: "50%",
        }}
        gap={30}
      >
        <Text
          fontSize={{
            base: "70px",
            sm: "30px",
            md: "60px",
            lg: "80px",
          }}
          fontWeight="bold"
          fontFamily="poppins"
        >
          Learn Beyond Boundaries
        </Text>
        <Text
          fontSize={{
            lg: "18px",
            md: "16px",
            sm: "14px",
            base: "20px",
          }}
          fontWeight="semibold"
        >
          <Text fontSize='2rem' color="#fe0821" display='inline'>CourseCraft</Text> Where Educators and Students Connect Seamlessly Online. Teachers craft personalized courses for various subjects and grades, while students explore and purchase courses tailored to their needs. Empowering both educators and learners, CourseCraft revolutionizes online education.
        </Text>
        <Flex
          gap={30}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
        >
          <Button
            bg="#fe0821"
            color="white"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solid #fe0821"
            _hover={{ background: "#42A5F5", color: "#0D47A1" }}
            onClick={() => navigate("/signup")}
          >
            Register Now
          </Button>
          <Button
            colorScheme="#fe0821"
            color="#fe0821"
            variant="outline"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solid #fe0821"
            onClick={() => navigate("/login")}
          >
            Try CourseCraft
          </Button>
        </Flex>
      </Flex>
      <Box
        display={{base:'none', sm: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={teacher}
          alt="Your Image"
          width={{
            md: "60%",
            lg: "80%",
          }}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Section1;
