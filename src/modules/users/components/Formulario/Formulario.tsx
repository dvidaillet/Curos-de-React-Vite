import { FC } from "react";
import { useFormik } from "formik";
import { IUser } from "../../models/User";
import * as Yup from "yup";
import { Errores } from "../../../../components/Error/Error";
import { useNavigate } from "react-router-dom";

type FormularioProps = {
  addUser: (item: IUser) => void;
  textoBoton: string;
  userByUpdate?: IUser;
};

const FormularioSchema = Yup.object().shape({
  name: Yup.string().required().min(1),
  email: Yup.string().email("Correo invalido").required(),
  phone: Yup.string().required().min(1),
  username: Yup.string().required().min(1),
  website: Yup.string().required().min(1),
});

export const Formulario: FC<FormularioProps> = ({
  addUser,
  textoBoton,
  userByUpdate,
}) => {
  const navigate = useNavigate();
  const formik = useFormik<Omit<IUser, "id">>({
    initialValues: userByUpdate ?? {
      // id: 0,
      name: "",
      email: "",
      phone: "",
      username: "",
      website: "",
    },
    onSubmit: (values) => {
      let uid =20;
      if (userByUpdate) {
        uid = userByUpdate.id;
      }
      addUser({ ...values, id: uid });
      navigate("/users");
    },
    validationSchema: FormularioSchema,
  });

  const onBack = () => {
    navigate(-1);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="form-group col-md-4 ">
          <input
            name="name"
            type="text"
            className="form-control form-control-lg m-2 "
            placeholder="Nombre"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <Errores error={formik.errors.name} />}
          <input
            name="email"
            type="text"
            className="form-control form-control-lg m-2 "
            placeholder="Correo"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <Errores error={formik.errors.email} />}
          <input
            name="phone"
            type="text"
            className="form-control form-control-lg m-2 "
            placeholder="Telefono"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && <Errores error={formik.errors.phone} />}
          <input
            name="username"
            type="text"
            className="form-control form-control-lg m-2 "
            placeholder="Usuario"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && <Errores error={formik.errors.username} />}
          <input
            name="website"
            type="text"
            className="form-control form-control-lg m-2 "
            placeholder="Sitio Web"
            onChange={formik.handleChange}
            value={formik.values.website}
          />
          {formik.errors.website && <Errores error={formik.errors.website} />}
          <div className="row">
            <div className="form-group col-md-5  mx-4">
              <input
                type="submit"
                className="btn btn-lg btn-danger btn-block"
                value={textoBoton}
              />
            </div>
            <div className="form-group col-md-5">
              <input
                type="submit"
                className="btn btn-lg btn-danger btn-block"
                value="Cancelar"
                onClick={onBack}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
