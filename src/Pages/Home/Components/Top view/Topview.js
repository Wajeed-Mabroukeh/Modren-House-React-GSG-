import './Topview.css';
import Contener from "./Contener/Contener"
import img1 from "./Contener/Components/Img/Rocket single seater 1.png"


function Topview() {
  return (
    <div className='topview'>
     <Contener img={img1} titlec={"Rocket single seater"} subtitlec={"Shop Now"}  />
    </div>
  );
}

export default Topview;