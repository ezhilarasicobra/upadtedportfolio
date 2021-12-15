import { useContext, useState } from "react";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact, exp } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <a href="#about" onClick={toggleNavList} className="link link--nav">
            <span style={{textTransform: "uppercase",color:"#C5C6C7"}}>A</span>bout
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#skills" onClick={toggleNavList} className="link link--nav">
            <span style={{textTransform: "uppercase",color:"#C5C6C7"}}>S</span>kills
          </a>
        </li>
        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
             <span style={{textTransform: "uppercase",color:"#C5C6C7"}}>P</span>rojects
            </a>
          </li>
        ) : null}
        <li className="nav__list-item">
          <a
            href="#experience"
            onClick={toggleNavList}
            className="link link--nav"
          >
            <span style={{textTransform: "uppercase",color:"#C5C6C7"}}>E</span>xperience
          </a>
        </li>
        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
             <span style={{textTransform: "uppercase",color:"#C5C6C7"}}>C</span>ontact
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
