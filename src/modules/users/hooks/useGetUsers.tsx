import { useContext, useEffect, useState } from "react";
import { IUser } from "../models/User";
import { getUsers } from "../services/getUsers";
import { UserContext } from "../context/useContextUser";

export const useGetUsers = () => {
  const [usuarios, setUsuarios] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { data, setData } = useContext(UserContext);

  const handleGetUser = async () => {
    setLoading(true);
    try {
      const resultado = await getUsers();
      setUsuarios(resultado.data);
      setData({ ...data, usuarios: resultado.data });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { usuarios, loading,error };
};

export const useGetUserByID = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { data, setData } = useContext(UserContext);
  const handleGetUser = () => {
    setLoading(true);
    try {
      const resultado = data.usuarios.find((element) => element.id.toString() === id);

      setData({ ...data, usuario: resultado! });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetUser();
  }, []);
  return { loading, error };
};