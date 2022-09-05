import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <li>
      <Link
        to={props.link}
        className="text-2xl text-white md:text-xl md:text-primary md:hover:text-secondary"
      >
        {props.name}
      </Link>
    </li>
  );
}

export default function Header() {
  const scrollToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let [open, setOpen] = useState(false);

  return (
    <header className=" bg-white shadow px-[24px] py-[24px] md:px-[10%] w-full flex justify-between items-center md:overflow-hidden fixed top-0 z-[99]">
      <div className="w-5/6 md:w-auto">
        <a className="inline-block text-3xl font-medium" href="/">
          Iglesia Rios De Agua Viva
        </a>
      </div>
      <nav
        onClick={() => setOpen(!open)}
        className={`absolute h-auto bg-primary md:bg-inherit  left-0 md:top-0 w-full md:w-auto p-[24px] md:p-0 md:static md:block md:z-auto z-[-1] transition-all duration-300 ease-in ${
          open ? "top-[100px] opacity-100" : "top-[-500px]  md:opacity-100 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center justify-end gap-8 md:flex-row">
          <NavItem link="/" name="Bienvenidos" />
          <NavItem link="/about" name="Acerca De Nosotros" />
          <NavItem link="/gallery" name="Galeria" />
          <NavItem link="/declaration" name="Nuestra Doctrina" />
        </ul>
      </nav>
      <div
        className="flex justify-end w-auto text-5xl md:hidden text-primary"
        onClick={() => setOpen(!open)}
      >
        <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
      </div>
    </header>
  );
}
