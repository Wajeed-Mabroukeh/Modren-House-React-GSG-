import "./Columnonethree.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";

function Columnonethree() {
    return (
       <Box className={'columnonethreeall'} >
         <Typography variant="h5" component="h5" className={'typography-Help'}>
          Help
        </Typography>
         <Box className={'columnonethree'}>
            <Link to={'/'} id={'buttonh'}  className={'link-Privacy'} >Privacy Policies</Link>
            <Link to={'/'} id={'buttonh'} className={'link-Returns'} >Returns</Link>
            <Link to={'/'}  id={'buttonh'} className={'link-Pr'} >Privacy Policies</Link>
          </Box>
          </Box>
    );
  }
  
  export default Columnonethree;