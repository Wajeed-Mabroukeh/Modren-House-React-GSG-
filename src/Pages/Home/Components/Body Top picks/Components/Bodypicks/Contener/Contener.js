import "./Contener.css"

import ImgT from "./Components/Imag/Imag";
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";



const Contener = props=> {
    return (
        <div className="contenerBP">
        <ImgT img ={props.img} />
        <TitleT titlec ={props.titlec}/>
        <SubtitleT subtitleC ={props.subtitlec} />
        </div>
    )
}

export default Contener;