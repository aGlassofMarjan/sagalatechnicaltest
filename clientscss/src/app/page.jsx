import styles from "@/styles/layout.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.dashboard}>

        <div className={styles.dashboard__main}>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <h4>Development Table</h4>
          </div>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <h4>Checkbox Table</h4>
          </div>
        </div>

        <div className={styles.dashboard__footer}>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <h4>4-Column Table</h4>
          </div>
          <div className={`${styles.card} ${styles.smallCard}`}>
            <h4>Complex Table</h4>
          </div>
        </div>
      </div>
    </>
  );
}
