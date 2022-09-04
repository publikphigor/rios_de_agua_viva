import React from "react";
import { FaBars } from "react-icons/fa";

function NavItem(props) {
  return (
    <li>
      <a href={props.link} className="text-primary hover:text-secondary">
        {props.name}
      </a>
    </li>
  );
}

export default function Header() {
  return (
    <header className="bg-white shadow px-[24px] py-[24px] sm:px-[10%] w-full flex justify-between items-center overflow-hidden fixed top-0">
      <div className="w-3/6 sm:w-1/5">
        <h1 className="text-3xl font-medium">Church name</h1>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex items-center justify-end gap-8">
          <NavItem link="#" name="Home" />
          <NavItem link="#" name="About" />
          <NavItem link="#" name="Gallery" />
          <NavItem link="#" name="Declaration" />
        </ul>
      </nav>
      <div className="w-3/6 sm:hidden">
        <FaBars className="ml-auto text-2xl text-primary" />
      </div>
    </header>
  );
}
