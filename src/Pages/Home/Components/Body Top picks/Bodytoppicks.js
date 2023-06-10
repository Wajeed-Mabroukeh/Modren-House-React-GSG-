import "./Bodytoppicks.css"
import Toppickstitle from "./Components/Toppickstitle/Toppickstitle"
import Bodypicks from "./Components/Bodypicks/Bodypicks"
import Footerpicks from "./Components/Footerpicks/Footerpicks"


function Bodytoppicks() {
    return (
      <div className='Bodytoppicks'>
        <Toppickstitle titlec="Top Picks For You" subtitlec="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."/>
        <Bodypicks />
        <Footerpicks subtitlec="View More"/>
      </div>
    );
  }
  

  export default Bodytoppicks;