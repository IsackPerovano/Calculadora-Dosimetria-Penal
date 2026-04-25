import { use, useState } from "react";
import Icon from "../assets/doc.svg";

export const AumDim = () => {

  const [dados, setDados] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  let valor : string = '';
  let aoMudar: (texto: string) => void;
  let tarefas: string[] = [];

  const clearState = () =>{
    setDados('');
  }
  const handClick = () => {
      setLista([...lista, dados])

    clearState();
  }


  return (
    <div className="h-52 w-[850px] ml-50 px-3.5 py-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px] bg-white">
      <h3
        className="flex gap-3 text-[20px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Causas de Aumento e Diminuição
      </h3>

      <h4
        className="pt-1 text-[14px] poppins"
        style={{ fontWeight: 300 }}
      >
        Majorantes e Minorantes (Frações).
      </h4>

      <div className="flex pt-4 place-content-between">
        {/* AUMENTO */}
        <div>
          <div className="flex place-content-between">
            <h3
              className="text-[14px] poppins"
              style={{ fontWeight: 700 }}
            >
              Causa de Aumento
            </h3>
          </div>

          <div className="flex gap-5 mt-2">
            <input
              type="text"
              placeholder="Ex: 1/3"
              value={valor}
           
              className="rounded-[10px] border border-[#d9d9d8] w-60 h-7.5 px-2 outline-none focus:border-[#1E2C4B]"
            />

              <button 
            onClick={()=> handClick()} 
           
            className="rounded-[10px] border border-[#d9d9d8] hover:bg-[#1E2C4B] hover:text-white transition w-20 h-7.5 flex items-center justify-center">
              Adicionar
            </button>
          </div>
        </div>

        {/* DIMINUIÇÃO */}
        <div>
          <div className="flex place-content-between">
            <h3
              className="text-[14px] poppins"
              style={{ fontWeight: 700 }}
            >
              Causa de Diminuição
            </h3>
          </div>

          <div className="flex gap-5 mt-2">
            <input
              type="text"
              placeholder="Ex: 1/3"
              className="rounded-[10px] border border-[#d9d9d8] w-60 h-7.5 px-2 outline-none focus:border-[#1E2C4B]"
            />

            <button className="rounded-[10px] border border-[#d9d9d8] hover:bg-[#1E2C4B] hover:text-white transition w-20 h-7.5 flex items-center justify-center">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};