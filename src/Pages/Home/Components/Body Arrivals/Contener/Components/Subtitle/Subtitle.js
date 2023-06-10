import './Subtitle.css';
import { Link } from 'react-router-dom';

const Subtitle = props=> {
  return (
         <Link to={'/Shop'} id={'subtitleBA'} > {props.subtitleC}</Link>
  );
}

export default Subtitle;