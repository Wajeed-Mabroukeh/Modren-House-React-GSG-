import './Imag.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Imag = props=> {
  return (
  //  img-container
      <ImageList  className ={props.style} >
     
          <img   
            src={props.img}
          />
     
    </ImageList>
    )
  }
export default Imag;