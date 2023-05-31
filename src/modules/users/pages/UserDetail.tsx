import { useContext, useEffect } from "react";
import { UserContext } from "../context/useContextUser";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UserDetails = () => {
  const { data, setData } = useContext(UserContext);

  const params = useParams();
  const navigate = useNavigate();

  const handleShowUserById = () => {
    const resultado = data.usuarios.find(
      (elemento) => elemento.id.toString() === params.id
    );
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setData({ ...data, usuario: resultado! });
  };

  const onBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    handleShowUserById();
  }, []);

  return (
    <div className="container">
      <h2>Detalles de usuario</h2>
      <hr />
      <div className="row my-3">
        <div className="col-md-3">
          <Link to={"/users/actualizar"}> Actualizar Usuario </Link>
        </div>
        <div className="col-md-3">
          <Link to={"/users/eliminar"}> Eliminar Usuario </Link>
        </div>
      </div>

      <div className=" row grid">
        <div className="col-md-2 labels">
          <h3> Nombre : </h3>
          <h5> Usuario : </h5>
          <h5> Correo : </h5>
          <p>Telefono :</p>
          <p>Compañia :</p>
          <p>Web :</p>
        </div>
        <div className="col-md-8">
          <h3> {data.usuario.name.toUpperCase()}</h3>
          <h5> {data.usuario.username}</h5>
          <h5> {data.usuario.email}</h5>
          <p>
            <span>{data.usuario.phone}</span>
          </p>
          <p>
            <span>{data.usuario.company?.name}</span>
          </p>
          <p>
            <span>{data.usuario.website}</span>
          </p>
        </div>
      </div>
      <button className="btn btn-primary" onClick={onBack}>
        Atras
      </button>
    </div>
  );
};
