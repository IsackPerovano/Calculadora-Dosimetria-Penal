import Icon from "../assets/martelo.svg";

export const AumDim = () => {
  return (
    <div className=" h-60 w-250 ml-50 pl-3.5 pr-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">
      <h3
        className="flex pt-3 gap-3 text-[24px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Casos de Aumento e Diminuição
      </h3>

      <h4 className="pt-1 poppins poppins" style={{ fontWeight: 300 }}>
        Majorantes e Minorantes (Frações).
      </h4>

      <div className="flex  pt-4">
        <div>
          <h3 className=" text-[18px] poppins " style={{ fontWeight: 700 }}>
            Aumento
          </h3>

          <input className="border border-blue-800" type="number" />
            
        </div>

        <div>
          <h3 className=" text-[18px] poppins" style={{ fontWeight: 700 }}>
            Diminuição
          </h3>

          <div className="flex">
            <div>
              <div className="border rounded-[10px] w-[205px] h-[30px] flex items-center justify-center text-[20px]">
                <button> - </button>
              </div>
            </div>

            <div className="pl-10">
              <div className="border rounded-[10px] w-[205px] h-[30px] flex items-center justify-center text-[20px]">
                <button> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
