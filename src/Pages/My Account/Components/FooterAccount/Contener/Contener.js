import "./Contener.css"

import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";



const Contener = props=> {
    return (
        <div className="contenerAcc">
        <TitleT titlec ={props.titlec}/>
        <SubtitleT subtitleC ={props.subtitlec} />
        </div>
    )
}

export default Contener;