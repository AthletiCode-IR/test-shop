import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Shop,
  Contact,
  Auth,
  Cart,
  Taskbar,
  AnimatedSmoothFade
} from "./components";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./App.scss";

export default function App() {
  const components = [
    { id: 1, component: <Home />, route: "/" },
    { id: 2, component: <Shop />, route: "/shop" },
    { id: 3, component: <Cart />, route: "/cart" },
    { id: 4, component: <Auth />, route: "/auth" },
    { id: 5, component: <Contact />, route: "/contact" }
  ];
  return (
    <div className="App">
      <Router>
        <Taskbar />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<Contact />} /> */}
          {components.map((component) => (
            <Route
              path={component.route}
              element={
                <AnimatedSmoothFade>{component.component}</AnimatedSmoothFade>
              }
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
