import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import "./Columnonetwo.css"
import { Typography } from "@mui/material";


function Columnonetwo() {
    return (
      <Box className={'columnonetwoall'} >
         <Typography variant="h5" component="h5" className={'typography-Links'}>
          Links
        </Typography>
         <Box className={'columnonetwo'}>
            <Link to={'/'} id={'buttonh'}   >Home</Link>
            <Link to={'/Shop'} id={'buttonh'} >Shop</Link>
            <Link to={'/Shop'}  id={'buttonh'} >About</Link>
            <Link to={'/Contact'} id={'buttonh'} >Contact</Link>
          </Box>
          </Box>
    );
  }
  
  export default Columnonetwo;