
import "./Icons.css"
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';


function Icons() {

    return (
      <div className='icons'>
         <Link to="/MyAccount" id={"link"}>
        <IconButton 
             size="large"
             aria-label="show 17 new notifications"
             color="inherit"
             >
              <PersonOutlinedIcon />
            </IconButton>
            </Link>

        <IconButton 
             size="large"
             aria-label="show 17 new notifications"
             color="inherit"
             >
              <SearchOutlinedIcon />
            </IconButton>

    <IconButton 
             size="large"
             aria-label="show 17 new notifications"
             color="inherit"
             >
              <FavoriteBorderOutlinedIcon />
            </IconButton>

     <IconButton 
             size="large"
             aria-label="show 17 new notifications"
             color="inherit"
             >
              <ShoppingCartOutlinedIcon />
            </IconButton>

      </div>
    );
  }
  
  export default Icons;