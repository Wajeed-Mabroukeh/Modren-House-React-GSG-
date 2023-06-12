import './Subtitle.css';
import { Typography } from "@mui/material";


const Subtitle = props=> {
  return (
    <Typography variant="h1" component="h1" id="subtitleBP">
        {props.subtitleC}
        </Typography>

  );
}

export default Subtitle;