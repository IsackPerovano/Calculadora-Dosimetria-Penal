import { useState } from "react";
import Icon from "../assets/calculadora.svg";

type Props = {
  ag: number;
  setAg: React.Dispatch<React.SetStateAction<number>>;
  at: number;
  setAt: React.Dispatch<React.SetStateAction<number>>;
  fracaoAGAT: { numerador: number; denominador: number };
  setFracaoAGAT: React.Dispatch<
    React.SetStateAction<{ numerador: number; denominador: number }>
  >;
};

export const AgraAten = ({}: Props) => {
  const [ag, setAg] = useState(0);
  const AGMais = () => {
    if (ag < 45) {
      setAg(ag + 1);
    }
  };
  const AGMenos = () => {
    if (ag > 0) {
      setAg(ag - 1);
    }
  };

  const [at, setAt] = useState(0);
  const ATMais = () => {
    setAt(at + 1);
  };
  const ATMenos = () => {
    if (at > 0) {
      setAt(at - 1);
    }
  };

  const [fracaoAGAT, setFracaoAGAT] = useState({
    numerador: 1,
    denominador: 6,
  });

  return (
    <div className="w-[850px] ml-50 px-3.5 py-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">
      <h3
        className="flex gap-3 text-[20px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Agravantes e Atenuantes
      </h3>

      <h4
        className="pt-1 text-[14px] poppins poppins"
        style={{ fontWeight: 300 }}
      >
        Arts. 61 a 66 do Código Penal.
      </h4>

      <div className="flex pt-2 items-center">
        <h5 className="pr-1 poppins text-[12px]" style={{ fontWeight: 400 }}>
          Valor de cada Agravante e Atenuante:
        </h5>
        <input
          className="Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-[14px] text-center"
          type="number"
          min="0"
          value={fracaoAGAT.numerador}
          onChange={(e) =>
            setFracaoAGAT({
              ...fracaoAGAT,
              numerador: e.target.value === "" ? 0 : Number(e.target.value),
            })
          }
        />
        <h5 className="text-[14px] pl-1 pr-1"> / </h5>
        <input
          className="Border border-2 rounded-[10px] w-16.25 text-[14px] border-[#d9d9d8] text-center"
          type="number"
          min="0"
          value={fracaoAGAT.denominador}
          onChange={(e) =>
            setFracaoAGAT({
              ...fracaoAGAT,
              denominador: e.target.value === "" ? 0 : Number(e.target.value),
            })
          }
        />
      </div>

      <div className="flex  pt-4 place-content-between">
        <div>
          <div className="flex place-content-between">
            <h3 className=" text-[14px] poppins " style={{ fontWeight: 700 }}>
              Agravantes
            </h3>

            <h3 className="poppins text-[14px]" style={{ fontWeight: 700 }}>
              {ag}
            </h3>
          </div>

          <div className="flex  gap-5">
            <div>
              <div onClick={AGMenos}>
                <button className="rounded-[10px] border border-[#d9d9d8] hover:bg-[#1E2C4B]  hover:text-white transition duration-200 w-40  h-7.5 flex items-center justify-center ">
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>

            <div>
              <div onClick={AGMais}>
                <button className="rounded-[10px] text-[14px] border border-[#d9d9d8] hover:bg-[#1E2C4B]  hover:text-white transition w-40  duration-200 h-7.5 flex items-center justify-center ">
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex place-content-between">
            <h3 className=" text-[14px] poppins" style={{ fontWeight: 700 }}>
              Atenuantes
            </h3>

            <h3 className="poppins text-[14px]" style={{ fontWeight: 700 }}>
              {at}
            </h3>
          </div>

          <div className="flex gap-5">
            <div>
              <div onClick={ATMenos}>
                <button className="rounded-[10px] border border-[#d9d9d8] hover:bg-[#1E2C4B]  hover:text-white transition  duration-200  text-[14px] w-40 h-7.5 flex items-center justify-center">
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>

            <div>
              <div onClick={ATMais}>
                <button className="rounded-[10px] border border-[#d9d9d8] hover:bg-[#1E2C4B]  hover:text-white transition  duration-200  w-40 h-7.5 flex items-center justify-center text-[14px]">
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
