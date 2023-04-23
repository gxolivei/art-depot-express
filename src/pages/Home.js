import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img 
                  src="images/main-banner-1.jpg" 
                  className="img-fluid rounded-3" 
                  alt="main banner" 
                />
                <div className="main-banner-content position-absolute">
                  <h4>HEADLINE</h4>
                  <h5>ART'S NAME</h5>
                  <p>Description, i.e., From $...</p>
                  <Link>BUY NOW</Link>
                </div>
              </div>
            </div>
            
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;