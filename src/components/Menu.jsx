import React, { useEffect, useState } from "react";
import firstImg from "../assets/Rectangle 103.png";
import secondImg from "../assets/Rectangle 107.png";
import thirdImage from "../assets/image 3.png";
import juice from "../assets/image 39 (1) 2.png";
import Cocktail from "../assets/cocktail1 1.png";
import { BaseUrl } from "../Config/BaseUrl";
import {
  Drawer,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import axios from "axios";
import Footer from "./Footer";

function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(BaseUrl + "api/items").then((response) => {
      console.log(response, "ress");
      setData(response.data.data);
    });
  }, []);
  const uniqueMenus = [...new Set(data?.map((item) => item.menu))];
  const resultArray = uniqueMenus.map((menu) => ({
    menu,
    items: data
      .filter((item) => item.menu === menu)
      .map((item) => ({ itemName: item.itemName, price: item.price, description:item.description })),
  }));

  return (
    <div
      className="h-screen  "
      style={{ backgroundImage: `url(${thirdImage})` }}
    >
      <div style={{ backgroundImage: `url(${firstImg})`, height: "231px" }}>
        <div className="justify-center flex pt-5 align-cneter bg-black">
          <span className="text-white text-[40px] font-oswald drop-shadow-[4px_3px_0px_#800020]">
            MENU
          </span>
        </div>
        <div>
          <p
            className="align-center text-center"
            style={{
              fontFamily: "'Kelly Slab', cursive",
              color: "#BBBBBB",
              fontSize: "16px",
            }}
          >
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to place an order, use the "Order Online" button
            located below the menu.
          </p>
        </div>

        <div
          style={{ backgroundImage: `url(${secondImg})` }}
          className="text-white flex mb-5 "
        >
          <ButtonGroup
            className="flex justify-center items-center mt-5"
            style={{ height: "31.79px", width: "100%" }}
          >
            <Button>FOOD</Button>
            <Button>DRINKS</Button>
            <Button>BRUNCH</Button>
          </ButtonGroup>
        </div>

        {resultArray.map((el,i) => {
          console.log("result array",resultArray);
          
  // Calculate dynamic font size based on menu length
  const dynamicFontSize = el.menu.length > 20 ? "20px" : "30px"; // Adjust threshold and sizes as needed

  return (
    <div className="w-full bg-black  pb-5 " >
    <div className="border p-5 mx-5  h-[446px] relative bg-black ">
      <div className="absolute top-0 left-0">
        <img
          src={juice}
          alt=""
          className="h-[111px] w-[76px]"
        />
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          color: "white",
          fontFamily: "Oswald, sans-serif",
          fontWeight: 600,
          fontSize: "30px",
          lineHeight: "35px",
          letterSpacing: "0.03em", // 3%
        }}
      >
        <div className="flex flex-col items-center text-white">
          <div
            className="flex items-center relative"
            style={{ marginTop: "20px" }}
          >
            <div
              style={{
                width: "40px",
                height: "1.5px",
                backgroundColor: "#857878",
                position: "relative",
                top: "18px",
                marginRight: "10px",
              }}
            ></div>
            <div
              style={{
                fontSize: dynamicFontSize,
                whiteSpace: "normal", // Allow wrapping
                wordWrap: "break-word", // Break words if necessary
                textAlign: "center", // Center the text
              }}
            >
              {el.menu}
            </div>
            <div
              style={{
                width: "40px",
                height: "1.5px",
                backgroundColor: "#857878",
                position: "relative",
                top: "18px",
                marginLeft: "10px",
              }}
            ></div>
          </div>
          {/* <div>Cocktaile</div> */}

          {/* Example Content */}
          <div
            className="flex justify-between items-center text-white mt-5"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 400,
              fontSize: "11px",
              lineHeight: "23.71px",
              letterSpacing: "0.03em",
            }}
          >
            <span className="text-white mt-3" style={{ flex: 1 }}>
              {el.items[0].itemName}..............................${el.items[0].price}
            </span>
          </div>
          <div
            style={{
              fontFamily: "Kelly Slab",
              fontWeight: 400,
              fontSize: "8px",
              color: "#ffffff",
              opacity: "60%",
              wordWrap: "break-word",
              whiteSpace: "normal",
              lineHeight: "14px",
            }}
          >
            <span>
             {el.items[0].description}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src={Cocktail}
            alt=""
            className="h-[111px] w-[76px]"
          />
        </div>
      </div>
    </div>
    </div>
  );
})}


        <div className="bg-black">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Menu;
