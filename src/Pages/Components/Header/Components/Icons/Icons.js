
import "./Icons.css"
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Icons() {
    return (
      <div className='icons'>
        <IconButton 
             size="large"
             aria-label="show 17 new notifications"
             color="inherit"
             >
              <PersonOutlinedIcon />
            </IconButton>

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