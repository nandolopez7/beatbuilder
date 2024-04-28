import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../css/navbar_initial_page_style.css";

export function NavbarInitialPage() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("MisEventos");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        data-bs-theme="dark"
        style={{position:"sticky", top:"0", zIndex:"2"}}
      >
        <Container>
          <Navbar.Brand className="neon-text">BeatBuilder</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link
                as={NavLink}
                to="/"
                onClick={() => handleItemClick("Home")}
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/info"
                onClick={() => handleItemClick("Info")}
                className={location.pathname === "/info" ? "active" : ""}
              >
                How do we work
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/sign"
                onClick={() => handleItemClick("Sign")}
                className={location.pathname === "/sign" ? "active" : ""}
              >
                Sign In/Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
