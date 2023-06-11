import "./Topblogs.css"
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";

const  Topblogs= props => {
    return (
      <div className='topblogs'>
       <TitleT titlec ={props.titlec} />
        <SubtitleT subtitleC ={props.subtitlec} />
      </div>
    );
  }
  

  export default Topblogs;