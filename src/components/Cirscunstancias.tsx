import Icon from "../assets/justica.svg";

export const Circunstancias = () => {
  return (
    <div className="h-117 w-250 border-2 px-3.5 py-3.5 rounded-[15px] border-[#d9d9d8] bg-white ml-50 mt-5">
      <h3
        className="flex gap-3 text-[24px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} className="w-8 h-8" />
        Circunstâncias Judiciais (Art. 59 CP)
      </h3>

      <h4 className="pt-1 poppins  poppins" style={{ fontWeight: 300 }}>
        Selecione as circunstâncias que devem ser valoradas.
      </h4>

      <div className="flex pt-2 items-center">
        <h5 className="pr-1 poppins" style={{ fontWeight: 400 }}>
          Valor de cada Circunstancia:
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

      <div className="pt-5 grid grid-cols-2 gap-2">
        <label className="cursor-pointer">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex  items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Culpabilidade</h4>
              <h5 className="poppins font-light">
                Grau de reprovabilidade da conduta.
              </h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex  items-center pl-3 rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Antecedentes</h4>
              <h5 className="poppins font-light">
                Vida pregressa do agente (condenações anteriores).
              </h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer pt-1">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex gap-4 items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Conduta Social</h4>
              <h5 className="poppins font-light">
                Relacionamento no meio familiar, trabalho e comunidade.
              </h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer pt-1">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex  items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Personalidade</h4>
              <h5 className="poppins font-light">
                Índole e caráter do agente.
              </h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer pt-1">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex  items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Motivos</h4>
              <h5 className="poppins font-light">
                Razões que levaram à prática do crime.
              </h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer pt-1">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex  items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Circunstâncias</h4>
              <h5 className="poppins font-light">
                Lugar, tempo e modo de execução.
              </h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer pt-1">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex  items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Consequências</h4>
              <h5 className="poppins font-light">Danos causados pelo crime.</h5>
            </div>
          </div>
        </label>

        <label className="cursor-pointer pt-1">
          <input type="checkbox" className="peer hidden" />
          <div
            className="flex items-center pl-3  rounded-[10px] h-17.5 w-120
                                    bg-[#1E2C4B] text-white
                                    peer-checked:bg-[#3993DD] transition-colors duration-200"
          >
            <div className="flex flex-col">
              <h4 className="poppins font-bold">Comportamento da Vítima</h4>
              <h5 className="poppins font-light">
                Se a vítima contribuiu para o crime.
              </h5>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
