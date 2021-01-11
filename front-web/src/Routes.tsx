import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
