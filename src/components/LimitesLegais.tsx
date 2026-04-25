import Icon from "../assets/martelo.svg";

export const Limites = () => {
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
      <input type="radio" name="tipoPena" value="minima" />
     Calcular a partir da pena mínima.
    </label>

    <label className="flex items-center gap-2 poppins text-[12px]">
      <input type="radio" name="tipoPena" value="intervalo" />
      Calcular a partir do intervalo entre a pena mínima e a máxima.
    </label>

  </div>
</div>



    </div>
  );
};
