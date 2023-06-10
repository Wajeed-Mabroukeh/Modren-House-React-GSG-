import "./Toppickstitle.css"
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";

const  Toppickstitle= props => {
    return (
      <div className='toppickstitle'>
       <TitleT titlec ={props.titlec} />
        <SubtitleT subtitleC ={props.subtitlec} />
      </div>
    );
  }
  

  export default Toppickstitle;