import React from "react";
import { Center, Spinner, VStack, useToast } from "@chakra-ui/react";
import Post from "./Post";
import useFetchAllPosts from "../hooks/useFetchAllPosts";

const Posts = () => {
  const toast = useToast();

  const { posts, loading, error } = useFetchAllPosts();
  if (loading) {
    return (
      <Center>
        {" "}
        <Spinner size={"xl"} alignSelf={"center"} />
      </Center>
    );
  }

  return (
    <VStack spacing="4" align="stretch" p="4" maxW="md" mx="auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </VStack>
  );
};

export default Posts;
