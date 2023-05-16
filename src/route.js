import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Checkout from "./Pages/Checkout/Checkout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
         element={
          <Home/>
        } />
        <Route
          path="/Shop"
          element={
              <Shop />
          }
        />
        <Route
          path="/SingleProduct"
          element={
              <SingleProduct />
          }
        />
        <Route
          path="/MyAccount"
          element={
            <MyAccount/>
          }
        />
        <Route
          path="/Checkout"
          element={
            <Checkout/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
