import './Subtitle.css';
import { Link } from 'react-router-dom';

const Subtitle = props=> {
  return (
         <Link to={'/Shop'} id={'subtitleBTP'} > {props.subtitleC}</Link>
  );
}

export default Subtitle;