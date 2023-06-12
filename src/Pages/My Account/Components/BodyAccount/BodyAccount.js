import "./BodyAccount.css"
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";
import ButtonT from "./Components/Button/Button";
import TextFiled from "./Components/TextFiled/Textfled"


function Bodyaccount() {
    return (
      <div className='bodyaccount'>
        <nav className="login">
        <TitleT titlec ="Log In"/>
      
        <nav className="username">
        <TextFiled txtF="Username or email address"/>
        </nav>

        <nav className="password">
        <TextFiled txtF="Password"/>
        </nav>
        <nav >

        <SubtitleT subtitleC ="Remember me" />

        </nav>
            <nav className="">
        <ButtonT buttonT ="Log In" />
        <SubtitleT subtitleC ="Lost Your Password?" />
            </nav>

        </nav>

        <nav  className="register">
        <TitleT titlec ="Register"/>
        <SubtitleT subtitleC ="Email address" />
        <TextFiled txtF="Email address"/>
        <SubtitleT subtitleC ="A link to set a new password will be sent to your email </br> address. </br> Your personal data will be used to support your </br> experience throughout this website, to manage access </br> to your account, and for other purposes described in our </br> <span> privacy policy.</span>" />
        <ButtonT buttonT ="" />
        </nav>
      </div>
    );
  }
  
  export default Bodyaccount;