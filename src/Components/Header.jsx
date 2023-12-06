import containerStyles from "../Styles/Container.module.css";
import headerStyles from "../Styles/Header.module.css";
import descriptionStyles from "../Styles/Description.module.css";

export const Header = ({ title, description, children }) => {
  return (
    <div className={containerStyles.container}>
      <div className={headerStyles.header}>{title}</div>
      <div className={descriptionStyles.description}>{description}</div>
      {children}
    </div>
  );
};
