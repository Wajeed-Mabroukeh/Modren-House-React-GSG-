import './Home.css';
import Topview from "./Components/Top view/Topview"
import Bodyview from "./Components/Body View/BodyView"
import Bodytoppicks from "./Components/Body Top picks/Bodytoppicks"
import Bodyarrivals from "./Components/Body Arrivals/Bodyarrivals"
import Bodyblogs from "./Components/Body Blogs/Bodyblogs"
import Bodysocialmedia from "./Components/Body social media/Bodysocialmedia"

function Home() {
  return (
    <div className='home'>
       <Topview/>
       <Bodyview/>
       <Bodytoppicks/>
       <Bodyarrivals/>
       <Bodyblogs/>
       <Bodysocialmedia/>
    </div>
  );
}

export default Home;

