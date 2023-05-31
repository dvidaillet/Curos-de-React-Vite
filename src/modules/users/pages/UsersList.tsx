//  import { Loading } from "../../../components/loading/Spinner";
import { UserContext } from "../context/useContextUser";
import { useContext } from "react";
import { IUser } from "../models/User";
import { InfoCard } from "../components/card/Card";
import { useGetUsers } from "../hooks/useGetUsers";
import { Loading } from "../../../components/loading/Spinner";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const { loading } = useGetUsers();
  const { data } = useContext(UserContext);

  return (
    <>
      <div className="container">
        <h2>Lista de Usuarios</h2>
        <hr />
        <div className="my-2">
          <Link to={"crear"}> Crear Usuario </Link>
        </div>
        <div>
          {loading && <Loading />}
          {data.usuarios.map((usuario: IUser) => (
            <InfoCard key={usuario.id} user={usuario} />
          ))}
        </div>
      </div>
    </>
  );
};
