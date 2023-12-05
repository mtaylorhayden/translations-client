import styles from "./Guide.module.css";
import { useParams } from "react-router-dom";

export const Guide = (props) => {
  const { guideId } = useParams();
  console.log(guideId);
  return (
    <div className={styles.container}>
      <div className={styles.header}>Optative Mood</div>
      <h4 className={styles.description}>
        The optative mood in Turkish is used to express wishes, desires, or
        requests.
      </h4>
      <h3 className={styles.description}>Examples:</h3>
      <ul>
        <li>Umarım iyi olursun.</li>
        <li>Translation: I hope you feel well.</li>
      </ul>
      {/* <div className={styles.examples}>Add examples here</div> */}
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
