import { useState } from "react";
import Icon from "../assets/calculadora.svg";

export const AgraAten = () => {
  const [ag, setAg] = useState(0);
  const AGMais = () => {
    setAg(ag + 1);
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

  return (
    <div className=" h-52 w-250 ml-50 px-3.5 py-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">
      <h3
        className="flex gap-3 text-[24px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Agravantes e Atenuantes
      </h3>

      <h4 className="pt-1 poppins poppins" style={{ fontWeight: 300 }}>
        Arts. 61 a 66 do Código Penal.
      </h4>

      <div className="flex pt-2 items-center">
        <h5 className="pr-1 poppins" style={{ fontWeight: 400 }}>
          Valor de cada Agravante e Atenuante:
        </h5>
        <input
          className="Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-center"
          type="number"
        />
        <h5 className="text-[20px] pl-1 pr-1"> / </h5>
        <input
          className="Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-center"
          type="number"
        />
      </div>

      <div className="flex  pt-4">
        <div className="pr-17.5">
          <div className="flex place-content-between">
            <h3 className=" text-[18px] poppins " style={{ fontWeight: 700 }}>
              Agravantes
            </h3>

            <h3 className="poppins" style={{ fontWeight: 700 }}>
              {ag}
            </h3>
          </div>

          <div className="flex">
            <div className="pr-10">
              <div onClick={AGMenos}>
                <button className="rounded-[10px] bg-[#1E2C4B] text-white w-51.25 h-7.5 flex items-center justify-center text-[20px]">
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>

            <div>
              <div onClick={AGMais}>
                <button className="rounded-[10px] bg-[#1E2C4B] text-white w-51.25 h-7.5 flex items-center justify-center text-[20px]">
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex place-content-between">
            <h3 className=" text-[18px] poppins" style={{ fontWeight: 700 }}>
              Atenuantes
            </h3>

            <h3 className="poppins" style={{ fontWeight: 700 }}>
              {at}
            </h3>
          </div>

          <div className="flex">
            <div>
              <div onClick={ATMenos}>
                <button className="rounded-[10px] bg-[#1E2C4B] text-white w-51.25 h-7.5 flex items-center justify-center text-[20px]">
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>

            <div className="pl-10">
              <div onClick={ATMais}>
                <button className="rounded-[10px] bg-[#1E2C4B] text-white w-51.25 h-7.5 flex items-center justify-center text-[20px]">
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
