import React from "react";

function HeroBtn(props) {
  return (
    <a
      href={props.link}
      className="inline-block px-8 py-2 text-center text-white transition-all duration-300 ease-linear rounded-sm md:py-4 w-fit-content bg-primary hover:bg-secondary"
    >
      {props.name}
    </a>
  );
}

function HeroBtnSec(props) {
  return (
    <a
      href={props.link}
      className="px-8 py-2 font-semibold text-center transition-all duration-300 ease-linear rounded-sm md:py-4 w-fit-content text-primary hover:text-secondary"
    >
      {props.name}
    </a>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="md:py-[50px] flex flex-col items-center w-full px-[24px] md:w-4/5 md:px-0 gap-6 mx-auto">
        <h1 className="text-4xl font-bold md:text-center md:text-8xl md:font-bold font-dancing-script">
          Bienvenido a la iglesia <br /> Estamos encantados de tenerte entre nosotros!
        </h1>
        <p className="md:text-center">
          Gracias por visitarnos Dios te bendiga, Somos Segunda Iglesia Rios de Agua Viva, si tu
          vives en el area de Perth Amboy NJ y aún no tienes una iglesia donde fortalecer tu fe,
          para nosotros sera un honor, un privilegio poder recibirte y adorar juntos a nuestro
          Señor.
        </p>
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <HeroBtn name="Lee Mas" link="/#services" />
          <HeroBtnSec name="Adorar con nosotros" link="/#footer" />
        </div>
      </div>
    </div>
  );
}
