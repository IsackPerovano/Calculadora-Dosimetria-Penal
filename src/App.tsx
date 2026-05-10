import { Circunstancias } from "./components/Cirscunstancias";
import { Fases } from "./components/Fases";
import { Limites } from "./components/LimitesLegais";
import { useState } from "react";
import { AgraAten } from "./components/AgraAten";
import { AumDim } from "./components/AumDim";
import "./App.css";

const App = () => {
  const [Ativo, setActivo] = useState<number>(0);
  const handsome = (aoClicar: number) => {
    setActivo(aoClicar);
  };

  let conteudo;
  switch (Ativo) {
    case 1:
      conteudo = (
        <>
          <Limites />
          <Circunstancias />
        </>
      );
      break;

    case 2:
      conteudo = <AgraAten />;
      break;

    case 3:
      conteudo = <AumDim />;
      break;

    default:
      conteudo = (
        <>
          <Limites />
          <Circunstancias />
        </>
      );
  }

  return (
    <div className="bg-[#F5F5F5] min- h-screen ">
      <div className="h-10 w-auto bg-amber-400" />

      <Fases aoClicar={handsome} fase={Ativo}/>

      {conteudo}
    </div>
  );
};

export default App;
