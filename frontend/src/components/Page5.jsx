import { Box, Text } from '@chakra-ui/react';
 
const Page5 = () => {
  const backgroundImageUrl = "https://th.bing.com/th?id=OIP.cXrbobyGIpnxEdQywNjpkAHaJE&w=225&h=276&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
  const title = "Nature";
  const content = "Page 5 content";

  return (
    <Box
      backgroundImage={`url(${backgroundImageUrl})`}
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="20px"
      color="grey"
    >
      <Text  >
        {title}
      </Text>
       
        <Text  >
          {content}
        </Text>
      </Box>
   
  );
};

export default Page5;
