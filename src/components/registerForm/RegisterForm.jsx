import background from "../../../src/assets/imgs/portada.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { createUser } from "../../axios/axios-user";
import useRedirect from "../../hooks/useRedirect";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useRedirect("/");

  const validationSchema = Yup.object({
    nombre: Yup.string()
      .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
      .required("Campo obligatorio"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo obligatorio"),
    password: Yup.string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /[A-Z]/,
        "La contraseña debe contener al menos una letra mayúscula"
      )
      .matches(/[0-9]/, "La contraseña debe contener al menos un número")
      .required("Campo obligatorio"),
  });

  const handleSubmit = async (values, actions) => {
    const user = await createUser(values.nombre, values.email, values.password);
    actions.resetForm();
    if (user) {
      dispatch(setCurrentUser({ ...user.usuario, token: user.token }));

      Toastify({
        text: "Cuenta Registrada",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "bg-waikawa-gray-500",
        offset: {
          y: "4rem",
        },
      }).showToast();

      navigate("/");
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] mt-16 relative flex justify-center items-center px-8 flex-col">
      <div
        className="absolute inset-0 px-8 bg-center bg-cover blur-sm -z-20"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="max-w-xs p-8 mx-auto rounded-lg shadow-md bg-waikawa-gray-100 text-waikawa-gray-500">
        <h2 className="mb-6 text-3xl font-bold text-center">Registrate</h2>
        <Formik
          initialValues={{
            nombre: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="nombre" className="block font-medium text-md ">
                  Nombre de usuario
                </label>
                <Field
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-waikawa-gray-800 focus:border-waikawa-gray-800"
                />
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block font-medium text-md">
                  Correo electrónico
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-waikawa-gray-800 focus:border-waikawa-gray-800"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block font-medium text-md "
                >
                  Contraseña
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-waikawa-gray-800 focus:border-waikawa-gray-800"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-sm text-red-600"
                />
              </div>

              <button
                type="submit"
                className="w-full p-2 font-semibold rounded-md shadow text-waikawa-gray-50 hover:bg-waikawa-gray-800 bg-waikawa-gray-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registrando..." : "Registrarse"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <span>¿Ya tenés cuenta?</span>{" "}
          <Link to="/login" className="text-waikawa-gray-800">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};
