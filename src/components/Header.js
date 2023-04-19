import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row"> 
            <div className="col-6">
              <p>Free Shipping over $150</p>
            </div>
            <div className="col-6">
              <p>
                Hotline: <a href="tel:+55 11 999990000">+55 11 99999-0000</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;