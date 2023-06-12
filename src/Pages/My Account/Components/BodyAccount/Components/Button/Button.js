import "./Button.css"
import { Link } from 'react-router-dom';

const Button = props => {
    return (
        <div className="boxB">
            <Link to={'/Shop'} id={'buttonS'} > {props.buttonT}</Link>
            </div>
    );
  }
  

  export default Button;