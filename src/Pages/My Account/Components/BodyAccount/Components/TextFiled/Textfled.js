import './Textfled.css';
import TextField from '@mui/material/TextField';


const Textfled = props => {
  return (

     <TextField id="standard-basic" label={props.txtF} variant="standard"  className={'textfiled'}/>

  );
}

export default Textfled;