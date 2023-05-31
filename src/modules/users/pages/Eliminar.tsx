import { useContext } from "react";
import { Formulario } from "../components/Formulario/Formulario";
import { UserContext } from "../context/useContextUser";
import { IUser } from "../models/User";

export const DeleteUser = () => {
  const { data, setData } = useContext(UserContext);

  const addUser = (item: IUser) => {
    console.log("🚀 ~ addUser ~ item:", item);
    data.usuarios = data.usuarios.filter((user) => user.id !== item.id);  
    setData({ ...data });
    console.log("🚀 ~ addUser ~ data:", data);
  };
  return (
    <>
      <Formulario
        addUser={(user) => {
          addUser(user);
        }}
        textoBoton="Eliminar"
        userByUpdate={data.usuario}
      />
    </>
  );
};
