import { useContext } from "react";
import { Formulario } from "../components/Formulario/Formulario";
import { UserContext } from "../context/useContextUser";
import { IUser } from "../models/User";

export const UpdateUser = () => {
  const { data, setData } = useContext(UserContext);

  const addUser = (item: IUser) => {
    console.log("🚀 ~ addUser ~ item:", item);
    // paso1: buscar la posiscion del usuario
    const p = data.usuarios.findIndex((user) => user.id === item.id);
    console.log("🚀 ~ addUser ~ p:", p);
    //paso2: Crear una copia del arreglo (Buenas Practicas)
    const usuarios2 = [...data.usuarios];
    console.log("🚀 ~ addUser ~ usuarios2:", usuarios2);
    //paso3: asignarle a la copia el usuario actualizado
    usuarios2[p] = item;
    //paso4: Asignarle al arreglo original el arreglo actualizado
    data.usuarios = usuarios2;
    setData({ ...data });
    console.log("🚀 ~ addUser ~ data:", data);
  };
  return (
    <>
      <Formulario
        addUser={(user) => {
          addUser(user);
        }}
        textoBoton="Actualizar"
        userByUpdate={data.usuario}
      />
    </>
  );
};
