import { useQuery } from "@tanstack/react-query";
import { UsersApi } from "@api/users.ts";
import { USERS_QUERY_KEYS } from "@entities/users/constants/users-query-key.ts";

export const useUser = (id: number) => {
  return useQuery({
    queryKey: [USERS_QUERY_KEYS, id], // Кеширование по ID
    queryFn: () => UsersApi.getUserById(id),
  });
};
