import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import styles from "./AdminHome.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGuideContext } from "../Context/GuideContext";

export const AdminHome = () => {
  const { guides, isLoading } = useGuideContext();

  let content = <p>Loading...</p>;

  if (!isLoading) {
    content = (
      <div className={styles.guides}>
        {guides.map((guide) => (
          <Link to={`/admin/${guide.id}`} key={guide.id}>
            <Card style={{ width: "18rem" }} className={styles.guideCard}>
              <Card.Body>
                <Card.Title>{guide.title}</Card.Title>
                <Card.Text>{guide.description}</Card.Text>
                <Button variant="primary">Edit</Button>
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <Header
      title="Admin Home Page"
      description="This page is used for admins only. Create, update, or remove guides and their sentences and translations."
    >
      {content}
    </Header>
  );
};
