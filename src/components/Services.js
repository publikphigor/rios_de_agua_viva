import React from "react";

export default function Services() {
  return (
    <div className="mx-auto text-center w-4/5 mt-[40px]">
      <h2 className="text-2xl font-semibold">Horarios de cultos.</h2>
      <div className="w-[400px] mx-auto mt-5 bg-secondary text-white overflow-hidden rounded-md text-center">
        <div className="flex border-b border-white">
          <div className="w-2/5 p-3">Day & Time</div>
          <div className="w-3/5 p-3 bg-primary">Program</div>
        </div>
        <div className="flex">
          <div className="w-2/5 p-3">
            <p className="capitalize">JUEVES - 7PM</p>
          </div>
          <div className="w-3/5 p-3 bg-primary">
            <p className="capitalize">CULTO Y DISCIPULADO</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/5 p-3">
            <p className="capitalize">SÁBADO - 7PM</p>
          </div>
          <div className="w-3/5 p-3 bg-primary">
            <p className="capitalize">CULTO DE ORACIÓN</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/5 p-3">
            <p className="capitalize">DOMINGO - 7PM</p>
          </div>
          <div className="w-3/5 p-3 bg-primary">
            <p className="capitalize">CULTO EVANGELISTICO</p>
          </div>
        </div>
      </div>
    </div>
  );
}