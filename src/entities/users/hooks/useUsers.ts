import { useQuery } from "@tanstack/react-query";
import { UsersApi } from "@api/users.ts";
import { USERS_QUERY_KEYS } from "@entities/users/constants/users-query-key.ts";

export const useUsers = () => {
  return useQuery({
    queryKey: [USERS_QUERY_KEYS],
    queryFn: UsersApi.getUsers,
  });
};
