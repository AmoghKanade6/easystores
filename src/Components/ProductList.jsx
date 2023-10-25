import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Delete from "../images/delete.png";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Container = styled.div`
  margin-top: 80px;
`;
const Title = styled.h3`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeleteContainer = styled.div`
  display: flex;
  justify-content: start;
`;
const Customization = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 20px;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;
const Option = styled.option``;
const SearchFilter = styled.div`
  width: 50%;
  margin-top: 5px;
`;

const ProductList = () => {
  const { isAuthenticated } = useAuth0();
  const [productData, setProductsData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [selectBrand, setSelectBrand] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showBrand, setShowBrand] = useState(true);
  const [showStock, setShowStock] = useState(true);
  const [showPrice, setShowPrice] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((resp) => {
        setProductsData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    if (searchValue !== "") {
      return await axios
        .get(`http://localhost:4000/products?q=${searchValue}`)
        .then((resp) => {
          setProductsData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSortFilter = async (e) => {
    let value = e.target.value;
    if (value === "All" || value === "Brand") {
      setSortValue(value);
      return await axios
        .get(`http://localhost:4000/products`)
        .then((resp) => {
          setProductsData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSortValue(value);
      return await axios
        .get(`http://localhost:4000/products?_sort&category=${value}`)
        .then((resp) => {
          setProductsData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleBrand = async (e) => {
    let priceSelector = e.target.value;
    if (priceSelector === "Brand") {
      setSelectBrand(priceSelector);
      return await axios
        .get(`http://localhost:4000/products`)
        .then((resp) => {
          setProductsData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSelectBrand(priceSelector);
      return await axios
        .get(`http://localhost:4000/products?_sort&brand=${priceSelector}`)
        .then((resp) => {
          setProductsData(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((cardId) => cardId !== id));
      setSelectAll(false);
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };

  const handleSelectAllClick = () => {
    if (selectAll) {
      setSelectedIds([]);
      setSelectAll(false);
    } else {
      setSelectedIds(productData.map((card) => card.id));
      setSelectAll(true);
    }
  };

  const handleDeleteSelectedClick = () => {
    if (window.confirm("Are you sure you want to delete selected products?")) {
      selectedIds.forEach((id) => {
        axios
          .delete(`http://localhost:4000/products/${id}`)
          .then(() => {
            setProductsData((prev) =>
              prev.filter((card) => !selectedIds.includes(card.id))
            );
            setSelectedIds([]);
            setSelectAll(false);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };

  const handlePriceChange = () => {
    setShowPrice(!showPrice);
  };
  const handleBrandChange = () => {
    setShowBrand(!showBrand);
  };
  const handleStockChange = () => {
    setShowStock(!showStock);
  };

  return (
    <>
      <Container>
        <FilterContainer className="search-sm">
          <Title className="pt-0">Shop</Title>
          <SearchFilter>
            <div className="search">
              <input
                type="text"
                value={searchValue}
                required
                className="form-control"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
          </SearchFilter>
          <Title>
            <NavLink
              to="/shop/addproduct"
              className="btn btn-primary btn-sm add p-2"
            >
              Add
            </NavLink>
          </Title>
        </FilterContainer>
        <FilterContainer className="search-sm">
          <Filter>
            <FilterText data-testid="cat">Categories :</FilterText>
            <Select onChange={handleSortFilter} value={sortValue}>
              <Option>All</Option>
              <Option>Clothing</Option>
              <Option>Shoes</Option>
              <Option>Electronics</Option>
              <Option>Cosmetics</Option>
            </Select>
            {isAuthenticated ? (
              <DeleteContainer>
                <div className="form-check mt-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                  />
                  <label className="form-check-label">Select All</label>
                </div>
                {selectedIds.length > 0 && (
                  <img
                    onClick={handleDeleteSelectedClick}
                    alt="delete"
                    src={Delete}
                    className="card-delete mt-4 ms-4 card-button"
                  />
                )}
              </DeleteContainer>
            ) : (
              <></>
            )}
          </Filter>
          <Filter>
            <FilterText>Sort By :</FilterText>
            <Select
              data-testid="sort"
              onChange={handleBrand}
              value={selectBrand}
            >
              <Option>Brand</Option>
              <Option>Apple</Option>
              <Option>pTron</Option>
              <Option>Mamaearth</Option>
              <Option>Sparx</Option>
              <Option>MSI</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Customization>
          <div className="form-check mt-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={showPrice}
              onChange={handlePriceChange}
            />
            <label className="form-check-label">Price</label>
          </div>
          <div className="form-check mt-1 ms-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={showBrand}
              onChange={handleBrandChange}
            />
            <label className="form-check-label">Brand</label>
          </div>
          <div className="form-check mt-1 ms-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={showStock}
              onChange={handleStockChange}
            />
            <label className="form-check-label">Stock</label>
          </div>
        </Customization>
        <div className="container-fluid mt-5 mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-3">
                {productData?.length === 0 && (
                  <h4 className="text-center">No Products Found</h4>
                )}
                {productData?.map((item) => (
                  <ProductCard
                    data-testid="List"
                    item={item}
                    key={item.id}
                    isSelected={selectedIds.includes(item.id)}
                    onSelect={handleSelect}
                    showBrand={showBrand}
                    showPrice={showPrice}
                    showStock={showStock}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductList;
