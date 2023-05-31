import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/User";

export const InfoCard = (props: { user: IUser }) => {
  const navigate = useNavigate();
  const handleShowMore = (id: number) => {
    navigate({ pathname: id.toString() });
  };
  return (
    <div className="card ancho">
      <div className="card-body">
        <h5 className="card-title text-muted">{props.user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.user.email}</h6>
        <a className="card-link" onClick={() => handleShowMore(props.user.id)}>
          Ver Mas
        </a>
      </div>
    </div>
  );
};
