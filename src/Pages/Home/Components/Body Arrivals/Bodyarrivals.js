  import "./Bodyarrivals.css"
  import Contener from "./Contener/Contener"
  import img1 from "./Contener/Components/Img/Asgaard sofa 1.png"

function Bodyarrivals() {
    return (
      <div className='bodyarrivals'>
        <Contener img={img1} titlec={"New Arrivals"} subtitlec={"Asgaard sofa"} button={"Order Now"} />
      </div>
    );
  }
  

  export default Bodyarrivals;