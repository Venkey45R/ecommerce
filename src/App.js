import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Signin from "./containers/Signin";
import Cart from "./containers/Cart";
import ConfirmCart from "./containers/ConfirmCart";
import Category from "./containers/Category";

function App() {
  return (
    <div className="">
      <Router>
          <Header />
          <Routes>
          <Route index element={<Signin />} /> 
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productId" exact Component={ProductDetail} />
          <Route path="/Filter/:category" element={<ProductListing />} />
          <Route path="/Signin" exact Component={Signin} />
          <Route path="/Cart" exact Component={Cart} />
          <Route path="/ConfirmCart/:productId" exact Component={ConfirmCart} />
          <Route path="/categories" exact Component={Category} />
          <Route>404 Not Found </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
