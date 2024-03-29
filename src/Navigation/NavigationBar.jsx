import styles from "./NavigationBar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useGuideContext } from "../Context/GuideContext";
import { useAuthContext } from "../Context/AuthContext";

export const NavigationBar = () => {
  const { isAuth, userRole, signOut } = useAuthContext();
  const { setSelectedGuide, guides, isLoading } = useGuideContext();
  let dropdown;

  const handleGuideClick = (id) => {
    const guide = guides.find((item) => item.id === id);
    setSelectedGuide(guide);
  };

  const showAdminPage = () => {
    if (userRole === "admin") {
      console.log("showing admin page");
      return (
        <Nav.Link>
          <Link className={styles.NavLinkLinks} to="/admin">
            Admin
          </Link>
        </Nav.Link>
      );
    }
  };

  const renderDropdownItems = () => {
    return guides.map((guide) => (
      <NavDropdown.Item key={guide.id}>
        <Link
          className={styles.NavLinkLinks}
          to={`guide/${guide.id}`}
          onClick={() => handleGuideClick(guide.id)}
        >
          {guide.title}
        </Link>
      </NavDropdown.Item>
    ));
  };

  let content = (
    <>
      <Nav.Link>
        <Link className={styles.NavLinkLinks} to="/">
          Sign In
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link className={styles.NavLinkLinks} to="register">
          Register
        </Link>
      </Nav.Link>
    </>
  );

  if (!isLoading && isAuth) {
    dropdown = renderDropdownItems();
    content = (
      <>
        {showAdminPage()}
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
          {dropdown}
        </NavDropdown>
        <Nav.Link>
          <Link onClick={signOut} className={styles.NavLinkLinks} to="/">
            Sign Out
          </Link>
        </Nav.Link>
      </>
    );
  }

  return (
    <Navbar expand="lg" className={`${styles.customNavbar}`}>
      <Container>
        <Navbar.Brand>
          <Link className={styles.title} to="/">
            Study!
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-na v" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`${styles.NavLinkLinks} me-auto`}>{content}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
