import { useContext } from "react";
import styles from "./NavigationBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGuideContext } from "../Context/GuideContext";

export const NavigationBar = () => {
  const { setSelectedGuide } = useGuideContext();
  const { guides } = useGuideContext();
  const { isLoading } = useGuideContext();
  console.log("navbar guides ", guides);
  let stuff = guides;

  const handleGuideClick = (id) => {
    const guide = guides.find((item) => item.id === id);
    setSelectedGuide(guide);
  };

  if (!guides || guides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Navbar expand="lg" className={`${styles.customNavbar}`}>
      <Container>
        <Navbar.Brand>
          <Link className={styles.title} to="/">
            Study!
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavLinkLinks} me-auto`}>
            <Nav.Link>
              <Link className={styles.NavLinkLinks} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.NavLinkLinks} to="translations">
                Translations
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={styles.NavLinkLinks} to="typing">
                Typing
              </Link>
            </Nav.Link>
            <NavDropdown
              className={styles.NavLinkLinks}
              title={
                <Link className={styles.NavLinkLinks} to="guides">
                  Guides
                </Link>
              }
            >
              <NavDropdown.Item>
                <Link
                  className={styles.NavLinkLinks}
                  to={`guide/${guides[0].id}`}
                  onClick={() => handleGuideClick(guides[0].id)}
                >
                  Operative Guide
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className={styles.NavLinkLinks}
                  to={`guide/${guides[1].id}`}
                  onClick={() => handleGuideClick(guides[1].id)}
                >
                  Imperative Guide
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className={styles.NavLinkLinks}
                  to={`guide/${guides[2].id}`}
                  onClick={() => handleGuideClick(guides[2].id)}
                >
                  Past Tense Guide
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className={styles.NavLinkLinks}
                  to={`guide/${guides[3].id}`}
                  onClick={() => handleGuideClick(guides[3].id)}
                >
                  Present Continous Tense Guide
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
