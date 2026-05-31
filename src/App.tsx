import { Circunstancias } from "./components/Cirscunstancias";
import { Fases } from "./components/Fases";
import { Limites } from "./components/LimitesLegais";
import { useState } from "react";
import { AgraAten } from "./components/AgraAten";
import { AumDim } from "./components/AumDim";
import { Resumo } from "./components/Resumo";
import { calcularPena } from "./core/conta";
import type { Valores } from "./Types/Valores";
import type { LimitesLeg } from "./Types/LimitesLeg";
import type { Form } from "./Types/Form";

import "./App.css";

const App = () => {
  const [Ativo, setActivo] = useState<number>(0);
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
    <div className="bg-[#F5F5F5] min-h-screen">
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
           />
        </div>
      </div>
    </div>
  );
};

export default App;
