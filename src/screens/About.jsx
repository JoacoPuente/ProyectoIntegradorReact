import { TitleWithImage } from "../components/titleWithImage/TitleWithImage";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { AboutUs } from "../components/aboutUs/AboutUs";

export const About = () => {
  return (
    <div>
      <Header />
      <TitleWithImage />
      <AboutUs />
      <Footer />
    </div>
  );
};
