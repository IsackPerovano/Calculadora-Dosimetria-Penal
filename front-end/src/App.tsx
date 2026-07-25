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

  const [resultado, setResultado] = useState({
  penaBase: "0 dias",
  penaProvisoria: "0 dias",
  penaDefinitiva: "0 dias",
  VI: "0 dias",
  V1: "0 dias",
  V2: "0 dias",
  V3: "0 dias"
});


  const EnviarDados = async () => {
    let obj = {
      tipo,
      tempo,
      valores,
      fracao,
      fracaoAGAT,
      ag,
      at, 
      conjunto,
    }; 
        
    try{
      const req = await fetch("https://calculadora-penal-api.onrender.com/server.php", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj),
    });
    if (!req.ok) {throw new Error(`Erro na resposta do servidor: ${req.status}`)}

    const textoResposta = await req.text();

    if (!textoResposta || textoResposta.trim() === "") {
      throw new Error("O servidor respondeu com um corpo vazio.");
    }

    console.log("Resposta do PHP:", textoResposta);

    if (!textoResposta) {throw new Error("O servidor respondeu com um corpo vazio.")}

    const dados = JSON.parse(textoResposta);
    setResultado(dados);


    }catch(error){
      console.error("Erro ao comunicar com o sevidor PHP", error);
    }
  }
  
  useEffect(() => {
    EnviarDados();
  }, [tipo, tempo, valores, fracao, fracaoAGAT, ag, at, conjunto]);

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
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center gap-4 p-3 pt-16 sm:p-6 sm:pt-16 xl:flex-row xl:items-start xl:justify-center xl:gap-6">
        <main className="w-full min-w-0 max-w-[850px] xl:flex-1">
          <Fases aoClicar={handclick} fase={Ativo} />
          {conteudo}
        </main>

        <aside className="w-full max-w-[600px] xl:w-[600px] xl:pt-2">
          <Resumo 
            penaB={resultado.penaBase}
            penaP={resultado.penaProvisoria}
            penaD={resultado.penaDefinitiva}
            VI={resultado.VI}
            V1={resultado.V1}
            V2={resultado.V2}
            V3={resultado.V3}
           />
        </aside>
      </div>
    </div>
  );
};

export default App;
