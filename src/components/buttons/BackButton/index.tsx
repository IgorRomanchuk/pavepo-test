import styles from "./styles.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FC } from "react";

interface Props {
  title?: string;
}

const BackButton: FC<Props> = ({ title = "Back" }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.backButton}>
      <FaArrowLeft /> {title}
    </button>
  );
};

export default BackButton;
