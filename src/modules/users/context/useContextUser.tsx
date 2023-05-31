import { createContext } from "react";
import { IUser } from "../models/User";

export interface IUserContext {
  usuarios: IUser[];
  usuario: IUser;
}

export interface IUserContextProps {
  data: IUserContext;
  setData: (data: IUserContext) => void;
}

export const UserContext = createContext<IUserContextProps>({
  data: {
    usuarios: [],
    usuario: {
      id: 0,
      name: "",
      email: "",
      phone: "",
      username: "",
      website: "",
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setData: () => {},
});
