import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted"
      >
        <section className="pt-4">
          <MDBContainer className="text-center text-white text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className=" text-white" />
                  Easy stores
                </h6>
                <p className="text-white">
                  Buy latest products with best price if you are looking for
                  brand then here it is!
                </p>
              </MDBCol>

              <MDBCol md="2" lg="3" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase text-white fw-bold mb-4">
                  Menus
                </h6>
                <p>
                  <NavLink to="/" className=" text-white">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/shop" className=" text-white">
                    Shop
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/about" className=" text-white">
                    About
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/mostviewedproducts" className=" text-white">
                    Most Viewed Products
                  </NavLink>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="text-white">
                  <MDBIcon icon="home" className="me-3 text-white" />
                  Bengaluru
                </p>
                <p className="text-white">
                  <MDBIcon icon="envelope" className="me-3 text-white" />
                  easystores@gmail.com
                </p>
                <p className="text-white">
                  <MDBIcon icon="phone" className="me-3 text-white" /> + 06 734
                  567 98
                </p>
                <p className="text-white">
                  <MDBIcon icon="print" className="me-3 text-white" /> + 01 834
                  567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center text-white p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright: Amogh Kanade
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
