import styles from "@pages/UserDetailsPage/styles.module.scss";
import { UserModel } from "@entities/users/models/user.model.ts";
import { FC } from "react";

interface Props {
  user: UserModel;
}

const UserDetails: FC<Props> = ({ user }) => {
  const { name, email, phone, website, address, company } = user;

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <h2>Address</h2>
      <p>
        {address.street}, {address.city}
      </p>
      <h2>Company</h2>
      <p>{company.name}</p>
    </div>
  );
};

export default UserDetails;
