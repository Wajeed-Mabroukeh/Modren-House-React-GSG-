import './Title.css';
import { Typography } from "@mui/material";

const TitleT  = props => {
  return (
      <Typography variant="h1" component="h1" id="titleBTP">
        {props.titlec}
        </Typography>

  );
}

export default TitleT;