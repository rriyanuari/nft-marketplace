import Logo from "@/assets/logo/logo-text.svg";
import BurgerMenu from "@/assets/icons/burgerMenu.svg";

import Button from "@/components/atom/button";

const MENU = [
  {
    label: "Marketplace",
    url: "marketplace",
  },
  {
    label: "Rangkings",
    url: "rangkings",
  },
  {
    label: "Connect a wallet",
    url: "connect-wallet",
  },
];

const Navigation = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[30px] lg:px-[50px] py-[30px]">
        <img
          src={Logo}
          alt="nft marketplace's logo"
          className="h-[24px] lg:h-[32px]"
        />

        <img
          src={BurgerMenu}
          alt="burger menu"
          className="lg:hidden h-[24px]"
        />

        <ul className="hidden lg:flex items-center text-text text-button">
          {MENU.map((item) => (
            <li key={item.label} className="px-[20px] py-[12px]">
              {item.label}
            </li>
          ))}
          <Button variant="filled" size="primary" className="ml-[10px]">
            Sign Up
          </Button>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
