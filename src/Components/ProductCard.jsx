import React from "react";
import Edit from "../images/edit.png";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ProductCard = ({
  item,
  isSelected,
  onSelect,
  showPrice,
  showBrand,
  showStock,
}) => {
  const { isAuthenticated } = useAuth0();
  const {
    id,
    title,
    description,
    quantity,
    price,
    brand,
    category,
    thumbnail,
    viewCount,
  } = item;
  const history = useHistory();

  const loadDetails = (id) => {
    if (isAuthenticated) {
      axios
        .patch(`http://localhost:4000/products/${id}`, {
          viewCount: viewCount + 1,
        })
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }
    history.push("/shop/details/" + id);
  };

  const editDetails = (id) => {
    history.push("/shop/update/" + id);
  };

  const handleCheckboxClick = (e) => {
    onSelect(item.id, e.target.checked);
  };

  return (
    <>
      <div data-testid="List" className="col-md-6 col-lg-4 col-10 mx-auto">
        <div className="card shadow p-2 mb-5 bg-body rounded" key={id}>
          {isAuthenticated ? (
            <input
              className="form-check-input"
              type="checkbox"
              checked={isSelected}
              onChange={handleCheckboxClick}
            />
          ) : (
            <></>
          )}
          <div className="card-img-top d-flex justify-content-center">
            <img
              src={thumbnail}
              className="card-thumbnail pro-img"
              alt={thumbnail}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold desc">{title}</h5>
            <h4 className="card-title font-weight-bold desc">
              {showPrice ? "$" : ""} {showPrice ? price : ""}
            </h4>
            <p className="card-title font-weight-bold desc cat">
              {showBrand ? brand : ""}
            </p>
            <p className="card-title font-weight-bold desc">
              {showStock ? "In stock :" : ""} {showStock ? quantity : ""}
            </p>
            <div className="cardfooter">
              <a
                onClick={() => {
                  loadDetails(id);
                }}
                className="btn btn-primary "
              >
                View
              </a>
              {isAuthenticated ? (
                <>
                  <a
                    onClick={() => {
                      editDetails(id);
                    }}
                    className="card-button"
                  >
                    <img
                      alt="edit"
                      src={Edit}
                      className="card-edit card-button"
                    />
                  </a>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
