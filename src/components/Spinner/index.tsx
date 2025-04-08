import styles from "./styles.module.scss";

const Spinner = () => (
  <div className={styles.wrap}>
    <div className={styles.spinner}>
      <div className={styles.spinnerInner} />
    </div>
  </div>
);

export default Spinner;
