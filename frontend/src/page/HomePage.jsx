import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const HomePage = () => {
    
  return (
    <div style={{ textAlign: 'center',   }}>
      <h1 style={{ fontSize: '3rem' }}>Create Your Book</h1>
      <Link to="/input-page">
        <Button mt="4" colorScheme="teal"  >Start </Button>
      </Link>
    </div>
  );
};

export default HomePage;
