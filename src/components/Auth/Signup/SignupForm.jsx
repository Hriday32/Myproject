// SignupForm.js
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
import { Link } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    const { firstName, lastName, email, password } = formData;
    if (firstName === "") {
      alert("First name field is required");
    } else if (lastName === "") {
      alert("Last name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 5) {
      alert("Password length should be at least 5 characters");
    } else {
      // Store user data in local storage
      localStorage.setItem("user_" + email, JSON.stringify(formData));
      console.log("User signed up successfully:", formData);
      // Optionally, you can redirect the user to a login page after successful signup
      // history.push("/login");
    }
  };

  return (
    <Box
      paddingTop={"50px"}
      marginBottom={"50px"}
      maxW="md"
      mx="auto"
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      backgroundColor={"#F5F5F5"}
    >
      <VStack>
        <div className="flex gap-2">
          <Link to="/login">
            <Text
              fontSize="40px"
              marginY={"20px"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              style={{ textDecoration: "underline" }}
            >
              Login In
            </Text>
          </Link>
          <Text
            fontSize="40px"
            marginY={"20px"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
          >
            / Sign Up
          </Text>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              paddingLeft={"10px"}
              marginTop={"10px"}
              width={["200px", "400px"]}
              height={"60px"}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </FormControl>
          <FormControl>
            <FormLabel marginTop={"20px"}>Last Name</FormLabel>
            <Input
              paddingLeft={"10px"}
              marginTop={"10px"}
              width={["200px", "400px"]}
              height={"60px"}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </FormControl>
          <FormControl>
            <FormLabel marginTop={"20px"}>Email Address</FormLabel>
            <Input
              paddingLeft={"10px"}
              marginTop={"10px"}
              width={["200px", "400px"]}
              height={"60px"}
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </FormControl>
          <FormControl>
            <FormLabel marginTop={"20px"}>Password</FormLabel>
            <Input
              paddingLeft={"10px"}
              marginTop={"10px"}
              width={["200px", "400px"]}
              height={"60px"}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button
            marginTop={"20px"}
            backgroundColor={"#DC2D13"}
            color={"white"}
            fontSize={"20px"}
            _hover={{ backgroundColor: "#FFA500" }}
            transition={"0.2s ease-in-out"}
            width={["200px", "400px"]}
            height={"60px"}
            type="submit"
          >
            Sign Up
          </Button>
          <Text marginTop={"20px"}>
            I have an account?{" "}
            <Link to="/login" style={{ textDecoration: "underline" }}>
              Log In
            </Link>
          </Text>
        </form>
      </VStack>
    </Box>
  );
}

export default SignupForm;
