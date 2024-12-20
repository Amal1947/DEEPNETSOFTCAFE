import React from 'react';
import DEEPNET from "../assets/DEEP NET SOFT.png";
import logo from "../assets/logo.png";
import Twitter from "../assets/basil_twitter-outline.png";
import facebook from "../assets/iconoir_facebook.png";
import youtube from "../assets/mingcute_youtube-line.png";
import instagram from "../assets/Frame 151.png";
import telephone from "../assets/bytesize_telephone.png";
import gmail from "../assets/Vector.png";
import gmail2 from "../assets/Vector (1).png";
import location from "../assets/Group.png";
function Footer() {
  return (
    <div className=''>
    <div className='md:flex '><div className="relative md:flex-1">
      <div
        className="border p-5 mx-5  flex flex-col items-center relative  "
        style={{
          borderRadius: '14.64px',
          padding: '16px',
          height: 'auto',
        }}
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{
            width: '74px',
            height: '66px',
            position: 'absolute',
            top: '-33px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'black',
          }}
        />
        {/* DEEP NET Text */}
        <img
          src={DEEPNET}
          alt="DEEPNET"
          style={{
            width: '175px',
            height: '30px',
            marginTop: '30px', // Space between DEEP NET and the logo
            marginBottom: '10px', // Space between DEEP NET and social media icons
          }}
        />
        {/* Social Media Icons */}
        <div
          className="flex justify-center gap-4"
          style={{
            width: '100%',
          }}
        >
          <img
            src={facebook}
            alt="Facebook"
            style={{
              width: '12.57px',
              height: '12.46px',
              padding: '1.0px 3.66px 1.04px 3.14px',
            }}
          />
          <img
            src={Twitter}
            alt="Twitter"
            style={{
              width: '11.97px',
              height: '11.86px',
              padding: '1.61px 0.62px 1.47px 0.62px',
            }}
          />
          <img
            src={youtube}
            alt="YouTube"
            style={{
              width: '13.17px',
              height: '13.05px',
            }}
          />
          <img
            src={instagram}
            alt="Instagram"
            style={{
              width: '12.13px',
              height: '11.27px',
            }}
          />
        </div>
      </div>
    </div>
    <div
        className="border p-5 mx-5 mt-5 flex flex-col items-center relative md:flex-1"
        style={{
          borderRadius: '14.64px',
          padding: '16px',
          height: 'auto',
        }}
      >
        {/* Logo */}
        {/* Replace this with your logo */}
        {/* DEEP NET Text */}
        <p className='mb-5'
          style={{
           
            height: '24px',
            fontFamily: 'Oswald, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20.75px',
            letterSpacing: '0.03em',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
           
            color: '#0796EF', // Add this to ensure the text is visible
            padding: '4px 8px', // Optional for better spacing inside the background
            borderRadius: '4px', // Optional for rounded corners
          }}
        >
         <b>CONNECT WITH US</b>
        </p>
        <div
  className="flex justify-center items-center gap-4"
  style={{
    width: '100%',
  }}
>
  <img
    src={telephone}
    alt="telephone"
    style={{
      width: '21px',
      height: '17.42px',
      padding: '1.04px 3.66px 1.04px 3.14px',
    }}
  />
  <span
    style={{
      fontFamily: 'Oswald, sans-serif', // Applied font family
      fontSize: '14px',                 // Applied font size
      fontWeight: 400,                  // Applied font weight
      lineHeight: '20.75px',            // Applied line height
      letterSpacing: '0.03em',          // Applied letter spacing
      textAlign: 'left',                // Applied text alignment
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
      color: '#857878',                    // Optional: Add appropriate text color if needed
    }}
  >
    +91 9567843340
  </span>
</div>

<div
  className="flex justify-center items-center gap-4"
  style={{
    width: '100%',
  }}
>
  {/* Gmail Icon Container */}
  <div
    style={{
      position: 'relative', // Makes the parent a relative container
      width: '21px', // Matches the final size of the Gmail icon
      height: '17.42px', // Matches the final size of the Gmail icon
    }}
  >
    {/* First Gmail Image */}
    <img
      src={gmail}
      alt="gmail part 1"
      style={{
        position: 'absolute',
        top: '1.69px', // Adjusted to align within the container
        left: '0.72px',
        width: '13.02px',
        height: '6.99px',
        opacity: 1, // Ensure visibility
      }}
    />
    {/* Second Gmail Image */}
    <img
      src={gmail2}
      alt="gmail part 2"
      style={{
        position: 'absolute',
        top: '0.97px', // Adjusted to align within the container
        left: '0px',
        width: '14.45px',
        height: '11.61px',
        opacity: 1, // Ensure visibility
      }}
    />
  </div>
  <span
    style={{
      fontFamily: 'Oswald, sans-serif', // Applied font family
      fontSize: '14px',                 // Applied font size
      fontWeight: 400,                  // Applied font weight
      lineHeight: '20.75px',            // Applied line height
      letterSpacing: '0.03em',          // Applied letter spacing
      textAlign: 'left',                // Applied text alignment
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
      color: '#857878',                 // Optional: Add appropriate text color if needed
    }}
  >
    info@deepnetsoft.com
  </span>
</div>


      </div>
      <div
  className="border p-5 mx-5 mt-5 flex flex-col items-center relative md:flex-1"
  style={{
    borderRadius: '14.64px',
    padding: '16px',
    height: 'auto',
  }}
>
  {/* FIND US Text */}
  <p
    className="mb-5"
    style={{
      height: '24px',
      fontFamily: 'Oswald, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20.75px',
      letterSpacing: '0.03em',
      textAlign: 'center', // Center-align FIND US text
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
      color: '#0796EF',
      padding: '4px 8px',
      borderRadius: '4px',
    }}
  >
    <b>FIND US</b>
  </p>

  {/* Location Section */}
  <div
    className="flex justify-center items-start gap-2"
    style={{
      width: '100%',
    }}
  >
    {/* Location Icon */}
    <img
      src={location}
      alt="location"
      style={{
        width: '21px',
        height: '17.42px',
        padding: '1.04px 3.66px 1.04px 3.14px',
      }}
    />
    {/* Address Text */}
    <span
      style={{
        fontFamily: 'Oswald, sans-serif',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20.75px',
        letterSpacing: '0.03em',
        textAlign: 'center', // Center-align address text
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
        color: '#857878',
      }}
    >
      First floor, Geo infopark, <br />
      Infopark EXPY, Kakkanad
    </span>
  </div>
</div></div>
<div className='p-5'
  style={{
    width: '100%', // Make it span the entire container
    maxWidth: '393px', // Restrict maximum width to match design
    height: 'auto', // Allow height to adjust as needed
    display: 'flex',
    flexDirection: 'column', // Stacks the content
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px', // Adds spacing between lines
    opacity: '1',
  }}
>
  {/* First Line Text */}
  <div className='px-5'
    style={{
      width: '100%',
      textAlign: 'center', // Centers the text within the container
    }}
  >
    <p
      style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '10px',
        fontWeight: 600,
        lineHeight: '12px',
        letterSpacing: '0.03em',
        color: '#857878',
        whiteSpace: 'nowrap', // Prevents text wrapping
        overflow: 'hidden',
        textOverflow: 'ellipsis', // Handles overflow with ellipsis if needed
      }}
    >
      © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
    </p>
  </div>

  {/* Second Line with Links */}
  <div  className='px-5'
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center', // Creates equal space between links
      alignItems: 'center',
    }}
  >
    {/* Terms & Conditions */}
    <p
      style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '10px',
        fontWeight: 600,
        lineHeight: '12px',
        letterSpacing: '0.03em',
        color: '#857878',
        margin: 0, // Removes default paragraph margin
        textDecoration: 'underline', // Adds underline for links
        cursor: 'pointer', // Indicates clickable text
      }}
    >
      Terms & Conditions
    </p>

    {/* Privacy Policy */}
    <p className='px-5'
      style={{
        fontFamily: 'Lato, sans-serif',
        fontSize: '10px',
        fontWeight: 600,
        lineHeight: '12px',
        letterSpacing: '0.03em',
        color: '#857878',
        margin: 0, // Removes default paragraph margin
        textDecoration: 'underline', // Adds underline for links
        cursor: 'pointer', // Indicates clickable text
      }}
    >
      Privacy Policy
    </p>
  </div>
</div>


    </div>
  );
}

export default Footer;
