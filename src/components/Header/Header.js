import React, { useRef, useState } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.css";

const navLinks = [
  { display: "Home", url: "/" },
  { display: "About", url: "/about" },
  { display: "Courses", url: "#", dropdown: true, submenu: [
    { display: "C++ Notes", url: "https://www.w3schools.com/cpp/default.asp" },
    { display: "C++ Video Tutorials", url: "#" },
    { display: "Java", url: "https://www.w3schools.com/java/default.asp" },
    { display: "JavaScript", url: "https://www.w3schools.com/js/default.asp" },
    { display: "HTML", url: "https://www.w3schools.com/html/default.asp" },
    { display: "CSS", url: "https://www.w3schools.com/css/default.asp" }
  ]},
  { display: "Blog", url: "/blog" },
  { display: "Register", url: "/register" },
  { display: "SignUp", url: "/signup" },
  { display: "Login", url: "/login" },
  { display: "Feedbacks", url: "/feedback" },
  
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <header className="header">
        <Container>
          <div className="header-content d-flex align-items-center justify-content-between">
            <div>
              <h1 className="academy-title">Ethiopia Coders Academy</h1>
              <p className="academy-subtitle">Empowering the Future of Technology</p>
            </div>
            <div className="flag">
              <img src="/ethiopia-flag.png" alt="Ethiopian Flag" className="flag-image" />
            </div>
          </div>
        </Container>
      </header>

      <nav className="navigation">
        <Container>
          <div className="nav__menu" ref={menuRef}>
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className={`nav__item ${item.dropdown ? 'dropdown' : ''}`}
                  onClick={item.dropdown ? () => toggleDropdown(index) : null}
                >
                  <Link to={item.url}>{item.display}</Link>
                  {item.dropdown && activeDropdown === index && (
                    <ul className="dropdown__submenu">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex} className="submenu__item">
                          <a href={subitem.url}>{subitem.display}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile__menu" onClick={menuToggle}>
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
