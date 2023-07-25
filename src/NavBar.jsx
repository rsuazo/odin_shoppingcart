import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
        <h1>Suazo Shopping</h1>
        <div className="navContainer">
            <button type="button">
            <Link to="home">
                Home
              </Link>
            </button>
            <button type="button">
              <Link to="shop">
                Shop
              </Link>
            </button>
        </div>
    </>
  )
}

export default NavBar
