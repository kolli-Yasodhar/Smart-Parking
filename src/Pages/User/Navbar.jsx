import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findReqUser } from "../../Redux/User/Action";
import { Avatar } from "@chakra-ui/react";
import { Menu, MenuItem } from "@mui/material";
// import { deepPurple } from "@mui/material/colors";

const Navbar = () => {

  const [anchorEl, setAnchorE1] = useState(null);
  const [open, setOpen] = useState(false);
  const openMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const {user} = useSelector(store => store);
  console.log("reqUser - ", user)

  useEffect(() => {
    if(token) {
      dispatch(findReqUser(token));
    }
  },[token])

  function handlecloseMenu() {
    setAnchorE1(null);
  }

  function handleLogout() {
    handlecloseMenu();
  }

  function handleUserClick(e) {
    setAnchorE1(e.currentTarget)
  }

  return (
    <main className="font-serif border-b-2 shadow-md   h-[70px] z-10 fixed top-0 w-full">
      <div className="h-16 bg-white flex justify-between align-middle mx-3">
        <a href="/" className="flex  h-16 ml-3">
          <img
            src="https://plat4mation.com/wp-content/uploads/2019/11/PARK-NOW-logo-450x160-1.png"
            alt="location"
          />
        </a>

        <div className="flex items-center space-x-10 text-xl mt-2 ml-2 mr-4 " >
          <a href="about" className="hover:underline transition-all 250ms ease-in  " >About</a>
          <a href="features" className="hover:underline transition-all 250ms ease-in  ">
            Features
          </a>
          <a href="contact" className="contact  flex items-center hover:underline transition-all 250ms ease-in   ">
            Contact-Us
          </a>
          { user?.user?.fullName ? 
                    (
                      <div

                          // className='text-white'
                      > 
                      <Avatar
                          // onClick={handleUserClick}
                          name={`${user?.user?.fullName[0].toUpperCase()}`}
                          // aria-controls={open ? 'basic-menu' : undefined}
                          // aria-haspopup= "true"
                          // arai-expanded={open ? "true" : undefined}
                       />

                      <Menu 
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handlecloseMenu}
                      >
                            <MenuItem onClick={handleLogout} >
                                Logout
                            </MenuItem>
                      </Menu>
                        
                      </div>
                    )
                     : 
                    
                    ( <a href="login" className="login px-5 rounded-lg my-2 ml-2 py-1 " >
                          Login
                   </a>)
          }

          {/* <div className=' flex items-center font-bold  ' >
       
      </div>

      <div className='flex  text-xl mt-2'>
           </div> */}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
