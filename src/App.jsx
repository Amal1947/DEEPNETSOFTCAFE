import React, { useState } from "react";
import logo from "./assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  
} from "@material-tailwind/react";
import Menu from "./components/Menu"
import Footer from './components/Footer'
import thirdImage from "./assets/image 3.png"

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-black' style={{ backgroundImage: `url(${thirdImage})` }}>
      <div className="relative ">
        <div style={{ backgroundColor: "#121618", height: "40px" }} className="justify-center flex item-center">
          <img
            src={logo}
            className="absolute "
            style={{ height: "44px", width: "50px", top: "18px" }}
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              height: "19px",
              width: "19px",
            }}
          >
            <GiHamburgerMenu color="white" onClick={()=>{setOpen(true)}} />
          </div>
        </div>
        {/* ////////// drawer/////////// */}

        <Drawer open={open} onClose={()=>{setOpen(false)}} className="p-4" placement="right">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={()=>{setOpen(false)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>

    <div >
      <Menu/>
     
    </div>
<div> </div>




      </div>
    </div>
  );
}

export default App;
