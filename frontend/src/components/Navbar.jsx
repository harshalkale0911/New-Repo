 
import { Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex  >
      <Link to="/">
        <Button >Home</Button>
      </Link>
      <Flex>
        <Link to="/auth">
          <Button  >Login</Button>
        </Link>
        <Link to="/auth">
          <Button >Sign Up</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
