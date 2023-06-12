import "./Button.css"
import { Link } from 'react-router-dom';

const Button = props => {
    return (
            <Link to={'/'} id={'buttonAcc'} > {props.buttonT}</Link>
    );
  }
  

  export default Button;