import { Box, Button, Center, Divider, Textarea } from "@chakra-ui/react";
import React from "react";

import NewPost from "./NewPost";
import Header from "./Header";
import Posts from "./Posts";
const Home = () => {
  return (
    <>
      <Header />
      <NewPost />
      <Divider />
      <Posts />
    </>
  );
};

export default Home;
