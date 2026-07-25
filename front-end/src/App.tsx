import { Circunstancias } from "./components/Cirscunstancias";
import { Fases } from "./components/Fases";
import { Limites } from "./components/LimitesLegais";
import { useEffect, useState } from "react";
import { AgraAten } from "./components/AgraAten";
import { AumDim } from "./components/AumDim";
import { Resumo } from "./components/Resumo";
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
      const req = await fetch("https://calculadora-dosimetria-penal.onrender.com/server.php", {
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
    <div className="flex min-h-screen flex-col bg-[#F5F5F5] text-[#1f293A] transition-colors duration-200 dark:bg-[#0f172a] dark:text-[#f8fafc]">
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

      <footer className="mt-auto px-3 pb-4 pt-2 sm:px-6">
        <a
          href="https://github.com/IsackPerovano"
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#1f293A] transition-colors hover:bg-[#EEF8FF] dark:text-[#f8fafc] dark:hover:bg-[#1e293b]"
          aria-label="Visitar o GitHub de IsackPerovano"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 fill-current"
          >
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-1.024-.013-1.858-2.782.604-3.369-1.18-3.369-1.18-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.984 1.029-2.684-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.025A9.56 9.56 0 0 1 12 6.8c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.379.202 2.397.1 2.65.64.7 1.028 1.592 1.028 2.684 0 3.842-2.338 4.688-4.566 4.936.359.31.678.92.678 1.854 0 1.34-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.002 10.002 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
          </svg>
          <span>IsackPerovano</span>
        </a>
      </footer>
    </div>
  );
};

export default App;
