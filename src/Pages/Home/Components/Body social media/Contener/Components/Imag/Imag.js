import './Imag.css';
import ImageList from '@mui/material/ImageList';


const Imag = props=> {
  return (
      <ImageList  className ={"imgBS"} >
          <img   
            src={props.img}
          />
    </ImageList>
    )
  }
export default Imag;