import Icon from "../assets/martelo.svg";
import type { LimitesLeg } from "../Types/LimitesLeg";

type Props = {
  tipo : string;
  setTipo : React.Dispatch<React.SetStateAction<string>>;
  tempo : LimitesLeg;
  setTempo: React.Dispatch<React.SetStateAction<LimitesLeg>>;
}

export const Limites = ({tipo, setTipo, tempo, setTempo}: Props) => {
 
  return (
    <div className="mt-2 w-full rounded-[15px] border-2 border-[#d9d9d8] bg-white px-3.5 py-3.5 lg:w-[850px]">
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

      <div className="flex flex-col gap-5 md:flex-row md:gap-14 lg:gap-46.5">
        <div className="flex pt-4">
          {/* PENA MÍNIMA */}
          <div>
            <h3
              className="text-[#1f293A] text-[12px] poppins "
              style={{ fontWeight: 700 }}
            >
              Pena Mínima
            </h3>

            <div className="flex gap-2">
              <div
                className="flex flex-1 flex-col items-center poppins sm:flex-none"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-full border border-[#d9d9d8] rounded-[10px] text-center sm:w-25"
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
                className="flex flex-1 flex-col items-center poppins sm:flex-none"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-full border border-[#d9d9d8] rounded-[10px] text-center sm:w-25"
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
                className="flex flex-1 flex-col items-center poppins sm:flex-none"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-full border border-[#d9d9d8] rounded-[10px] text-center sm:w-25"
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

            <div className="flex gap-2">
              <div
                className="flex flex-1 flex-col items-center poppins sm:flex-none"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-full border border-[#d9d9d8] rounded-[10px] text-center sm:w-25"
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
                className="flex flex-1 flex-col items-center poppins sm:flex-none"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-full border border-[#d9d9d8] rounded-[10px] text-center sm:w-25"
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
                className="flex flex-1 flex-col items-center poppins sm:flex-none"
                style={{ fontWeight: 300 }}
              >
                <input
                  className="Border w-full border border-[#d9d9d8] rounded-[10px] text-center sm:w-25"
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
