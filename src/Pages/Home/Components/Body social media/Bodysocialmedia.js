import "./Bodysocialmedia.css"
import Contener from "./Contener/Contener"
import img1 from "./Contener/Components/Img/Rectangle 17.png"

function Bodysocialmedia() {
    return (
      <div className='Bodysocialmedia'>
         <Contener img={img1} titlec={"Our Instagram"} subtitlec={"Follow our store on Instagram"} button={"Follow Us"} />
      </div>
    );
  }
  

  export default Bodysocialmedia;