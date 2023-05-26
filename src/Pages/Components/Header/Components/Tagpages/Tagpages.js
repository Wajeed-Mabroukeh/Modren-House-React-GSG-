import './Tagpages.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = ['Home', 'Shop', 'About' ,'Contact'];



function Tagpages() {
  return (
    <>
    <ResponsiveAppBar/>
    </>
  );
}

export default Tagpages;


function ResponsiveAppBar() {

  return (
          <Box className={'boxh'} >
            {pages.map((page) => (
              <Button id={'buttonh'}
                key={page}
                // onClick={}
              >
                {page}
              </Button>
            ))}
          </Box>
  );
}




