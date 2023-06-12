import "./TopAccount.css"
import ImgT from "./Components/Imag/Imag";

const  Topaccont = props => {
    return (
      <div className='topaccont'>
         <ImgT img ={props.img} />
      </div>
    );
  }
  
  export default Topaccont;