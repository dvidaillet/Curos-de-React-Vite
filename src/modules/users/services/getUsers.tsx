import { mycustomAxios } from "../../../services/axios";
import { IUser } from "../models/User";

export const getUsers = async () => {
 
    return await mycustomAxios.get<IUser[]>("users/");
   
};

