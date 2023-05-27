import './Header.css';

import Tagpages from "./Components/Tagpages/Tagpages"
import Icons from "./Components/Icons/Icons"

function Header() {
  return (
    <div className='header'>
    <Tagpages/>
    <Icons/>
    </div>
  );
}

export default Header;