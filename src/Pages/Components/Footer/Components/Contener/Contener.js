import './Contener.css';
import TopContener from "./Components/TopContener/TopContener"
import BottomContener from "./Components/BottomContener/BottomContener"


function Contener() {
  return (
    <div className='contener'>
      <TopContener/>
      <BottomContener/>
    </div>
  );
}

export default Contener;