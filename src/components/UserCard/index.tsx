import styles from "./styles.module.scss";
import { UserModel } from "@entities/users/models/user.model.ts";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  user: UserModel;
}

const UserCard: FC<Props> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/user/${user.id}`)} key={user.id} className={styles.card}>
      <h3 className={styles.title}>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
};

export default UserCard;
