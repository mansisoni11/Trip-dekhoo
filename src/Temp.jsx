import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from '../src/assets/Logo1.png'
import './temp.css'
const Temp = () => {
    const[height,setHeight]=useState(window.innerHeight);
    const socialLinks = {
        instagram: 'https://www.instagram.com/tripdekhoo.com_',
        twitter: 'https://x.com/tripdekhoo',
        facebook: 'https://www.facebook.com/people/Tripdekhoocom/61570067206336/',
      };
      const openLink = (url) => {
        window.open(url, '_blank');
      };
    const handleWhatsAppClick = () => {
        const phoneNumber = '+917742386069'; // country code + number
        const message = encodeURIComponent('Hi! I am interested in your tour packages.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    useEffect(() => {
        const handleResize = () => setHeight(window.innerHeight);
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
  return (

    <div className='temp-main-TD w-100 d-flex'style={{height:height}}>
    <div>
    <img src={Logo} alt="Logo" className="logo-top-left" /></div>
    <div className="text-white d-flex Heading_temp-main-TD">
    <h1>Site is Under Re-Development</h1>
    <p className="para-main-TD" style={{fontSize:window.innerWidth<=768 ?"14px" :"24px"}}>
    We're gearing up to relaunch in the first week of May 2025
  </p>
  <p className="Info_temp-main-TD">
        Stay tuned for exciting travel updates! <br />
        Follow our social media pages linked below. For any inquiries related to tour <br/>packages, transfers, flights, visas, and more. <br />
        <span className="text-warning">Feel free to reach out to us via WhatsApp or email.</span>
      </p>
      <button className='btn button-temp mt-4' onClick={handleWhatsAppClick}>
      CONTACT US
      </button>
      <div className="d-flex align-items-center mt-2 gap-3">
      <p className="mt-3 text-bold" style={{fontSize:"15px"}}>GET SOCIAL</p>
      <div className="flex-grow-1">
        <hr className="mx-2 my-2 border-light divider-social" />
      </div>
      <div className="d-flex gap-3 icon-box">
        <FaFacebookF color='#5b53fb' onClick={() => openLink(socialLinks.facebook)} />
        <FaTwitter color='#5b53fb'  onClick={() => openLink(socialLinks.twitter)} />
        <FaInstagram color='#5b53fb' onClick={() => openLink(socialLinks.instagram)} />
      </div>
    </div>
    
    </div>
    </div>
  )
}

export default Temp
