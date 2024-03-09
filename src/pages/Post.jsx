import React from "react";
import { Box, Avatar, Text, IconButton, Icon, Flex } from "@chakra-ui/react";
import { FaComment, FaHeart } from "react-icons/fa";

const Post = ({ post }) => {
  const { content, createdAt } = post;

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4" boxShadow="md">
      <Flex align="center" mb="2">
        <Avatar size="sm" name={"userName"} />
        <Box ml="2">
          <Text fontWeight="bold">{"userName"}</Text>
          <Text fontSize="sm" color="gray.500">
            {"Umar"}
          </Text>
        </Box>
      </Flex>
      <Text>{content}</Text>
      <Flex mt="2" justify="space-between" align="center">
        <Text fontSize="sm" color="gray.500">
          {createdAt.toDate().toDateString()}
        </Text>
        <Box>
          <IconButton
            aria-label="Comment"
            icon={<Icon as={FaComment} />}
            variant="ghost"
            colorScheme="primary"
            mr="2"
          />
          <IconButton
            aria-label="Like"
            icon={<Icon as={FaHeart} />}
            variant="ghost"
            colorScheme="primary"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Post;
