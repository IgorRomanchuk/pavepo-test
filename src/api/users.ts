import axios from "axios";
import { UserModel } from "@entities/users/models/user.model.ts";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const UsersApi = {
  getUsers: async (): Promise<UserModel[]> => {
    return await axios.get(API_URL).then((response) => response.data);
  },

  getUserById: async (id: number): Promise<UserModel> => {
    return await axios.get(`${API_URL}/${id}`).then((response) => response.data);
  },
};
