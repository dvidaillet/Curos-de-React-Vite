import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>Cruso de react</h1>
      <hr />
      <Link to="users">Usuarios</Link>
    </div>
  );
};
