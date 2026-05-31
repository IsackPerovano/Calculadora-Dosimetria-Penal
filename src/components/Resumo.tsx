import Icon from "../assets/justica.svg";

type Props = {
  penaB: string;
  penaP: string;
  penaD: string;
};

export const Resumo = ({ penaB, penaP, penaD }: Props) => {
  return (
    <div className="w-[600px] px-3.5 py-3.5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">
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
          2°FASE: PENA INTERMERIÁRIA
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
          Variação 1°Fase
        </h3>
        <h4 className="poppins " style={{ fontWeight: 300 }}>
          {" "}
          10 anos
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
          15 anos
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
          15 anos
        </h4>
      </div>
    </div>
  );
};
