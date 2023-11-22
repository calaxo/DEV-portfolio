import { createRoot } from "react-dom/client";
import "@styles/index.css";
import "@styles/accueil.css";
import "@styles/back.css";
import "@styles/front.css";

import Page404 from "@pages/Page404";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import Accueil from "@pages/Accueil.jsx";

import Back from "@pages/Back.jsx";
import Front from "@pages/Front.jsx";

import Condition from "@pages/Condition.jsx";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const navigationLinkStyles = ({ isActive }) => ({
    color: isActive ? "#F4F4F5" : "#2f343d",
    fontSize: isActive ? "1.2em" : "1em",
    background: isActive ? "brown" : "#f0f0f0",
    borderRadius: "10px", // Ajout de la bordure arrondie
  });

  const navigationLinks = [
    { to: "/Accueil", text: "Accueil" },
    { to: "/Back", text: "Back" },
    { to: "/Front", text: "Front" },
  ];

  return (
    <Router>
      <div className="header">
        <NavLink to="/Accueil" className="logo">
          <div className="titre">Mon Portfolio</div>
        </NavLink>
        <div className="header-right">
          <div className="nav-links">
            <a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>

            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={`b${link.text.charAt(link.text.length - 1)} rounded-button`} style={navigationLinkStyles}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="burger-button" onClick={toggleHamburger}>
            <a className="burger-button_menu">menu</a>
            <div
              className="burger-button__line line1"
              style={
                hamburgerOpen
                  ? {
                      rotate: "-33deg",
                      transform: `translate(-0.05em, -0.15em)`,
                      borderRadius: "10px", // Ajout de la bordure arrondie
                    }
                  : { rotate: "0deg" }
              }
            ></div>

            {/* ... (similar changes for line2 and line3) */}
          </div>
        </div>
      </div>

      <div className="burger-menu" style={{ display: hamburgerOpen ? "block" : "none" }}>
        <div className="burger-nav-links">
          {navigationLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={toggleHamburger} className={`burger-b${link.text.charAt(link.text.length - 1)}`} style={navigationLinkStyles}>
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/Accueil" />} />
          <Route path="/Accueil" element={<Accueil />} />

          <Route path="/back" element={<Back />} />
          <Route path="/front" element={<Front />} />

          <Route path="/Condition" element={<Condition />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>Site © 2023</p>
        <NavLink to="/Condition">Condition légales</NavLink>
      </footer>
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
