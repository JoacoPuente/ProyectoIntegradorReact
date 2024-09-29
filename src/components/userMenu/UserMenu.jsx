import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const UserMenu = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOpenUserMenu = () => {
    setOpenUserMenu(!openUserMenu);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpenUserMenu}
        className="text-xl duration-300 text-waikawa-gray-500 hover:text-waikawa-gray-800 transition-color"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>
      <div
        className={`rounded-md  absolute top-full right-0 h-44 w-64 bg-waikawa-gray-800 px-2 pt-3 pb-24 sm:px-6 mt-5 transition-all duration-300 ${
          openUserMenu
            ? "translate-y-0 opacity-100 z-40"
            : "-translate-y-full opacity-0 -z-10"
        }`}
      >
        <div className="flex justify-start">
          <button
            onClick={handleOpenUserMenu}
            className="text-3xl text-waikawa-gray-50"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div>
          {!currentUser ? (
            <div className="flex flex-col items-center gap-3">
              <Link
                to="/login"
                className="border-2 border-waikawa-gray-500 rounded-md bg-waikawa-gray-500 px-3.5 py-2.5 text-sm font-semibold text-waikawa-gray-50 shadow-sm hover:bg-waikawa-gray-800"
              >
                Iniciá Sesión
              </Link>
              <Link
                to="/register"
                className="border-2 border-waikawa-gray-500 rounded-md bg-waikawa-gray-500 px-3.5 py-2.5 text-sm font-semibold text-waikawa-gray-50 shadow-sm hover:bg-waikawa-gray-800"
              >
                Crear Cuenta
              </Link>
            </div>
          ) : (
            <div className="flex flex-col justify-between p-2 h-28">
              <p className="font-bold text-md text-waikawa-gray-50">
                {`Hola ${currentUser?.nombre}`}
              </p>
              <button
                onClick={() => {
                  dispatch(setCurrentUser(null));
                  handleOpenUserMenu();
                  Toastify({
                    text: "Sesión cerrada",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "bg-waikawa-gray-500",
                    offset: {
                      y: "4rem",
                    },
                  }).showToast();
                }}
                className="border-2 border-waikawa-gray-500 rounded-md bg-waikawa-gray-500 px-3.5 py-2.5 text-sm font-semibold text-waikawa-gray-50 shadow-sm hover:bg-waikawa-gray-800"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
