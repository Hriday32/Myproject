// LoginForm.js
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const userData = JSON.parse(localStorage.getItem("user_" + email));
    if (userData && userData.password === password) {
      console.log("Login successful");
      // Redirect to the dashboard or home page after successful login
      navigate("/");
    } else {
      console.log("Invalid email or password");
      // Handle login failure, such as showing an error message
    }
  };

  return (
    <Box
      className="box"
      paddingY={"50px"}
      maxW="md"
      mx="auto"
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor={"#f5f5f5"}
    >
      <VStack className="vstack flex">
        <div className="flex gap-2">
          <Text
            className="heading"
            fontSize="40"
            marginY={"20px"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
          >
            Log In /
          </Text>

          <Link to="/signup">
            <Text
              className="heading"
              fontSize="40"
              marginY={"20px"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              style={{ textDecoration: "underline" }}
            >
              Sign UP
            </Text>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel fontSize={"20px"} marginBottom={"10px"}>
              Email Address:
            </FormLabel>
            <Input
              paddingLeft={"10px"}
              width={"400px"}
              height={"60px"}
              marginBottom={"20px"}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={"20px"} marginBottom={"10px"}>
              Password:
            </FormLabel>
            <Input
              paddingLeft={"10px"}
              width={"400px"}
              height={"60px"}
              marginBottom={"20px"}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
            />
          </FormControl>
          <Button
            backgroundColor={"#DC2D13"}
            color={"white"}
            fontSize={"20px"}
            _hover={{ backgroundColor: "#FFA500" }}
            transition={"0.2s ease-in-out"}
            width={"400px"}
            height={"60px"}
            type="submit"
          >
            Login In
          </Button>
          <Text marginTop={"20px"}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "underline" }}>
              Sign Up
            </Link>
          </Text>
        </form>
      </VStack>
    </Box>
  );
}

export default LoginForm;
