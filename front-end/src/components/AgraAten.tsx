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

export const AgraAten = ({
  ag,
  setAg,
  at,
  setAt,
  fracaoAGAT,
  setFracaoAGAT,
}: Props) => {
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

  const ATMais = () => {
    setAt(at + 1);
  };
  const ATMenos = () => {
    if (at > 0) {
      setAt(at - 1);
    }
  };

  return (
    <div className="mt-2 w-full rounded-[15px] border-2 border-[#d9d9d8] bg-white px-3.5 py-3.5 lg:w-[850px]">
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

      <div className="flex flex-wrap items-center pt-2">
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

      <div className="flex flex-col md:flex-row gap-4 pt-4  lg:gap-33.5">
        <div className="flex-1 lg:w-[340px] lg:flex-none">
          <div className="flex place-content-between">
            <h3 className=" text-[14px] poppins " style={{ fontWeight: 700 }}>
              Agravantes
            </h3>

            <h3 className="poppins text-[14px]" style={{ fontWeight: 700 }}>
              {ag}
            </h3>
          </div>

          <div className="flex gap-2 md:gap-4 lg:gap-5">
            <div className="flex-1">
              <div onClick={AGMenos}>
                <button className="flex h-7.5 w-full items-center justify-center rounded-[10px] border border-[#d9d9d8] transition duration-200 hover:bg-[#1E2C4B] hover:text-white sm:w-40">
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div onClick={AGMais}>
                <button className="flex h-7.5 w-full items-center justify-center rounded-[10px] border border-[#d9d9d8] text-[14px] transition duration-200 hover:bg-[#1E2C4B] hover:text-white sm:w-40">
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:w-[340px] lg:flex-none">
          <div className="flex place-content-between">
            <h3 className=" text-[14px] poppins" style={{ fontWeight: 700 }}>
              Atenuantes
            </h3>

            <h3 className="poppins text-[14px]" style={{ fontWeight: 700 }}>
              {at}
            </h3>
          </div>

          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <div className="flex-1">
              <div onClick={ATMenos}>
                <button className="flex h-7.5 w-full items-center justify-center rounded-[10px] border border-[#d9d9d8] text-[14px] transition duration-200 hover:bg-[#1E2C4B] hover:text-white sm:w-40">
                  {" "}
                  -{" "}
                </button>
              </div>
            </div>

            <div className="flex-1">
              <div onClick={ATMais}>
                <button className="flex h-7.5 w-full items-center justify-center rounded-[10px] border border-[#d9d9d8] text-[14px] transition duration-200 hover:bg-[#1E2C4B] hover:text-white sm:w-40">
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
