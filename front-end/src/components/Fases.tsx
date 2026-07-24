type Props = {
  aoClicar: (number: number) => void;
  fase: number;
};

export const Fases = ({ aoClicar, fase }: Props) => {
  const estilo = (num: number) =>
    `flex flex-auto items-center justify-center rounded-[15px] transition-colors duration-200
    ${
      fase === num
        ? "bg-[#1E2C4B]  border border-[#d9d9d8] text-white"
        : "bg-[#ffff]  hover:bg-[#EEF8FF] hover:text-[#1E2C4B] border border-[#d9d9d8] hover:border-[#d9d9d8] dark:text-black"
    }`;

  return (
    <div
      className="Border mt-2.5 flex h-auto w-full gap-1 rounded-[20px] border-2 border-[#d9d9d8] bg-white p-1 text-[12px] poppins sm:h-11 sm:text-[14px] lg:w-[850px]"
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



