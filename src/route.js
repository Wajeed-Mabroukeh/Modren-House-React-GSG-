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
import Contact from "./Pages/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
         element={
          <Skeleton name="homeF"> 
          <Home/>
          </Skeleton> 
        } />
        <Route
          path="/Shop"
          element={
            <Skeleton name="shopF"> 
              <Shop />
              </Skeleton> 
          }
        />
        <Route
          path="/SingleProduct"
          element={
            <Skeleton name="singleProductF" > 
              <SingleProduct />
              </Skeleton> 
          }
        />
        <Route
          path="/MyAccount"
          element={
            <Skeleton name="myAccountF"> 
            <MyAccount/>
            </Skeleton> 
          }
        />
        <Route
          path="/Checkout"
          element={
            <Skeleton name="checkoutF"> 
            <Checkout/>
            </Skeleton> 
          }
        />
        <Route
          path="/Contact"
          element={
            <Skeleton name="contactF"> 
            <Contact/>
            </Skeleton> 
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
