import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import DealsPage from "./DealsPage";
import CartPage from "./CartPage";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/deals">Deals</NavLink> |{" "}
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;