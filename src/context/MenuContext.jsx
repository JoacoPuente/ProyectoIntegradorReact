import React from "react";
import { useState, createContext } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: openMenu,
        toggleMenu: handleOpenMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
