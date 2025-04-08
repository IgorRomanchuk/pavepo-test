import styles from "./styles.module.scss";
import { useState } from "react";
import ActionBar from "components/ActionBar";
import UserList from "@components/UserList";
import Spinner from "@components/Spinner";
import { useUsers } from "@entities/users/hooks/useUsers.ts";

const HomePage = () => {
  const { data: users, isLoading, error } = useUsers();
  const [searchUser, setSearchUser] = useState("");
  const [filterCity, setFilterCity] = useState("");

  const filteredUsers = users?.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      user.email.toLowerCase().includes(searchUser.toLowerCase());

    const matchesCity = filterCity ? user.address.city === filterCity : true;

    return matchesSearch && matchesCity;
  });

  if (isLoading) return <Spinner />;

  if (error) return <div className={styles.errorWrap}>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User List</h1>
      <ActionBar
        onSearch={setSearchUser}
        onFilterCity={setFilterCity}
        options={users?.map((user) => user.address.city)}
        delay={1000}
      />
      {filteredUsers && <UserList users={filteredUsers} />}
    </div>
  );
};

export default HomePage;
