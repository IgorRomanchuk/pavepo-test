import styles from "./styles.module.scss";
import BackButton from "@components/buttons/BackButton";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Page not found</p>
      <BackButton title="Back to users" />
    </div>
  );
};

export default NotFoundPage;
