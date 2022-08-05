import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';  
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, useNavigate} from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function HEADER(props) {

  const searchItems = props;

  const authPayment = localStorage.getItem('user');
  console.log(searchItems);

  let Navigate = useNavigate();

  // console.log(JSON.parse(authPayment)[0].UserName);
  
  const logOut = () => {
    localStorage.clear();
    Navigate('/login');
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';

 

  const renderMenu = (
    
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink to="/users" style={{'textDecoration': 'none', 'color': '#000'}} ><MenuItem onClick={handleMenuClose}>Users</MenuItem></NavLink>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>

    </Menu>
  );



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    > 
   
   {/* <NavLink  color="inherit" to="/cart" >
      <MenuItem  >
 
          <IconButton size="large" aria-label="show 4 new mails" >
              <Badge  badgeContent={props.cartItemNumber} color="error">

               <FaShoppingCart  />
              </Badge>

          </IconButton>
       
        </MenuItem>
        </NavLink> */}
        
        <NavLink color="inherit" to="/" style={{ textDecoration: 'none' , color:'black' }}>
        <MenuItem >
        
             <Button  color="inherit"
           
       
            component="div"
            variant="text"
               >
            
            HOME

            </Button>
            
 
            </MenuItem>
            </NavLink>

            <NavLink color="inherit" to="/users"  style={{ textDecoration: 'none' , color:'black' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
           component="div"
           size="large"
              >
                Users
           
           
           </Button></Box>
            
            
            </NavLink>

            <NavLink color="inherit" to="/users" style={{ textDecoration: 'none' , color:'black' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
           component="div"
           size="large"
              >
                About Us
           
           
           </Button></Box>
            
            
            </NavLink>

          <NavLink   to="/cart"  style={{ textDecoration: 'none' , color:'black' }} >

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge  badgeContent={props.cartItemNumber} color="error">

            <Box><Button size="large"> <FaShoppingCart  color='black' /> </Button></Box>
            </Badge>

            </IconButton>
            </NavLink>



           { authPayment ? 

                <NavLink color="inherit" to="/login"  style={{ textDecoration: 'none' , color:'black' }}>
                <Box mt={1}> 
                  <Button  color="inherit"

              
                component="div"
                size="large"
                  >
                    LOGOUT  ({JSON.parse(authPayment)[0].UserName})

                </Button></Box>


                </NavLink>

            :

                <NavLink color="inherit" to="/login"  style={{ textDecoration: 'none' , color:'black' }}>
                <Box mt={1}> 
                  <Button  color="inherit"

             
                component="div"
                size="large"
                  >
                    LOGIN


                </Button></Box>


                </NavLink>

          }



      {/* <MenuItem>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>

        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}

      
    </Menu>
  );
  // style={{position : "sticky" , top : "0" , zIndex : "100000"}}
  return (
    <Box sx={{ flexGrow: 1 }} style={{position : "sticky" , top : "0" , zIndex : "100000"}}>
      <AppBar position="static" style={{background: '#202020' }} >
        <Toolbar>
          

          {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton> */}


 
            <NavLink color="inherit" to="/" style={{ textDecoration: 'none', color:'white' }}>
             <IconButton  color="inherit"
            variant="h6"
        
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}

            label="Button" 
            labelstyle={{ fontSize: '63px'}}
          >
            
            Online Shopping Store 
            </IconButton>
            </NavLink>


        
          


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={props.searchItems}
            />

          </Search>


          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          

          <NavLink color="inherit" to="/" style={{ textDecoration: 'none', color:'white' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
      
           component="div"
           size="large"
              >
                HOME
           
           
           </Button></Box>
            
            
            </NavLink>
            

           
  
        

            { authPayment ? 

            <NavLink color="inherit" to="/login" style={{ textDecoration: 'none', color:'white' }}>
            <Box mt={1}> 
              <Button  color="inherit"
          
           component="div"
           size="large"
           onClick={logOut}
              >
                LOGOUT 
                ({JSON.parse(authPayment)[0].UserName})
           
           </Button></Box>
            
            
            </NavLink>
            
            :

            <NavLink color="inherit" to="/login" style={{ textDecoration: 'none', color:'white' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
      
           component="div"
           size="large"
              >
                LOGIN
           
           
           </Button></Box>
            
            
            </NavLink>
            
          }

          {/* <NavLink color="inherit" to="/register" style={{ textDecoration: 'none', color:'white' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
           noWrap
           component="div"
           size="large"
              >
                REGISTER
           
           
           </Button></Box>
            
            
            </NavLink> */}

              
            <NavLink color="inherit" to="/users" style={{ textDecoration: 'none', color:'white' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
           component="div"
           size="large"
              >
                Users
           
           
           </Button></Box>
            
            
            </NavLink>

            <NavLink color="inherit" to="/about" style={{ textDecoration: 'none', color:'white' }}>
            <Box mt={1}> 
              <Button  color="inherit"
           
           component="div"
           size="large"
              >
                About Us
           
           
           </Button></Box>
            
            
            </NavLink>

          <NavLink   to="/cart" style={{ textDecoration: 'none', color:'white' }} >

            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit"> */}
           

            <Box mt={1.4}>  <Badge  badgeContent={props.cartItemNumber} color="error">
            
              <Button size="large"> <FaShoppingCart  color='white' /> </Button>  </Badge></Box>

            {/* </IconButton> */}
            </NavLink>

  


          

          
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}

            
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
export default HEADER;