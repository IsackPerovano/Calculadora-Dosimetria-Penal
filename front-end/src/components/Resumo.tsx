import Icon from "../assets/justica.svg";

type Props = {
  penaB: string;
  penaP: string;
  penaD: string;

  VI: string,
  V1: string,
  V2: string,
  V3: string,
};

export const Resumo = ({ penaB, penaP, penaD, VI, V1, V2, V3 }: Props) => {
  return (
    <div className="w-full rounded-[15px] border-2 border-[#d9d9d8] bg-white px-3.5 py-3.5 lg:w-[600px]">
      <h3
        className="flex gap-3 text-[20px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} className="w-8 h-8" />
        Resumo da Dosimetria
      </h3>

      <div className="flex  pt-4"></div>

      <div className="flex place-content-between">
        <h3
          className="poppins text-[14px] text-[#a09f9f]"
          style={{ fontWeight: 500 }}
        >
          1°FASE: PENA BASE
        </h3>
        <h4 className="poppins " style={{ fontWeight: 500 }}>
          {" "}
          {penaB}
        </h4>
      </div>
      <div className="flex place-content-between">
        <h3
          className="poppins text-[14px] text-[#a09f9f]"
          style={{ fontWeight: 500 }}
        >
          2°FASE: PENA PROVISÓRIA
        </h3>
        <h4 className="poppins " style={{ fontWeight: 500 }}>
          {" "}
          {penaP}
        </h4>
      </div>
      <div className="pt-[40px] text-center">
        <h3
          className="poppins text-[20px] text-[#a09f9f]"
          style={{ fontWeight: 500 }}
        >
          {" "}
          PENA DEFINITIVA
        </h3>
        <h4 className="poppins text-[40px] " style={{ fontWeight: 700 }}>
          {" "}
          {penaD}
        </h4>
      </div>

      <div className="flex  pt-[30px]"></div>

      <div className="flex place-content-between">
        <h3
          className="poppins text-[14px] text-[#a09f9f]"
          style={{ fontWeight: 300 }}
        >
          Intervalo Legal
        </h3>
        <h4 className="poppins " style={{ fontWeight: 300 }}>
          {" "}
          {VI}
        </h4>
      </div>
      <div className="flex place-content-between">
        <h3
          className="poppins text-[14px] text-[#a09f9f]"
          style={{ fontWeight: 300 }}
        >
          Variação 1°Fase
        </h3>
        <h4 className="poppins " style={{ fontWeight: 300 }}>
          {" "}
          {V1}
        </h4>
      </div>
      <div className="flex place-content-between">
        <h3
          className="poppins text-[14px] text-[#a09f9f]"
          style={{ fontWeight: 300 }}
        >
          Variação 2°Fase
        </h3>
        <h4 className="poppins " style={{ fontWeight: 300 }}>
          {" "}
          {V2}
        </h4>
      </div>
      <div className="flex place-content-between">
        <h3
          className="poppins text-[14px] text-[#a09f9f]"
          style={{ fontWeight: 300 }}
        >
          Variação 3°Fase
        </h3>
        <h4 className="poppins " style={{ fontWeight: 300 }}>
          {" "}
          {V3}
        </h4>
      </div>
    </div>
  );
};
