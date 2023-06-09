import './Imag.css';
import ImageList from '@mui/material/ImageList';


const Imag = props=> {
  return (
      <ImageList  className ={"imgBv"} >
          <img   
            src={props.img}
          />
    </ImageList>
    )
  }
export default Imag;