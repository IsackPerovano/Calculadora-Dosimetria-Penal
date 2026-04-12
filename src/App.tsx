import { Circunstancias } from "./components/Cirscunstancias";
import { Fases } from "./components/Fases";
import { Limites } from "./components/LimitesLegais";
import './App.css'




const App = () =>{
  return(
    <div className="bg-[#F5F5F5] h-screen ">

      <div className="h-25 w-auto bg-amber-400" />

      <Fases/>
      <Limites/>
      <Circunstancias/>
      

    </div>
  )
} 

export default App;