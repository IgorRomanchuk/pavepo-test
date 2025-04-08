import styles from "./styles.module.scss";
import { UserModel } from "@entities/users/models/user.model.ts";
import UserCard from "@components/UserCard";
import { FC } from "react";

interface Props {
  users: UserModel[];
}

const UserList: FC<Props> = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
