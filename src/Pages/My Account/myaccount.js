import './myaccount.css';
import TopAccount from "./Components/TopAccount/TopAccount"
import BodyAccount from "./Components/BodyAccount/BodyAccount"
import FooterAccount from "./Components/FooterAccount/FooterAccount"
import ImgT from "./Components/TopAccount/Components/Img/Group 78.png"

function Account() {
  return (
    <div className='account'>
    <TopAccount img={ImgT}/>
    <BodyAccount/>
    <FooterAccount/>
    </div>
  );
}

export default Account;