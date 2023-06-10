import "./Button.css"
import { Link } from 'react-router-dom';

const Button = props => {
    return (
            <Link to={'/Shop'} id={'buttonA'} > {props.buttonT}</Link>
    );
  }
  

  export default Button;