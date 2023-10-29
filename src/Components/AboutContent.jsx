import React from "react";
import aboutbanner from "../images/aboutbanner.jpg";

const AboutContent = () => {
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-12 col-lg-5 mt-5 text-center our-service-leftside-img">
              <img className="aboutimg" src={aboutbanner} alt="aboutusIMg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list p-5">
              <h1 className="mini-title fw-bold">About Us</h1>
              <h3 className="main-heading">
                How to use
                <span className="about-title fw-bold"> Easy Stores</span>{" "}
              </h3>
              <div className="row our-services-info ">
                <div className="fw-bold fs-3 col-12 mt-2 text-info fw-bold our-services-number">
                  General
                </div>
                <div className="col-12 our-services-data">
                  <h4 className="mt-2">
                    User can view all the products in shop page , user should
                    login to our website to access more features
                  </h4>
                </div>
                <div className="fw-bold fs-3 col-1 mt-5 text-info fw-bold our-services-number">
                  Login/Signup
                </div>
                <div className="col-12 our-services-data">
                  <h4 className="mt-2">
                    User can sign in to access additional features like Adding ,
                    updating and deleting products
                  </h4>
                </div>
                <div className="fw-bold fs-3 col-12 mt-5 text-info fw-bold our-services-number">
                  Viewed Products
                </div>
                <div className="col-12 our-services-data">
                  <h4 className="mt-2">
                    User can view most viewed products in form of bar graphs
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutContent;
