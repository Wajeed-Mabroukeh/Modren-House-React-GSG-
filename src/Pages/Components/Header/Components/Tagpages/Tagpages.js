import './Tagpages.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


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
          <Box  className={'boxh'}>
            <Link to={'/'} id={'buttonh'}   >Home</Link>
            <Link to={'/Shop'} id={'buttonh'} >Shop</Link>
            <Link to={'/Shop'}  id={'buttonh'} >About</Link>
            <Link to={'/Contact'} id={'buttonh'} >Contact</Link>
          </Box>
  );
}




