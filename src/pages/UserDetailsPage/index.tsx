import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useUser } from "@entities/users/hooks/useUser.ts";
import BackButton from "@components/buttons/BackButton";
import Spinner from "@components/Spinner";
import UserDetails from "@components/UserDetails";

const UserDetailsPage = () => {
  const { id } = useParams();
  const { data: user, isLoading, error } = useUser(Number(id));

  if (isLoading) return <Spinner />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrap}>
        <BackButton />
      </div>
      {user ? <UserDetails user={user} /> : <div>User not found</div>}
    </div>
  );
};

export default UserDetailsPage;
