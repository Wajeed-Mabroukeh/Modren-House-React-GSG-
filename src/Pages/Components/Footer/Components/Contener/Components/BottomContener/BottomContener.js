import './BottomContener.css';
import { Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';


function BottomContener() {
  return (
    <Box className={'bottomContener'}>
      <div className='lins'></div>
    <Typography variant="p" component="p"  className={'typography-footer-text'}>
    2022 Meubel House. All rights reverved
        </Typography>
    </Box>
  );
}

export default BottomContener;