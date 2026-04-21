import Icon from "../assets/martelo.svg";

export const Limites = () => {
  return (
    <div className=" h-50 w-250 ml-50 mt-5 px-3.5 py-3.5 border-2 border-[#d9d9d8] rounded-[15px]  bg-white">
      {/* TITULOS */}
      <h3
        className="flex gap-3 text-[24px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Limites Legais
      </h3>

      <h4 className="pt-1 poppins poppins" style={{ fontWeight: 300 }}>
        Defina a pena mínima e máxima prevista no tipo penal.
      </h4>

      <div className="flex pt-4">
        {/* PENA MÍNIMA */}
        <div className="">
          <h3 className=" text-[18px] poppins " style={{ fontWeight: 700 }}>
            Pena Mínima
          </h3>

          <div className="flex pr-18.5">
            <div
              className="flex flex-col pr-18.5  items-center poppins"
              style={{ fontWeight: 300 }}
            >
              <input
                className="Border w-25  border rounded-[10px] text-center"
                type="number"
              />
              <h5>Anos</h5>
            </div>

            <div
              className="flex flex-col pr-18.5 items-center poppins"
              style={{ fontWeight: 300 }}
            >
              <input
                className="Border w-25 border rounded-[10px] text-center"
                type="number"
              />
              <h5>Meses</h5>
            </div>

            <div
              className="flex flex-col items-center poppins"
              style={{ fontWeight: 300 }}
            >
              <input
                className="Border w-25 border rounded-[10px] text-center"
                type="number"
              />
              <h5>Dias</h5>
            </div>          </div>
        </div>

        {/* PENA MÁXIMA */}
        <div>
          <h3 className=" text-[18px] poppins" style={{ fontWeight: 700 }}>
            Pena Máxima
          </h3>

          <div className="flex">
            <div
              className="flex flex-col pr-18.5 items-center poppins"
              style={{ fontWeight: 300 }}
            >
              <input
                className="Border w-25 border rounded-[10px] text-center"
                type="number"
              />
              <h5>Anos</h5>
            </div>

            <div
              className="flex flex-col pr-18.5 items-center poppins"
              style={{ fontWeight: 300 }}
            >
              <input
                className="Border w-25 border rounded-[10px] text-center"
                type="number"
              />
              <h5>Meses</h5>
            </div>

            <div
              className="flex flex-col items-center poppins"
              style={{ fontWeight: 300 }}
            >
              <input
                className="Border w-25 border rounded-[10px] text-center"
                type="number"
              />
              <h5>Dias</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
