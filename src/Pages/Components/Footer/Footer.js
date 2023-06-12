import './Footer.css';
import Contener from './Components/Contener/Contener';


const  Footer= props => {
  return (
    <div className='footer'>
      <Contener namepage = {props.name}/>
    </div>
  );
}

export default Footer;