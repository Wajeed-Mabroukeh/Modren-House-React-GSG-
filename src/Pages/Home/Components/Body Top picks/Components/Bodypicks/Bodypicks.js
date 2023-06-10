import "./Bodypicks.css"
import Contener from "./Contener/Contener"
import img1 from "./Contener/Components/Img/Trenton modular sofa_3 1.png"
import img2 from "./Contener/Components/Img/Granite dining table with dining chair 1.png"
import img3 from "./Contener/Components/Img/Outdoor bar table and stool 1.png"
import img4 from "./Contener/Components/Img/Plain console with teak mirror 1.png"

function Bodypicks() {
    return (
      <div className='bodypicks'>
        <Contener img={img1} titlec={"Trenton modular sofa_3"} subtitlec={"Rs. 25,000.00"}  />
        <Contener img={img2} titlec={"Granite dining table with dining chair"} subtitlec={"Rs. 25,000.00"}  />
        <Contener img={img3} titlec={"Outdoor bar table and stool"} subtitlec={"Rs. 25,000.00"}  />
        <Contener img={img4} titlec={"Plain console with teak mirror"} subtitlec={"Rs. 25,000.00"}  />
      </div>
    );
  }
  

  export default Bodypicks;