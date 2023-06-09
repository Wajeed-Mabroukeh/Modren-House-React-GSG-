import './TopContener.css';
import Columnone from "./Components/Columnone/Columnone" 
import Columnonetwo from "./Components/Columnonetwo/Columnonetwo"
import Columnonethree from "./Components/Columnonethree/Columnonethree"
import Columnonefourth from "./Components/Columnonefourth/Columnonefourth"


function TopContener() {
  return (
    <div className='topContener'>
     <Columnone/>
     <Columnonetwo/>
     <Columnonethree/>
     <Columnonefourth/>
    </div>
  );
}

export default TopContener;