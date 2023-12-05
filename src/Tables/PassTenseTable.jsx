import styles from "./Table.module.css";

export const PassTenseTable = () => {
  return (
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
          <td className={styles.inside}>Yazdım</td>
          <td className={styles.inside}>Yazmadım</td>
          <td className={styles.inside}>Yazdım mı?</td>
          <td className={styles.inside}>Yazmadım mı?</td>
        </tr>
        <tr>
          <td className={styles.row}>Sen</td>
          <td className={styles.inside}>Yazdım</td>
          <td className={styles.inside}>Yazmadın</td>
          <td className={styles.inside}>Yazdım mı?</td>
          <td className={styles.inside}>Yazmadın mı?</td>
        </tr>
        <tr>
          <td className={styles.row}>O</td>
          <td className={styles.inside}>Yazdı</td>
          <td className={styles.inside}>Yazmadı</td>
          <td className={styles.inside}>Yazdı mı?</td>
          <td className={styles.inside}>Yazmadın mı?</td>
        </tr>
        <tr>
          <td className={styles.row}>Biz</td>
          <td className={styles.inside}>Yazdık</td>
          <td className={styles.inside}>Yazmadık</td>
          <td className={styles.inside}>Yazdık mı?</td>
          <td className={styles.inside}>Yazmadık mı?</td>
        </tr>
        <tr>
          <td className={styles.row}>Siz</td>
          <td className={styles.inside}>Yazdınız</td>
          <td className={styles.inside}>Yazmadınız</td>
          <td className={styles.inside}>Yazdınız mı?</td>
          <td className={styles.inside}>Yazmadınız mı?</td>
        </tr>
        <tr>
          <td className={styles.row}>Onlar</td>
          <td className={styles.inside}>Yazdılar</td>
          <td className={styles.inside}>Yazmadılar</td>
          <td className={styles.inside}>Yazdılar mı?</td>
          <td className={styles.inside}>Yazmadılar mı?</td>
        </tr>
      </tbody>
    </table>
  );
};
