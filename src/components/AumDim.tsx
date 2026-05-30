import Icon from "../assets/doc.svg";
import type { Form } from "../Types/Form";

type Props = {
  conjunto: Form[]; 
  setConjunto: React.Dispatch<React.SetStateAction<Form[]>>;
}

export const AumDim = ({conjunto, setConjunto} : Props) => {

  const atualizarFormulario = (
    indexDaLinha: number,
    campo: string,
    novoValor: any,
  ) => {
    const listaAtualizada = conjunto.map((item, i) => {
      if (i === indexDaLinha) {
        return { ...item, [campo]: novoValor };
      }
      return item;
    });

    setConjunto(listaAtualizada);
  };

  const Adicionar = () => {
    if (!podeAdicionar) return;

    setConjunto([
      ...conjunto,
      { tipo: "Aumento", numerador: 0, denominador: 0, obs: "" },
    ]);
  };

  const Add = () => {
    console.log(conjunto);
  };

  const Apagar = (indexDaLinha: number) => {
    setConjunto(conjunto.filter((_, i) => i !== indexDaLinha));
  };

  const formularioPreenchido = (form: Form) => {
    return form.numerador >= 0 && form.denominador >= 0 && form.obs.trim() !== "";
  };

  const podeAdicionar =
    conjunto.length === 0 || formularioPreenchido(conjunto[conjunto.length - 1]);
  const alturaContainer = 60 + conjunto.length + 30;

  return (
    <div
      className="w-212.5 ml-50 px-3.5 py-3.5 mt-5 border-2 border-[#d9d9d8] rounded-[15px] bg-white"
      style={{ height: `${alturaContainer}` }}
    >
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
          disabled={!podeAdicionar}
          className="bg-[#1f293A] text-white h-7.5 w-30 rounded-[10px] text-[14px] poppins disabled:cursor-not-allowed disabled:opacity-50"
          style={{ fontWeight: 500 }}
        >
          Adicionar
        </button>
      </div>

      {conjunto.map((form, index) => (
        <div className="mt-4" key={index}>
          <div className="border border-[#d9d9d8] rounded-[10px] p-2">
            <div className="flex gap-3 items-center">
              <select
                className="border border-[#d9d9d8] rounded-[10px] h-7.5 w-37.5 text-center text-[14px] poppins"
                style={{ fontWeight: 500 }}
                value={form.tipo}
                onChange={(e) =>
                  atualizarFormulario(index, "tipo", e.target.value)
                }
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
                  type="number" min="0"
                  value={form.numerador}
                  onChange={(e) =>
                    atualizarFormulario(
                      index,
                      "numerador",
                      Number(e.target.value),
                    )
                  }
                />
                <h5 className="text-[14px] pl-1 pr-1"> / </h5>
                <input
                  className="Border border-2 rounded-[10px] w-16.25 text-[14px] border-[#d9d9d8] text-center"
                  value={form.denominador} min="0"
                  onChange={(e) =>
                    atualizarFormulario(
                      index,
                      "denominador",
                      Number(e.target.value),
                    )
                  }
                  type="number"
                />
              </div>

              <textarea
                className="border border-[#d9d9d8] rounded-[10px] h-18.75 w-75 text-[12px] p-1"
                value={form.obs}
                onChange={(e) =>
                  atualizarFormulario(index, "obs", e.target.value)
                }
              ></textarea>

              <div className="flex flex-col gap-4">

              <button
                onClick={Add}
                className="bg-[#1f293A] text-white h-6.25 w-12.5 rounded-[10px] text-[12px] poppins"
                style={{ fontWeight: 500 }}
              >
                {" "}
                Add
              </button>
              <button
                onClick={() => Apagar(index)}
                className="bg-[#1f293A] text-white h-6.25 w-12.5 rounded-[10px] text-[12px] poppins"
                style={{ fontWeight: 500 }}
              >
                {" "}
                X
              </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
