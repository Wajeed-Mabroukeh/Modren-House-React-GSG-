import "./BodyAccount.css"
import TitleT from "./Components/Title/Title";
import SubtitleT from "./Components/Subtitle/Subtitle";
import ButtonT from "./Components/Button/Button";
import TextFiled from "./Components/TextFiled/Textfled"
import Checkbox from "./Components/Checkbox/Checkbox"

function Bodyaccount() {
    return (
      <nav className='bodyaccount'>
        <nav className="login">
        <TitleT titlec ="Log In"/>
      
        <nav className="username">
        <TextFiled txtF="Username or email address"/>
        </nav>

        <nav className="password">
        <TextFiled txtF="Password"/>
        </nav>

        
        <Checkbox/>
        <nav className="subR">
        <SubtitleT subtitleC ="Remember me"  />

        </nav>
          
        <ButtonT buttonT ="Log In" />
        <nav className="subP">
        <SubtitleT subtitleC ="Lost Your Password?" />
            </nav>

        </nav>

       <nav className="register">
        <TitleT titlec ="Register"/>
        <nav  className="email">
        <TextFiled txtF="Email address"/>
        </nav>
        <nav  className="supRP">
        <SubtitleT subtitleC = "A link to set a new password will be sent to your email address."/>
       </nav>
        <nav  className="supRPS">
        <SubtitleT  subtitleC= "Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our  privacy policy." />
        </nav>
        <ButtonT buttonT ="Register" />
       
        </nav>
      </nav>
    );
  }
  
  export default Bodyaccount;