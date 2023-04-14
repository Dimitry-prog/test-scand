import Logo from "./Logo"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mt-14">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className="flex gap-10">
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login" className="px-10 py-2 border-2 rounded-3xl border-dark-blue">Log in</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header