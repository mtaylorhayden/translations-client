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

  console.log("3 Navbar");

  const handleGuideClick = (id) => {
    const guide = guides.find((item) => item.id === id);
    setSelectedGuide(guide);
  };

  let content = null;

  if (!isLoading) {
    content = guides.map((guide) => {
      return (
        <NavDropdown.Item key={guide.id}>
          <Link
            className={styles.NavLinkLinks}
            to={`guide/${guide.id}`}
            onClick={() => handleGuideClick(guide.id)}
          >
            {guide.title}
          </Link>
        </NavDropdown.Item>
      );
    });
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
              <Link className={styles.NavLinkLinks} to="/admin">
                Admin
              </Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link className={styles.NavLinkLinks} to="translations">
                Translations
              </Link>
            </Nav.Link> */}
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
              {content}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
