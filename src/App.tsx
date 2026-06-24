import { Circunstancias } from "./components/Cirscunstancias";
import { Fases } from "./components/Fases";
import { Limites } from "./components/LimitesLegais";
import { useEffect, useState } from "react";
import { AgraAten } from "./components/AgraAten";
import { AumDim } from "./components/AumDim";
import { Resumo } from "./components/Resumo";
import { calcularPena } from "./core/conta";
import type { Valores } from "./Types/Valores";
import type { LimitesLeg } from "./Types/LimitesLeg";
import type { Form } from "./Types/Form";

import "./App.css";

const App = () => {
  const [Ativo, setActivo] = useState<number>(1);
  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", modoEscuro);
  }, [modoEscuro]);

  const handclick = (aoClicar: number) => {
    setActivo(aoClicar);
  };

  const [tipo, setTipo] = useState<string>("minima");

  const [tempo, setTempo] = useState<LimitesLeg>({
    MinAnos: 0,
    MinMes: 0,
    MinDias: 0,
    MaxAnos: 0,
    MaxMes: 0,
    MaxDias: 0,
  });

  const [valores, SetValores] = useState<Valores>({
    culpabilidade: null,
    antecedentes: null,
    condutaSocial: null,
    personalidade: null,
    motivos: null,
    circunstancias: null,
    consequencias: null,
    vitima: null,
  });

  const [fracao, setFracao] = useState({
    numerador: 1,
    denominador: 8,
  });

  const [fracaoAGAT, setFracaoAGAT] = useState({
    numerador: 1,
    denominador: 6,
  });

  const [ag, setAg] = useState(0);
  const [at, setAt] = useState(0);

  const [conjunto, setConjunto] = useState<Form[]>([]);

  let conteudo;
  switch (Ativo) {
    case 1:
      conteudo = (
        <>
          <Limites
            tempo={tempo}
            setTempo={setTempo}
            tipo={tipo}
            setTipo={setTipo}
          />
          <Circunstancias
            valores={valores}
            SetValores={SetValores}
            fracao={fracao}
            setFracao={setFracao}
          />
        </>
      );
      break;

    case 2:
      conteudo = (
        <AgraAten
          ag={ag}
          setAg={setAg}
          at={at}
          setAt={setAt}
          fracaoAGAT={fracaoAGAT}
          setFracaoAGAT={setFracaoAGAT}
        />
      );
      break;

    case 3:
      conteudo = <AumDim conjunto={conjunto} setConjunto={setConjunto} />;
      break;

    default:
      conteudo = (
        <>
          <Limites
            tempo={tempo}
            setTempo={setTempo}
            tipo={tipo}
            setTipo={setTipo}
          />
          <Circunstancias
            valores={valores}
            SetValores={SetValores}
            fracao={fracao}
            setFracao={setFracao}
          />
        </>
      );
  }

  const ResultadoCalculado = calcularPena(
  tipo,
  tempo,
  valores,
  fracao,
  ag,
  at,
  fracaoAGAT,
  conjunto
  );

  return (
    <div className="bg-[#F5F5F5] min-h-screen text-[#1f293A] transition-colors duration-200 dark:bg-[#0f172a] dark:text-[#f8fafc]">
      <button
        type="button"
        onClick={() => setModoEscuro((ativo) => !ativo)}
        className="fixed right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d8] bg-white text-[18px] shadow-sm transition-colors duration-200 hover:bg-[#EEF8FF] dark:border-[#334155] dark:bg-[#1e293b] dark:hover:bg-[#334155]"
        aria-label={modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"}
        title={modoEscuro ? "Modo claro" : "Modo escuro"}
      >
        {modoEscuro ? "☀" : "☾"}
      </button>
      <div className="flex flex-row justify-center gap-6 p-6">
        <div>
          <Fases aoClicar={handclick} fase={Ativo} />
          {conteudo}
        </div>

        <div className="pt-2">
          <Resumo 
            penaB={ResultadoCalculado.penaBase}
            penaP={ResultadoCalculado.penaProvisoria}
            penaD={ResultadoCalculado.penaDefinitiva}
            VI={ResultadoCalculado.VI}
            V1={ResultadoCalculado.V1}
            V2={ResultadoCalculado.V2}
            V3={ResultadoCalculado.V3}
           />
        </div>
      </div>
    </div>
  );
};

export default App;
