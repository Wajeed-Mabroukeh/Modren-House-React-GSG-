import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Pages/Single Product/SingleProduct";
import MyAccount from "./Pages/My Account/myaccount";
import Checkout from "./Pages/Checkout/Checkout";
import Skeleton from "./Skeleton";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
         element={
          <Skeleton> 
          <Home/>
          </Skeleton> 
        } />
        <Route
          path="/Shop"
          element={
            <Skeleton> 
              <Shop />
              </Skeleton> 
          }
        />
        <Route
          path="/SingleProduct"
          element={
            <Skeleton> 
              <SingleProduct />
              </Skeleton> 
          }
        />
        <Route
          path="/MyAccount"
          element={
            <Skeleton> 
            <MyAccount/>
            </Skeleton> 
          }
        />
        <Route
          path="/Checkout"
          element={
            <Skeleton> 
            <Checkout/>
            </Skeleton> 
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
