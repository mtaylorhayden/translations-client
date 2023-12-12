import { useGuideContext } from "../Context/GuideContext";
import styles from "./Dropdown.module.css";

export const Dropdown = (props) => {
  const { guides } = useGuideContext();

  const onDropdownSelectHandler = (e) => {
    const selectedGuide = titles.find(
      (title) => title.title === e.target.value
    );

    console.log("dropdown ", selectedGuide);
    props.setGuide(selectedGuide.id);
  };

  let titles = [];

  titles = guides.map((guide) => {
    return {
      title: guide.title,
      id: guide.id,
    };
  });

  return (
    <select
      className={styles.selectDropdown}
      options={titles}
      onChange={onDropdownSelectHandler}
    >
      {/* i need this key so i can identify which guide was selected for the path */}
      {titles.map((title) => (
        <option key={title.id} value={title.title}>
          {title.title}
        </option>
      ))}
    </select>
  );
};
