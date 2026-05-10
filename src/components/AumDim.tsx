import { useState } from "react";
import Icon from "../assets/doc.svg";
import type { Form } from "../Types/Form";

export const AumDim = () => {
  const [aberto, setAberto] = useState(false);
  const [conjunto, setConjunto] = useState<string[]>([]);
  const [form, setForm] = useState<Form>({
    tipo: "Aumento",
    numerador: 0,
    denominador: 0,
    obs: "",
  });


  const Adicionar = () => {
    setAberto(true);
  };

  const Add = () => {
    setForm(form);
  };
  return (
    <div className="h-200 w-[850px] ml-50 px-3.5 py-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px] bg-white">
      <h3
        className="flex gap-3 text-[20px] poppins"
        style={{ fontWeight: 500 }}
      >
        <img src={Icon} />
        Causas de Aumento e Diminuição
      </h3>

      <h4 className="pt-1 text-[14px] poppins" style={{ fontWeight: 300 }}>
        Majorantes e Minorantes (Frações).
      </h4>

      <div className="pt-3.5">
        <button
          onClick={Adicionar}
          className="bg-[#1f293A] text-white h-[30px] w-[120px] rounded-[10px] text-[14px] poppins"
          style={{ fontWeight: 500 }}
        >
          Adiconar
        </button>
      </div>

      {/* FOMULARIO */}
      <div className="mt-4">
        {aberto ? (
          <div className="border border-[#d9d9d8] rounded-[10px] p-2">
            <div className="flex gap-3 items-center">
              <select
                className="border border-[#d9d9d8] rounded-[10px] h-[30px] w-[150px] text-center text-[14px] poppins"
                style={{ fontWeight: 500 }}
                value={form.tipo}
                onChange={(e) => {
                  setForm({
                    ...form,
                    tipo: e.target.value,
                  });
                }}
              >
                <option value="Aumento">Aumento</option>
                <option value="Diminuição">Diminuição</option>
              </select>

              <div className="flex pt-1 items-center">
                <h5
                  className="pr-1 poppins text-[14px]"
                  style={{ fontWeight: 500 }}
                >
                  Valor da causa:
                </h5>
                <input
                  className="Border border-2 rounded-[10px] w-16.25 border-[#d9d9d8] text-[14px] text-center"
                  type="number"
                  value={form.numerador}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      numerador: Number(e.target.value),
                    });
                  }}
                />
                <h5 className="text-[14px] pl-1 pr-1"> / </h5>
                <input
                  className="Border border-2 rounded-[10px] w-16.25 text-[14px] border-[#d9d9d8] text-center"
                  value={form.denominador}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      denominador: Number(e.target.value),
                    });
                  }}
                  type="number"
                />
              </div>

              <textarea
                className="border border-[#d9d9d8] rounded-[10px] h-[75px] w-[300px] text-[12px] p-1"
                value={form.obs}
                onChange={(e) => {
                  setForm({
                    ...form,
                    obs: e.target.value,
                  });
                }}
              ></textarea>

              <button
                onClick={Add}
                className="bg-[#1f293A] text-white h-[25px] w-[50px] rounded-[10px] text-[12px] poppins"
                style={{ fontWeight: 500 }}
              >
                {" "}
                Add
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
