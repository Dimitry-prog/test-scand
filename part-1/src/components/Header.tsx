import Logo from "./Logo"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mt-[60px]">
      <nav className="flex justify-between items-center">
        <Logo />
        <ul className="flex gap-10">
          <li><Link to="/product" className="font-[600] text-base leading-7">Product</Link></li>
          <li><Link to="/services" className="font-[600] text-base leading-7">Services</Link></li>
          <li><Link to="/about" className="font-[600] text-base leading-7">About</Link></li>
          <li><Link to="/login" className="px-12 py-3 text-base border-2 rounded-3xl border-dark-blue">Log in</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header