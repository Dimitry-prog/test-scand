import Logo from "./Logo"
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="pt-[55px] pb-2 sticky top-0 left-0 w-full z-40 bg-white">
      <nav className="flex justify-between items-center">
        <Logo />

        <div className={`w-full px-5 py-10 lg:py-0 lg:px-0 fixed left-0 lg:static lg:w-fit ${isOpen ? 'top-0' : '-top-[50%]'} bg-white lg:bg-transparent transition-all duration-500 z-50`}>
          <ul className="flex flex-col gap-10 items-center lg:flex-row">
            <li><NavLink to="/news" className={`font-[600] text-base leading-7 hover:opacity-70 transition-all duration-50`}>Product</NavLink></li>
            <li><NavLink to="/services" className="font-[600] text-base leading-7 hover:opacity-70 transition-all duration-500">Services</NavLink></li>
            <li><NavLink to="/about" className="font-[600] text-base leading-7 hover:opacity-70 transition-all duration-500">About</NavLink></li>
            <li><NavLink to="/login" className="px-12 py-3 text-base font-bold border-2 rounded-3xl border-dark-blue hover:bg-black hover:text-white transition-all duration-500">Log in</NavLink></li>
          </ul>
          <button onClick={() => setIsOpen(false)} type="button" className="w-8 h-8 flex items-center justify-center lg:hidden absolute top-5 right-5">
            <MdClose />
          </button>
        </div>

        <button onClick={() => setIsOpen(true)} type="button" className="w-8 h-8 flex items-center justify-center lg:hidden">
          <RxHamburgerMenu />
        </button>
      </nav>
    </header>
  )
}

export default Header;