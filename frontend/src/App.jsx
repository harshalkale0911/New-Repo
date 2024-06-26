import {useState} from 'react'
import { Box, Button } from '@chakra-ui/react';
import Navbar from './components/Navbar';
// import FrontPage from './components/FrontPage';
// import BackPage from './components/BackPage';
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';
// import Page4 from './components/Page4';
// import Page5 from './components/Page5';
import { AllRoutes } from './routes/AllRoutes';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [ ];
  
  const onNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Box >
        {pages[currentPage]}
        <Box display="flex" justifyContent="center" marginTop="auto">
          {currentPage > 0 && <Button onClick={onPrevPage}>Prev</Button>}
          {currentPage < pages.length - 1 && <Button onClick={onNextPage}>Next</Button>}
        </Box>
      </Box>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
};

export default App;
