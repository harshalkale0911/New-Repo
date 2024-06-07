import React from 'react';
import { Button, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box textAlign="center" mt="50px">
      <Heading as="h1" size="2xl">BookBuilder </Heading>
      <Link to="/input-page">
        <Button size="lg" mt="20px">Add Book</Button>
      </Link>
    </Box>
  );
};

export default HomePage;
