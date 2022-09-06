import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full py-5 px-[24px] md:px-[5%] mt-[90px] md:mt-20 text-white bg-secondary"
    >
      <div className="flex flex-col justify-between gap-6 md:gap-4 md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="mb-3 text-3xl ">Contacto</h2>
          <p className="flex items-center gap-2 mb-1 text-white">
            <ion-icon name="location-outline"></ion-icon> 234a Sheridan Ave, Perth Amboy NJ. 08861.
          </p>
          <a href="tel:+23412289102" className="flex items-center gap-2 mb-1 hover:text-primary">
            <ion-icon name="call-outline"></ion-icon> 6095158824
          </a>
          <a href="tel:+23412289102" className="flex items-center gap-2 mb-3 hover:text-primary">
            <ion-icon name="call-outline"></ion-icon> 6096720668
          </a>
          <a
            href="https://www.Facebook.com/profile.php?id=100084894152380"
            className="flex items-center gap-2 mb-3 hover:text-primary"
          >
            <ion-icon name="logo-facebook"></ion-icon> Síguenos en Facebook
          </a>
          <form className="w-full">
            <h2 className="mb-3 text-3xl">Enviar un mensaje</h2>
            <input
              type="text"
              placeholder="Introduzca su nombre"
              className="w-full px-1 py-3 mb-3 rounded-sm"
            />
            <input
              type="email"
              placeholder="Ingrese su dirección de correo electrónico"
              className="w-full px-1 py-3 mb-3 rounded-sm"
            />
            <textarea placeholder="Mensaje" className="w-full px-1 py-3 mb-3 rounded-sm" />
            <input
              type="button"
              value="Enviar Mensaje"
              className="px-8 py-4 transition-all duration-300 rounded cursor-pointer bg-primary hover:bg-secondary hover:border hover:border-white"
            />
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mb-3 text-3xl">Ver en el mapa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.4153077676883!2d-74.28389558535265!3d40.510310657868004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ca71e4ecef59%3A0xc99f5b550f383f30!2s234%20Sheridan%20St%2C%20Perth%20Amboy%2C%20NJ%2008861%2C%20USA!5e0!3m2!1sen!2sng!4v1662307689713!5m2!1sen!2sng"
            className="inline-block w-full h-[350px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="pt-3 mt-6 text-center border-t border-white">
        <p>
          Derechos de autor &copy; 2022. Reservados todos los derechos - Iglesia Rios De Agua Viva.
        </p>
      </div>
    </footer>
  );
}
