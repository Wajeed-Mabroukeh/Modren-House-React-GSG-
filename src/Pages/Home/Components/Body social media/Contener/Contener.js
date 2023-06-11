import "./Contener.css"

import ImgT from "./Components/Imag/Imag";
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";
import ButtonT from "./Components/Button/Button";


const Contener = props=> {
    return (
        <div className="contenerBS">
        <ImgT img ={props.img} />
        <div className="rightSideBS">
        <TitleT titlec ={props.titlec}/>
        <SubtitleT subtitleC ={props.subtitlec} />
        <ButtonT buttonT ={props.button} />
        </div>
        </div>
    )
}

export default Contener;