import { Routes, Route, Navigate } from "react-router-dom";
import { UserDetails } from "../pages/UserDetail";
import { UsersList } from "../pages/UsersList";
import { useState } from "react";
import { IUserContext, UserContext } from "../context/useContextUser";
import { CrearUser } from "../pages/CrearUsuario";
import { UpdateUser } from "../pages/ActualizarUsuario";
import { DeleteUser } from "../pages/Eliminar";

const UserRouter = () => {
  const [data, setData] = useState<IUserContext>({
    usuarios: [],
    usuario: {
      id: 0,
      name: "",
      email: "",
      phone: "",
      username: "",
      website: "",
    },
  });

  return (
    <UserContext.Provider value={{data, setData}}>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path=":id" element={<UserDetails />} />
        <Route path="/crear" element={<CrearUser />} />
        <Route path="/actualizar" element={<UpdateUser />} />
        <Route path="/eliminar" element={<DeleteUser />} />
        <Route path={"*"} element={<Navigate to={"/users"} replace />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default UserRouter;
