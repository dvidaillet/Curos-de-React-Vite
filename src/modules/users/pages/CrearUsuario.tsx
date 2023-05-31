import { useContext } from "react";
import { Formulario } from "../components/Formulario/Formulario";
import { UserContext } from "../context/useContextUser";
import { IUser } from "../models/User";

export const CrearUser = () => {
  const { data, setData } = useContext(UserContext);

  const addUser = (item: IUser) => {
    data.usuarios.push(item);
    setData({...data} );
    console.log("🚀 ~ addUser ~ data:", data)    
  };

  return (
    <>    
      <Formulario
        addUser={(user) => {
          addUser(user);
        }}
        textoBoton="Crear"
      />
    </>
  );
};
