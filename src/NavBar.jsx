import CartButton from "./components/CartButton";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [count, setCount] = useState(0);

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Wand Shop
      </Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/shop">
            <CartButton count={count} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
