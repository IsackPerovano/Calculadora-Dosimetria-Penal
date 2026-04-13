import { Circunstancias } from "./components/Cirscunstancias";
import { Fases } from "./components/Fases";
import { Limites } from "./components/LimitesLegais";
import './App.css'
import { useState } from "react";


const App = () =>{

  const [Ativo, setActivo] = useState(0);



  return(
    <div className="bg-[#F5F5F5] h-screen ">

      <div className="h-25 w-auto bg-amber-400" />

      <Fases />
      
      <div>
        

        <Limites isActive={Ativo === 0}/>
        <Circunstancias isActive={Ativo === 0} />
        
      </div>

    

    </div>
  )
} 

export default App;