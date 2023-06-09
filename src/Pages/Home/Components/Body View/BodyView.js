import "./BodyView.css"
import Contener from "./Contener/Contener"
import img1 from "./Contener/Components/Img/Granite square side table 1.png"
import img2 from "./Contener/Components/Img/Cloud sofa three seater + ottoman_3 1.png"


function Bodyview() {
    return (
      <div className='Bodyview'>
          <Contener img={img1} titlec={"Side table"} subtitlec={"View More"}  />
          <Contener img={img2} titlec={"Side table"} subtitlec={"View More"}  />
      </div>
    );
  }
  

  export default Bodyview;