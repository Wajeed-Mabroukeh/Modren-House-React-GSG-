import "./Columnonefourth.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import {TextField} from "@mui/material";

function Columnonefourth() {
    return (
       <Box className={'columnonefourthall'} >
         <Typography variant="h5" component="h5" className={'typography-Newsletter'}>
         Newsletter
        </Typography>
         <Box className={'columnonefourth'}>
         <TextField id="standard-basic" label="Enter Your Email Address" variant="standard"  />
         <TextField id="standard-basic" label="SUBSCRIBE" variant="standard" className={'textField-SUBSCRIBE'}/>
          </Box>
          </Box>
    );
  }
  
  export default Columnonefourth;