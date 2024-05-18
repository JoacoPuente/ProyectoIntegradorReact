import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Ingrese un nombre válido (solo letras)")
      .required("Ingrese un nombre válido"),
    lastname: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Ingrese un apellido válido (solo letras)")
      .required("Ingrese un apellido válido"),
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("Ingrese un correo electrónico"),
    phonenumber: Yup.string()
      .matches(/^[0-9]+$/, "Ingrese un número de teléfono válido")
      .required("Ingrese un número de teléfono"),
    message: Yup.string().required("Ingrese un mensaje válido"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      try {
        validationSchema.validateSync(values, { abortEarly: false });

        alert("Mensaje enviado");
        formik.resetForm();
        console.log("bien");
      } catch (validationErrors) {
        alert("Revise los datos antes de enviar");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="px-6 py-24 isolate sm:py-32 lg:px-8 bg-waikawa-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-waikawa-gray-500 sm:text-4xl">
          Contacta Con Nosotros
        </h2>
        <p className="mt-2 text-lg leading-8 text-waikawa-gray-500">
          Consulta, opina y conecta. Estamos listos para ayudarte.
        </p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-xl mx-auto mt-16 sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold leading-6 text-waikawa-gray-500"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstname"
                id="firstname"
                {...formik.getFieldProps("firstname")}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset
                ${
                  formik.touched.firstname
                    ? formik.errors.firstname
                      ? "ring-red-500"
                      : "ring-green-500"
                    : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6`}
              />
            </div>
            {formik.touched.firstname && formik.errors.firstname && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {formik.errors.firstname}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold leading-6 text-waikawa-gray-500"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastname"
                id="lastname"
                {...formik.getFieldProps("lastname")}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset
                ${
                  formik.touched.lastname
                    ? formik.errors.lastname
                      ? "ring-red-500"
                      : "ring-green-500"
                    : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6`}
              />
            </div>
            {formik.touched.lastname && formik.errors.lastname && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {formik.errors.lastname}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-waikawa-gray-500"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                {...formik.getFieldProps("email")}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset
                ${
                  formik.touched.email
                    ? formik.errors.email
                      ? "ring-red-500"
                      : "ring-green-500"
                    : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6`}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phonenumber"
              className="block text-sm font-semibold leading-6 text-waikawa-gray-500"
            >
              Número de Teléfono
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                {...formik.getFieldProps("phonenumber")}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset
                ${
                  formik.touched.phonenumber
                    ? formik.errors.phonenumber
                      ? "ring-red-500"
                      : "ring-green-500"
                    : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6`}
              />
            </div>
            {formik.touched.phonenumber && formik.errors.phonenumber && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {formik.errors.phonenumber}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-waikawa-gray-500"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                {...formik.getFieldProps("message")}
                rows={4}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset
                ${
                  formik.touched.message
                    ? formik.errors.message
                      ? "ring-red-500"
                      : "ring-green-500"
                    : "ring-gray-300"
                } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6`}
              />
            </div>
            {formik.touched.message && formik.errors.message && (
              <p className="mt-2 text-sm font-medium text-red-500">
                {formik.errors.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-waikawa-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-waikawa-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-waikawa-gray-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
