import "./FooterAccount.css"
import Contener from "./Contener/Contener"

function Footeraccount() {
    return (
      <div className='footeraccount'>
        <Contener  titlec={"Free Delivery"} subtitlec={"For all oders over $50, consectetur adipim scing elit."}  />
        <Contener  titlec={"90 Days Return"} subtitlec={"If goods have problems, consectetur adipim scing elit."}  />
        <Contener  titlec={"Secure Payment"} subtitlec={"100% secure payment, consectetur adipim scing elit."}  />
      </div>
    );
  }
  
  export default Footeraccount;