import Logo from "../../../src/assets/imgs/logo.jpg";
import { MenuButton } from "../menuButton/MenuButton";
import { Navbar } from "../navbar/Navbar";
import { Cart } from "../cart/Cart";
import { UserMenu } from "../userMenu/UserMenu";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-center w-full h-16 bg-waikawa-gray-100 drop-shadow-xl">
      <div className="container z-50 flex items-center justify-between max-w-screen-xl px-8 py-4 lg:justify-between">
        <MenuButton />
        <div className="z-50 inline-block mx-auto lg:mx-0">
          <img src={Logo} alt="Logo" className="w-12 rounded-lg" />
        </div>
        <Navbar />
        <div className="z-50 flex gap-5">
          <UserMenu />
          <Cart />
        </div>
      </div>
    </header>
  );
};
