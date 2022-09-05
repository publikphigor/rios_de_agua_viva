import React from "react";

function HeroBtn(props) {
  return (
    <a
      href={props.link}
      className="inline-block px-8 py-4 text-center text-white transition-all duration-300 ease-linear rounded-sm w-fit-content bg-primary hover:bg-secondary"
    >
      {props.name}
    </a>
  );
}

function HeroBtnSec(props) {
  return (
    <a
      href={props.link}
      className="inline-block px-8 py-4 font-semibold text-center transition-all duration-300 ease-linear rounded-sm w-fit-content text-primary hover:text-secondary"
    >
      {props.name}
    </a>
  );
}

export default function Hero() {
  return (
    <div className=" py-[50px] flex flex-col justify-between w-full">
      <div className="flex flex-col items-center w-full px-[24px] md:w-4/5 md:px-0 gap-6 mx-auto">
        <h1 className="text-5xl font-bold text-center md:text-8xl md:font-bold font-dancing-script">
          Bienvenido a la iglesia <br /> Estamos encantados de tenerte entre nosotros!
        </h1>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="flex items-center gap-4">
          <HeroBtn name="Lee Mas" link="/#services" />
          <HeroBtnSec name="Adorar con nosotros" link="/#footer" />
        </div>
      </div>
    </div>
  );
}
