import "./Bodyblogs.css"
import Topblogs from "./Components/Topblogs/Topblogs"
import Bodyblogss from "./Components/Bodyblogs/Bodyblogss"
import Footerblogs from "./Components/Footerblogs/Footerblogs"

function Bodyblogs() {
    return (
      <div className='bodyblogs'>
        <Topblogs titlec="Our Blogs" subtitlec="Find a bright ideal to suit your taste with our great selection"/>
        <Bodyblogss/>
        <Footerblogs subtitlec="View All Post"/>
      </div>
    );
  }
  

  export default Bodyblogs;