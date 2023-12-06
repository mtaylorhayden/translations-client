import styles from "./Table.module.css";

export const PresentContinousTable = () => {
  return (
    <>
      <div className={styles.verb}>Gelmek conjugated</div>
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
            <td className={styles.inside}>Geliyorum</td>
            <td className={styles.inside}>Gelmiyorum</td>
            <td className={styles.inside}>Geliyor muyum?</td>
            <td className={styles.inside}>Gelmiyor muyum?</td>
          </tr>
          <tr>
            <td className={styles.row}>Sen</td>
            <td className={styles.inside}>Geliyorsun</td>
            <td className={styles.inside}>Gelmiyorsun</td>
            <td className={styles.inside}>Geliyor musun?</td>
            <td className={styles.inside}>Gelmiyor musun?</td>
          </tr>
          <tr>
            <td className={styles.row}>O</td>
            <td className={styles.inside}>Geliyor</td>
            <td className={styles.inside}>Gelmiyor</td>
            <td className={styles.inside}>Geliyor mu?</td>
            <td className={styles.inside}>Gelmiyor mu?</td>
          </tr>
          <tr>
            <td className={styles.row}>Biz</td>
            <td className={styles.inside}>Geliyoruz</td>
            <td className={styles.inside}>Gelmiyoruz</td>
            <td className={styles.inside}>Geliyor muyuz?</td>
            <td className={styles.inside}>Gelmiyor muyuz?</td>
          </tr>
          <tr>
            <td className={styles.row}>Siz</td>
            <td className={styles.inside}>Geliyorsunuz</td>
            <td className={styles.inside}>Gelmiyorsunuz</td>
            <td className={styles.inside}>Geliyor musunuz?</td>
            <td className={styles.inside}>Gelmiyor musunuz?</td>
          </tr>
          <tr>
            <td className={styles.row}>Onlar</td>
            <td className={styles.inside}>Geliyorlar</td>
            <td className={styles.inside}>Gelmiyorlar</td>
            <td className={styles.inside}>Geliyorlar mı?</td>
            <td className={styles.inside}>Gelmiyorlar mı?</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
