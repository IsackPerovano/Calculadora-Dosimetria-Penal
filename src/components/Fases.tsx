type Props = {
  aoClicar: (number: number) => void;
  fase: number;
};

export const Fases = ({ aoClicar, fase }: Props) => {
  const estilo = (num: number) =>
    `flex flex-auto items-center justify-center rounded-[15px] transition-colors duration-200
    ${
      fase === num
        ? "bg-[#3993DD]  border border-[#d9d9d8] text-white"
        : "bg-[#1E2C4B] text-white hover:bg-[#EEF8FF] hover:text-[#1E2C4B] border border-transparent hover:border-[#d9d9d8]"
    }`;

  return (
    <div
      className="Border border-2 border-[#d9d9d8] rounded-[20px] flex mt-2.5 ml-50 w-250 h-15 p-1 gap-1 poppins bg-white"
      style={{ fontWeight: 400 }}
    >
      <button onClick={() => aoClicar(1)} className={estilo(1)}>
        1° Fase
      </button>

      <button onClick={() => aoClicar(2)} className={estilo(2)}>
        2° Fase
      </button>

      <button onClick={() => aoClicar(3)} className={estilo(3)}>
        3° Fase
      </button>
    </div>
  );
};
