import "./header.css";
import { CiMenuBurger } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import  { IconContext } from "react-icons"


export default function Header() {
  return (
    <IconContext.Provider value={{size: '30px'}}>
      <header className="header">
          <div className="top-header">
            <div className="left-menu">
              <button><CiMenuBurger /></button>
            </div>
            <div className="middle-menu">
              <a href=""><img src="src/assets/logo-4-png.png" alt="logo sitio web" /></a>
            </div>
            <div className="right-menu">
              <button><FaShoppingCart/></button>
            </div>
          </div>
          <div className="bottom-header">
              <ul className="list-menu">
                  <li><a href="">Rent</a></li>
                  <li><a href="">Fleet</a></li>
                  <li><a href="">About us</a></li>
                  <li><a href="">FAQs</a></li>
              </ul>
          </div>
      </header>
    </IconContext.Provider>
  );
}
