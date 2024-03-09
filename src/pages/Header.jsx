import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Header = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const signout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Flex
      maxW={"md"}
      mx={"auto"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Text fontSize={32}>Student Hub</Text>
      <Button colorScheme="blue" p={3} onClick={signout}>
        Logout
      </Button>
    </Flex>
  );
};

export default Header;
