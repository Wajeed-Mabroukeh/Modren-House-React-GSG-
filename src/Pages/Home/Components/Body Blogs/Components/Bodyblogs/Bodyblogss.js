import "./Bodyblogss.css"
import Contener from "./Contener/Contener"
import img1 from "./Contener/Components/Img/Rectangle 13.png"
import img2 from "./Contener/Components/Img/Rectangle 14.png"
import img3 from "./Contener/Components/Img/Rectangle 15.png"


function Bodyblogss() {
    return (
      <div className='bodyblogss'>
        <Contener img={img1} titlec={"Going all-in with millennial design"} subtitlec={"Read More"}  />
        <Contener img={img2} titlec={"Going all-in with millennial design"} subtitlec={"Read More"}  />
        <Contener img={img3} titlec={"Going all-in with millennial design"} subtitlec={"Read More"}  />
      </div>
    );
  }
  

  export default Bodyblogss;