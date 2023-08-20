import CartButton from "./components/CartButton";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
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
            <img
              className="filter-white"
              src="src/assets/images/cart.svg"
              height="22"
              width="22"
            ></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
