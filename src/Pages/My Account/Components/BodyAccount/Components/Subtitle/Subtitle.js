import './Subtitle.css';
import { Typography } from "@mui/material";

const Subtitle = props=> {
  return (
         <Typography variant="p" component="p" id={'subtitleBAcc'}>
         {props.subtitleC}
         </Typography>
  );
}

export default Subtitle;