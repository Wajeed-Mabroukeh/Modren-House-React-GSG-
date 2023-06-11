import "./Contener.css"

import ImgT from "./Components/Imag/Imag";
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";
import Iconss from "./Components/Icon/Icon"


const Contener = props=> {
    return (
        <div className="contenerBB">
        <ImgT img ={props.img} />
        <TitleT titlec ={props.titlec}/>
        <SubtitleT subtitleC ={props.subtitlec} />
        <div className="allicon">
        <Iconss time="5 min" icon="AccessTimeIcon" />
        <Iconss time="12th Oct 2022" icon="CalendarTodayIcon" />
        </div>
        </div>
    )
}

export default Contener;