import background from "../../../src/assets/imgs/portada.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { loginUser } from "../../axios/axios-user";
import { Link, useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Campo obligatorio"),
    password: Yup.string().required("Campo obligatorio"),
  });

  const handleSubmit = async (values, actions) => {
    try {
      const user = await loginUser(values.email, values.password);
      if (user) {
        dispatch(setCurrentUser({ ...user.usuario, token: user.token }));
        Toastify({
          text: "Sesión iniciada",
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
      actions.resetForm();
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] mt-16 relative flex justify-center items-center px-8 flex-col">
      <div
        className="absolute inset-0 px-8 bg-center bg-cover blur-sm -z-20"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="max-w-xs p-8 mx-auto rounded-lg shadow-md bg-waikawa-gray-100 text-waikawa-gray-500">
        <h2 className="mb-6 text-3xl font-bold text-center">Iniciar sesión</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
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
                <label htmlFor="password" className="block font-medium text-md">
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
                {isSubmitting ? "Iniciando..." : "Iniciar sesión"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <span>¿No tenés una cuenta?</span>{" "}
          <Link to="/register" className="text-waikawa-gray-800">
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
};
