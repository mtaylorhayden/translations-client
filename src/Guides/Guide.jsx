import styles from "./Guide.module.css";
import containerStyles from "../Styles/Container.module.css";
import headerStyles from "../Styles/Header.module.css";
import descriptionStyles from "../Styles/Description.module.css";
import { useParams } from "react-router-dom";
import { useGuideContext } from "../Context/GuideContext";

export const Guide = (props) => {
  const { guideId } = useParams();
  const { selectedGuide } = useGuideContext();
  console.log(guideId);
  console.log("selectedGuide ", selectedGuide);

  return (
    <div className={containerStyles.container}>
      <div className={headerStyles.header}>Optative Mood</div>
      <div className={descriptionStyles.description}>
        The optative mood in Turkish is used to express wishes, desires, or
        requests.
      </div>
      <h3 className={descriptionStyles.description}>Examples:</h3>
      <ul>
        <li>Umarım iyi olursun.</li>
        <li>Translation: I hope you feel well.</li>
      </ul>
      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>Olumlu - Positive</th>
            <th>Olumsuz - Negative</th>
            <th>Olumlu Soru - Positive Question</th>
            <th>Olumsuz Soru - Negative Question</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.row}>Ben</td>
            <td className={styles.inside}>Geleyim</td>
            <td className={styles.inside}>Gelmeyeyim</td>
            <td className={styles.inside}>Geleyim mi</td>
            <td className={styles.inside}>Gelmeyeyim mi</td>
          </tr>
          <tr>
            <td className={styles.row}>Sen</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
          </tr>
          <tr>
            <td className={styles.row}>O</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
          </tr>
          <tr>
            <td className={styles.row}>Biz</td>
            <td className={styles.inside}>Gelelim</td>
            <td className={styles.inside}>Gelmeyelim</td>
            <td className={styles.inside}>Gelelim mi</td>
            <td className={styles.inside}>Gelmeyelim mi</td>
          </tr>
          <tr>
            <td className={styles.row}>Siz</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
          </tr>
          <tr>
            <td className={styles.row}>Onlar</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
            <td className={styles.inside}>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
