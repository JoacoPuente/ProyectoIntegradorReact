import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuButton = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);
  return (
    <button
      onClick={toggleMenu}
      className="text-2xl text-waikawa-gray-500 lg:hidden mr-9"
    >
      {isMenuOpen ? (
        <FontAwesomeIcon icon={faTimes} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </button>
  );
};
