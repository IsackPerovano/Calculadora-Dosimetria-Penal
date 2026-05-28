import { useState } from "react";
import Icon from "../assets/martelo.svg";
import type { LimitesLeg } from "../Types/LimitesLeg";

export const Limites = () => {
  const [tipo, setTipo] = useState<string>("minima");

  const [tempo, setTempo] = useState<LimitesLeg>({
    MinAnos: 0,
    MinMes: 0,
    MinDias: 0,
    MaxAnos: 0,
    MaxMes: 0,
    MaxDias: 0,
  });
  return (
    <div className="w-[850px] ml-50 mt-1 px-3.5 py-3.5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">
      {/* TITULOS */}
      <h3
        className="flex gap-3 text-[20px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Limites Legais
      </h3>

      <h4
        className="pt-1 text-[14px] poppins poppins"
        style={{ fontWeight: 300 }}
      >
        Defina a pena mínima e máxima prevista no tipo penal.
      </h4>

      <div className="flex place-content-between">
        <div className="flex pt-4">
          {/* PENA MÍNIMA */}
          <div>
            <h3
              className="text-[#1f293A] text-[12px] poppins "
              style={{ fontWeight: 700 }}
            >
              Pena Mínima
            </h3>

            <div className="flex gap-5">
              <div
                className="flex flex-col  items-center poppins "
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-25 border border-[#d9d9d8] rounded-[10px] text-center"
                  type="number"
                  min="0"
                  value={tempo.MinAnos}
                  onChange={(e) => {
                    setTempo({
                      ...tempo,
                      MinAnos:
                        e.target.value === "" ? 0 : Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[12px]">Anos</h5>
              </div>
              <div
                className="flex flex-col items-center poppins "
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-25  border border-[#d9d9d8] rounded-[10px] text-center"
                  type="number"
                  min="0"
                  value={tempo.MinMes}
                  onChange={(e) => {
                    setTempo({
                      ...tempo,
                      MinMes:
                        e.target.value === "" ? 0 : Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[12px]">Meses</h5>
              </div>
              <div
                className="flex flex-col items-center poppins"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-25  border border-[#d9d9d8] rounded-[10px] text-center"
                  type="number"
                  min="0"
                  value={tempo.MinDias}
                  onChange={(e) => {
                    setTempo({
                      ...tempo,
                      MinDias:
                        e.target.value === "" ? 0 : Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[12px]">Dias</h5>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="flex pt-4">
          {/* PENA MÁXIMA */}
          <div>
            <h3
              className="text-[#1f293A] text-[12px] poppins "
              style={{ fontWeight: 700 }}
            >
              Pena Maxima
            </h3>

            <div className="flex gap-5">
              <div
                className="flex flex-col  items-center poppins pr-3.5"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-25 border border-[#d9d9d8] rounded-[10px] text-center"
                  type="number"
                  min="0"
                  value={tempo.MaxAnos}
                  onChange={(e) => {
                    setTempo({
                      ...tempo,
                      MaxAnos:
                        e.target.value === "" ? 0 : Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[12px]">Anos</h5>
              </div>
              <div
                className="flex flex-col items-center poppins pr-3.5"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-25  border border-[#d9d9d8] rounded-[10px] text-center"
                  type="number"
                  min="0"
                  value={tempo.MaxMes}
                  onChange={(e) => {
                    setTempo({
                      ...tempo,
                      MaxMes:
                        e.target.value === "" ? 0 : Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[12px]">Meses</h5>
              </div>
              <div
                className="flex flex-col items-center poppins"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-25  border border-[#d9d9d8] rounded-[10px] text-center"
                  type="number"
                  min="0"
                  value={tempo.MaxDias}
                  onChange={(e) => {
                    setTempo({
                      ...tempo,
                      MaxDias:
                        e.target.value === "" ? 0 : Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[12px]">Dias</h5>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* TIPO DE PENA (RADIO) */}
      <div className="mt-5">
        <h3
          className="text-[#1f293A] text-[12px] poppins"
          style={{ fontWeight: 700 }}
        >
          Tipo de Pena
        </h3>

        <div className=" pt-2">
          <label className="flex items-center gap-2 poppins text-[12px]">
            <input
              type="radio"
              name="tipoPena"
              value="minima"
              checked={tipo === "minima"}
              onChange={(e) => setTipo(e.target.value)}
            />
            Calcular a partir da pena mínima.
          </label>

          <label className="flex items-center gap-2 poppins text-[12px]">
            <input
              type="radio"
              name="tipoPena"
              value="intervalo"
              checked={tipo === "intervalo"}
              onChange={(e) => setTipo(e.target.value)}
            />
            Calcular a partir do intervalo entre a pena mínima e a máxima.
          </label>
        </div>
      </div>
    </div>
  );
};
