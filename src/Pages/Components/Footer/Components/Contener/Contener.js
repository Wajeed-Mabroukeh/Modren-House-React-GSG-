import './Contener.css';
import TopContener from "./Components/TopContener/TopContener"
import BottomContener from "./Components/BottomContener/BottomContener"


const Contener = props => {
  return (
    <div className={props.namepage}>
      <TopContener/>
      <BottomContener/>
    </div>
  );
}

export default Contener;