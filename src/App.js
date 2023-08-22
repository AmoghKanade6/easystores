import React, { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./Components/Error";
import ErrorUser from "./Components/ErrorUser";
import Footer from "./Components/Footer";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
const LazyProducts = lazy(() => import("./Pages/Products"));
const LazyAbout = lazy(() => import("./Pages/About"));
const LazyHome = lazy(() => import("./Pages/Home"));
const LazyAddProduct = lazy(() => import("./Components/AddProduct"));
const LazyEditProduct = lazy(() => import("./Components/EditProduct"));
const LazyProductDetails = lazy(() => import("./Components/ProductDetails"));
const LazyProfile = lazy(() => import("./Pages/Profile"));
const LazyMostViewedProducts = lazy(() => import("./Pages/MostViewedProducts"));

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<h1 className="mt-5 pt-3">Loading...</h1>}>
          <Switch>
            <Route exact path="/" render={() => <LazyHome />} />
            <Route exact path="/about" render={() => <LazyAbout />} />
            <Route exact path="/shop" render={() => <LazyProducts />} />
            <Route
              exact
              path="/shop/addproduct"
              render={() =>
                isAuthenticated ? (
                  <LazyAddProduct />
                ) : (
                  <ErrorUser title={"You don't have permission to add"} />
                )
              }
            />
            <Route
              exact
              path="/shop/details/:id"
              render={() =>
                isAuthenticated ? (
                  <LazyProductDetails />
                ) : (
                  <ErrorUser
                    title={"You don't have permission to view details"}
                  />
                )
              }
            />
            <Route
              exact
              path="/shop/update/:id"
              render={() =>
                isAuthenticated ? (
                  <LazyEditProduct />
                ) : (
                  <ErrorUser title={"You don't have permission to update"} />
                )
              }
            />
            <Route
              exact
              path="/mostviewedproducts"
              render={() => <LazyMostViewedProducts />}
            />
            <Route
              exact
              path="/profile"
              render={() =>
                isAuthenticated ? (
                  <LazyProfile />
                ) : (
                  <ErrorUser title={"User profile not found"} />
                )
              }
            />
            <Route
              path="/*"
              render={() => (
                <Error
                  errorTitle="404 page not found"
                  errorDescription="Please return to home"
                  errorLink={`/`}
                />
              )}
            />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
