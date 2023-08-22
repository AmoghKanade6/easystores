import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <>
      <div data-testid="profile-button" className="mt-5 mb-5 p-5 ">
        <div className="container mt-5 ">
          <div className="justify-content-center ">
            <div className="col-md-12 col-lg-12 col-sm-9 ">
              <div className="card p-3 text-center">
                <div className="text-center">
                  <img
                    src={user.picture}
                    width="100"
                    className="rounded-circle"
                    alt="userimage"
                  />
                </div>
                <div className="text-center mt-3">
                  <h5 className="mt-2 user-name fw-bold mb-0">{user.name}</h5>
                  <span className="user-name">{user.email}</span>
                  <h6 className="mt-2 user-name fw-light">{user.nickname}</h6>
                  <div className="buttons">
                    <NavLink to="/shop">
                      <button outline className=" btn btn-primary m-2">
                        Explore
                      </button>
                    </NavLink>
                    <NavLink to="/">
                      <button className="btn btn-primary m-2">Home</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
