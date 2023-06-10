import "./Footerpicks.css"
import SubtitleT from "./Components/Subtitle/Subtitle";

const Footerpicks =props=>{
    return (
      <div className='footerpicks'>
        <SubtitleT subtitleC ={props.subtitlec} />
      </div>
    );
  }
  

  export default Footerpicks;