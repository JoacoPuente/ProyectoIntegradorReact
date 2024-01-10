import React from "react";
import { HeaderComponent } from "../components/header/HeaderComponent";
import { HeroComponent } from "../components/hero/HeroComponent";
import { FooterComponent } from "../components/footer/FooterComponent";

export const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <FooterComponent />
    </div>
  );
};
