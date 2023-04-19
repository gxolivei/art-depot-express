import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row"> 
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping over $150</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0"> 
                Hotline:
                <a className="text-white" href="tel:+55 11 999990000">+55 11 99999-0000</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Art Depot Express</Link>
              </h2>
            </div>
            <div className="col-5">  
              <div className="input-group mb-3">
                <input
                  type="text" 
                  class="form-control" 
                  placeholder="Search Your New Piece of Art Here..." 
                  aria-label="Search Your New Piece of Art Here..." 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;