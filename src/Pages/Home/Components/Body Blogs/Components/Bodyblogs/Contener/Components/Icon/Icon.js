import { Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


import "./Icons.css"


        
const getIconFromName = (iconName) => {
  switch (iconName) {
    case 'AccessTimeIcon':
      return <AccessTimeIcon/>;
      case 'CalendarTodayIcon':
        return <CalendarTodayIcon/>;
  }
}


const Iconss = props=>{
    
    var name = props.icon;
    const icon = getIconFromName(name);
    return (
        
      <div className='icon'>
         {icon}
         <Typography variant="h1" component="h1" id="titleBB">
            {props.time}
        </Typography>

      </div>
    );
  }
  

  export default Iconss;


