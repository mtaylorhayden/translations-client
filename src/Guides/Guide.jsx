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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
            <td>Row 1, Cell 4</td>
            <td>Row 1, Cell 5</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 4</td>
            <td>Row 2, Cell 5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
