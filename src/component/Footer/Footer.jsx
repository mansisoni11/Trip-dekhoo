import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {  FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
const Footer = () => {
    const socialLinks = {
        instagram: 'https://www.instagram.com/tripdekhoo.com_',
        twitter: 'https://x.com/tripdekhoo',
        facebook: 'https://www.facebook.com/people/Tripdekhoocom/61570067206336/',
        youtube: 'https://www.youtube.com/@tripdekhoo',
        location: 'https://maps.app.goo.gl/F5rvCAM5a6u9Lgu37',
        linkedin: 'https://www.linkedin.com/company/tripdekhoo-com/'
      };
      const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
      const handleWhatsAppClick = () => {
        const phoneNumber = '+917742386069';
        const message = encodeURIComponent('Hi! I am interested in your tour packages.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-2">
        Find the perfect trip for you and discover
        <br />
        extraordinary adventure with us
      </h1>
      <hr className="my-4" />

      <div className="row mt-4">
        {/* Left Section */}
        <div className="col-md-6 pe-md-5">
          <h6 className="fw-bold footer_left_Section_1">
            Thank You for Visiting Tripdekhoo!
          </h6>
          <p>
            Thanks for visiting! Whether you're dreaming of a tropical escape,
            an exciting adventure, or a relaxing getaway, Tripdekhoo is here to
            make it happen. We offer carefully crafted holiday packages for all
            types of travelers and budgets.
          </p>

          <h3 className="fw-bold footer_left_Section_contactus mt-5">
            Contact Us
          </h3>
          <p>
            Looking to create unforgettable memories?
            <br />
            Book your trip with us and turn your dream destination into reality!
          </p>
          <div className="d-flex">
            <div
              className="position-relative p-2 border col-6"
              style={{
                maxWidth: "100%",
                border: "1px solid black",
               wordWrap:"break-word"
              }}
            >
              {/* Corner overlays to hide top-right and bottom-left borders */}
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "-10px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  right: "-10px",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                }}
              />

              {/* Contact details */}
              <p
                className="mb-2 position-relative"
                style={{ zIndex: "999", fontSize: "14px" }}
              >
                <span className="footer_left_Section_1" style={{ fontWeight: 700 }}>
                  Mobile:
                </span>{" "}
                <span style={{ fontWeight: 600, color: "#000" }}>
                  +91 7742386069
                </span>
              </p>
              <p
                className="mb-2 position-relative"
                style={{ zIndex: "999", fontSize: "14px" }}
              >
                <span className="footer_left_Section_1" style={{ fontWeight: 700 }}>
                  Email:
                </span>{" "}
                <span style={{ fontWeight: 600, color: "#000" }}>
                  support@tripdekhoo.com
                </span>
              </p>
              <p className="mb-0" style={{ fontSize: "14px" }}>
                <span className="footer_left_Section_1" style={{ fontWeight: 700 }}>
                  Address:
                </span>{" "}
                <span style={{ fontWeight: 700, color: "#000" }}>
                  RTech Capital Highstreet Plot No. CP1-231, Apparel Park, Main
                  Mahal Road, Jagatpura, Jaipur, Rajasthan 302017 Rajasthan
                  302033
                </span>
              </p>
            </div>

            <div className="col-6"style={{alignItems:"flex-end"}} >
              <h6 className="footer_left_Section_1">Quick links</h6>
              <ul className="list-unstyled" style={{ fontSize: "14px" }}>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cancellation Policy</li>
                <li>Payment Details</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 ps-md-5">
          <h5 className="fw-bold">Connect with Expert</h5>
          <form>
            <div className="mb-1">
             
              <input
                type="text"
                placeholder="Full Name"
                className="form-control border-0 rounded-0 Form_bottom"
               
              />
            </div>
            <div className="mb-1">
             
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-control border-0 border-bottom rounded-0 Form_bottom"
              />
            </div>
            <div className="mb-1">
            
              <input
                type="email"
                placeholder="Email"
                className="form-control border-0 border-bottom rounded-0 Form_bottom"
              />
            </div>
            <div>
            <button className='btn button-Footer mt-4 text-align-end'>
            Submit
             </button></div>
           
          </form>

          <h6 className="mt-5 footer_left_Section_1 fw-bold ">Stay Connected</h6>
          <p>
            Follow us on social media for updates, tips, and exclusive travel
            deals:
          </p>
          <div className="d-flex gap-4">
          <FaInstagram size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={() => openLink(socialLinks.instagram)} />
          <FaFacebookF size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={() => openLink(socialLinks.facebook)} />
          <FaXTwitter size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={() => openLink(socialLinks.twitter)} />
          <FaYoutube size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={() => openLink(socialLinks.youtube)} />
          <FaWhatsapp size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={handleWhatsAppClick} />
          <FaLinkedin size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={() => openLink(socialLinks.linkedin)} />
          <CiLocationOn size={30} className="icon" color="#8c52ff" style={{ cursor: 'pointer' }} onClick={() => openLink(socialLinks.location)} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
