import Icon from "../assets/justica.svg";
import type { Valores } from "../Types/Valores";

type Props = {
  valores: Valores;
  SetValores: React.Dispatch<React.SetStateAction<Valores>>;
  fracao: { numerador: number; denominador: number };
  setFracao: React.Dispatch<React.SetStateAction<{ numerador: number; denominador: number }>>;
};

export const Circunstancias = ({valores, SetValores, fracao, setFracao} : Props) => {
 

  const handleClick = (campo: keyof Valores, opcao: string) => {
    SetValores((prev) => ({
      ...prev,
      [campo]: prev[campo] === opcao ? null : opcao,
    }));
  };

  return (
    <div className="w-212.5 border-2 mt-2 px-3.5 py-3.5 rounded-[15px] border-[#d9d9d8] bg-white  mt-1">
      <h3
        className="flex gap-3 text-[20px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} className="w-8 h-8" />
        Circunstâncias Judiciais (Art. 59 CP)
      </h3>

      <h4
        className="pt-1 poppins text-[14px] poppins"
        style={{ fontWeight: 300 }}
      >
        Selecione as circunstâncias que devem ser valoradas.
      </h4>

      <div className="flex pt-2 items-center">
        <h5 className="pr-1 poppins text-[12px]" style={{ fontWeight: 400 }}>
          Valor de cada Circunstancia:
        </h5>
        <input
          className="Border border-2 text-[14px] rounded-[10px] w-16.25 border-[#d9d9d8] text-center"
          type="number"
          min="0"
           value={fracao.numerador}
          onChange={(e) =>
            setFracao({
              ...fracao,
              numerador: e.target.value === "" ? 0 : Number(e.target.value),
            })
          }
        />
        <h5 className="text-[14px] pl-1 pr-1"> / </h5>
        <input
          className="Border border-2 text-[14px] rounded-[10px] w-16.25 border-[#d9d9d8] text-center"
          type="number"
           min="0"
           value={fracao.denominador}
          onChange={(e) =>
            setFracao({
              ...fracao,
              denominador: e.target.value === "" ? 0 : Number(e.target.value),
            })
          }
        />
      </div>

      <div className="pt-5 grid grid-cols-2 gap-2">
        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Culpabilidade
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Dolo intenso, premeditação / Culpa mínima, menor reprovabilidade
          </h1>
          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input
                type="radio"
                name="Culpabilidade"
                className="hidden peer"
              />

              <div
                onClick={() => handleClick("culpabilidade", "+")}
                className={`... ${valores.culpabilidade === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input
                type="radio"
                name="Culpabilidade"
                className="hidden peer"
              />

              <div
                onClick={() => handleClick("culpabilidade", "-")}
                className={`... ${valores.culpabilidade === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                -
              </div>
            </label>
          </div>
        </div>

        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Antecedentes
          </h2>
          <h1 className="poppins text-[12px]" style={{ fontWeight: 300 }}>
            Condenações transitadas em julgado / Primariedade, ausência de
            registros
          </h1>
          <h1 className="poppins text-[10px]" style={{ fontWeight: 500 }}>
            {" "}
            (Súmula 444 STJ: inquéritos e ações em curso não podem agravar)
          </h1>

          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input type="radio" name="Antecedentes" className="hidden peer" />

              <div
                onClick={() => handleClick("antecedentes", "+")}
                className={`... ${valores.antecedentes === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input type="radio" name="Antecedentes" className="hidden peer" />

              <div
                onClick={() => handleClick("antecedentes", "-")}
                className={`... ${valores.antecedentes === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                -
              </div>
            </label>
          </div>
        </div>

        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Conduta social
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Histórico de violência familiar, desemprego voluntário, má
            vizinhança / Bom comportamento no trabalho, família e comunidade
          </h1>
          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input type="radio" name="Conduta" className="hidden peer" />

              <div
                onClick={() => handleClick("condutaSocial", "+")}
                className={`... ${valores.condutaSocial === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input type="radio" name="Conduta" className="hidden peer" />

              <div
                onClick={() => handleClick("condutaSocial", "-")}
                className={`... ${valores.condutaSocial === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                -
              </div>
            </label>
          </div>
        </div>
        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          {" "}
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Personalidade
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Predisposição à agressividade / Personalidade equilibrada, sem
            traços antissociais
          </h1>
          <h1
            className="poppins text-[10px] poppins"
            style={{ fontWeight: 500 }}
          >
            (Má personalidade exige laudo de psicólogo ou psiquiatra)
          </h1>
          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input
                type="radio"
                name="Personalidade"
                className="hidden peer"
              />

              <div
                onClick={() => handleClick("personalidade", "+")}
                className={`${valores.personalidade === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""} poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center `}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input
                type="radio"
                name="Personalidade"
                className="hidden peer"
              />

              <div
                onClick={() => handleClick("personalidade", "-")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.personalidade === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                -
              </div>
            </label>
          </div>
        </div>
        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          {" "}
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Motivos do crime
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Cobiça, torpeza, motivo antissocial / Honra, relevante valor social
            ou moral
          </h1>
          <h1
            className="poppins text-[10px] poppins"
            style={{ fontWeight: 500 }}
          >
            (Se já é qualificadora/agravante: ne bis in idem)
          </h1>
          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input type="radio" name="Motivos" className="hidden peer" />

              <div
                onClick={() => handleClick("motivos", "+")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.motivos === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input type="radio" name="Motivos" className="hidden peer" />

              <div
                onClick={() => handleClick("motivos", "-")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.motivos === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                -
              </div>
            </label>
          </div>
        </div>
        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          {" "}
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Circunstâncias do crime
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Local vulnerável, modo cruel além do tipo, horário de madrugada /
            Circunstâncias que reduziram o potencial ofensivo do fato
          </h1>
          <h1
            className="poppins text-[10px] poppins"
            style={{ fontWeight: 500 }}
          >
            (Se já é qualificadora/agravante: ne bis in idem)
          </h1>
          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input
                type="radio"
                name="Circunstancias"
                className="hidden peer"
              />

              <div
                onClick={() => handleClick("circunstancias", "+")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.circunstancias === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input
                type="radio"
                name="Circunstancias"
                className="hidden peer"
              />

              <div
                onClick={() => handleClick("circunstancias", "-")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.circunstancias === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                -
              </div>
            </label>
          </div>
        </div>
        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          {" "}
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Consequências do crime{" "}
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Dano irreversível, trauma intenso à vítima ou à sociedade /
            Consequências mínimas, dano reversível
          </h1>
          <h1
            className="poppins text-[10px] poppins"
            style={{ fontWeight: 500 }}
          >
            (Se já é qualificadora/agravante: ne bis in idem)
          </h1>
          <div className="flex gap-10 pt-1">
            <label className="flex-auto cursor-pointer">
              <input type="radio" name="sinal" className="hidden peer" />

              <div
                onClick={() => handleClick("consequencias", "+")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.consequencias === "+" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                +
              </div>
            </label>

            <label className="flex-auto cursor-pointer">
              <input type="radio" name="sinal" className="hidden peer" />

              <div
                onClick={() => handleClick("consequencias", "-")}
                className={`poppins text-[14px] rounded-[5px] border border-[#d9d9d8] 
    w-40 h-6 flex items-center justify-center ${valores.consequencias === "-" ? "bg-[#1E2C4B] text-white transition-colors duration-200" : ""}`}
              >
                -
              </div>
            </label>
          </div>
        </div>
        <div className="border border-[#d9d9d8] rounded-[10px] p-2 flex flex-col justify-between min-h-[140px]">
          {" "}
          <h2
            className="poppins text-[14px] poppins"
            style={{ fontWeight: 700 }}
          >
            Comportamento da Vítima{" "}
          </h2>
          <h1
            className="poppins text-[12px] poppins"
            style={{ fontWeight: 300 }}
          >
            Vítima provocou, contribuiu ou deu causa ao crime
          </h1>
          <h1
            className="poppins text-[10px] poppins"
            style={{ fontWeight: 500 }}
          >
            (Só pode beneficiar o réu — nunca agravar a pena)
          </h1>
          <div className="flex items-center justify-center pt-1">
            <label className="flex-auto cursor-pointer ">
              <input type="checkbox" className="hidden peer" />
              <div className="poppins text-[14px] rounded-[5px] border border-[#d9d9d8]  h-6 flex items-center justify-center transition-colors duration-200 peer-checked:bg-[#1E2C4B] peer-checked:text-white">
                -
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
