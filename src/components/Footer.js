import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" className="newsletter-image" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                  <input
                    type="text" 
                    class="form-control py-1" 
                    placeholder="Your Email Address" 
                    aria-label="Your Email Address" 
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text p-2" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Brazil, Santa Catarina <br/> Florianópolis
                </address>
                <a href="tel:+55 11 999990000" className="mt-3 d-block mb-1 text-white">
                  +55 11 999990000
                </a>
                <a href="mailto:mockup@email.forlater" className="mt-3 d-block mb-0 text-white">
                mockup@email.forlater
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white">
                    <BsLinkedin className="fs-5"/>
                  </a>
                  <a className="text-white">
                    <BsGithub className="fs-5"/>
                  </a>
                  <a className="text-white">
                    <BsYoutube className="fs-5"/>
                  </a>
                  <a className="text-white">
                    <BsInstagram className="fs-5"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Photographs</Link>
                <Link className="text-white py-2 mb-1">Paintings</Link>
                <Link className="text-white py-2 mb-1">Experimental</Link>
                <Link className="text-white py-2 mb-1">In production</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; { new Date().getFullYear() } Gabriel Oliveira
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;