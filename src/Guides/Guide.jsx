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
      <div className={styles.examples}>Add examples here</div>

      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
            <th>Column 7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Col 1</td>
            <td>Row 1, Col 2</td>
            <td>Row 1, Col 3</td>
            <td>Row 1, Col 4</td>
            <td>Row 1, Col 5</td>
            <td>Row 1, Col 6</td>
            <td>Row 1, Col 7</td>
          </tr>
          <tr>
            <td>Row 2, Col 1</td>
            <td>Row 2, Col 2</td>
            <td>Row 2, Col 3</td>
            <td>Row 2, Col 4</td>
            <td>Row 2, Col 5</td>
            <td>Row 2, Col 6</td>
            <td>Row 2, Col 7</td>
          </tr>
          <tr>
            <td>Row 3, Col 1</td>
            <td>Row 3, Col 2</td>
            <td>Row 3, Col 3</td>
            <td>Row 3, Col 4</td>
            <td>Row 3, Col 5</td>
            <td>Row 3, Col 6</td>
            <td>Row 3, Col 7</td>
          </tr>
          <tr>
            <td>Row 4, Col 1</td>
            <td>Row 4, Col 2</td>
            <td>Row 4, Col 3</td>
            <td>Row 4, Col 4</td>
            <td>Row 4, Col 5</td>
            <td>Row 4, Col 6</td>
            <td>Row 4, Col 7</td>
          </tr>
          <tr>
            <td>Row 5, Col 1</td>
            <td>Row 5, Col 2</td>
            <td>Row 5, Col 3</td>
            <td>Row 5, Col 4</td>
            <td>Row 5, Col 5</td>
            <td>Row 5, Col 6</td>
            <td>Row 5, Col 7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
