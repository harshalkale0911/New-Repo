import { useState } from 'react';
import axios from 'axios';
import { Grid, GridItem, Button, Input, Text, Heading, Box } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const url = 'http://localhost:5000';
  const toast = useToast();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setUsername(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const response = await axios.post(`${url}/users/login`, {
          email,
          password,
        });
        if (response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
          toast({
            title: 'Login Successful',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
          localStorage.setItem('userDetails', JSON.stringify(response.data));
          navigate('/input-page');
        } else {
          throw new Error('Invalid response data');
        }
      } catch (error) {
        setError(error.response?.data?.message || 'An error occurred during login');
      }
    } else {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      try {
        const response = await axios.post(`${url}/users/register`, {
          username,
          email,
          password,
        });
        toast({
          title: 'Sign up successful! You can now log in.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });

        const loginResponse = await axios.post(`${url}/users/login`, {
          email,
          password,
        });
        localStorage.setItem('userDetails', JSON.stringify(loginResponse.data));
        navigate('/input-page');
      } catch (error) {
        setError(error.response?.data?.message || 'An error occurred during registration');
      }
    }
  };

  const togglePage = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <Grid placeItems="center" h="100vh" bg="gray.50" p={4}>
      <GridItem
        w={{ base: '90%', md: '400px' }}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        p={8}
        bg="white"
      >
        <form onSubmit={handleSubmit}>
          <Box textAlign="center" mb={6}>
            <Heading as="h1" size="xl" color="gray.600">
              {isLogin ? 'Log In' : 'Sign Up'}
            </Heading>
          </Box>

          {!isLogin && (
            <Input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={handleNameChange}
              mb={4}
              required
            />
          )}

          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            mb={4}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            mb={4}
            required
          />

          {!isLogin && (
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              mb={4}
              required
            />
          )}

          {error && <Text color="red.500" mb={4}>{error}</Text>}
          <Button type="submit" colorScheme="teal" width="full" mb={4}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>

          <Text color="gray.500" textAlign="center" onClick={togglePage} cursor="pointer">
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
          </Text>
        </form>
      </GridItem>
    </Grid>
  );
};

export default Auth;
