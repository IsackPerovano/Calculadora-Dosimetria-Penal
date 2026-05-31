import { Form } from "../Types/Form";
import { LimitesLeg } from "../Types/LimitesLeg";
import { Valores } from "../Types/Valores";

export interface ResultadoDosimetria {
  penaBase: string;
  penaProvisoria: string;
  penaDefinitiva: string;
}

export const calcularPena = (
  tipo: string,
  tempo: LimitesLeg,
  valores: Valores,
  fracaoCJ: { numerador: number; denominador: number },
  ag: number,
  at: number,
  fracaoAgAt: { numerador: number; denominador: number },
  conjunto: Form[],
): ResultadoDosimetria => {
  //   Conversao de anos e meses para dias no minimo

  let DiMin: number = tempo.MinAnos * 365 + tempo.MinMes * 30 + tempo.MinDias;
  let DiMax: number = tempo.MaxAnos * 365 + tempo.MaxMes * 30 + tempo.MaxDias;
  let DiI: number = (DiMax - DiMin) / 2 + DiMin;

  let valcontP: number = 0;
  let valcontN: number = 0;

  let fracao1f = fracaoCJ.numerador / fracaoCJ.denominador;
  let fracao2f = fracaoAgAt.numerador / fracaoAgAt.denominador;

  let CJ: number = 0;
  let ATAG: number = 0;

  const listaSinais = Object.values(valores);

  if (tipo !== "minima") {
    listaSinais.forEach((sinais) => {
      if (sinais === "+") {
        valcontP++;
      } else if (sinais === "-") {
        valcontN++;
      }
    });
    if (DiI >= DiMin && DiI <= DiMax) {
      CJ = DiI + (DiI * fracao1f * valcontP) - (DiI * fracao1f * valcontN);
    }
    if (CJ >= DiMin && DiI <= DiMax) {
      ATAG = CJ + (CJ * fracao2f * ag) - (CJ * fracao2f * at);

      if (ATAG < DiMin) {
        ATAG = DiMin;
      } else if (ATAG > DiMax) {
        ATAG = DiMax;
      }
    }
  } else {
    CJ = DiI + (DiI * fracao1f * valcontP) - (DiI * fracao1f * valcontN);

    if (CJ < DiMin) {
      CJ = DiMin;
    }
    if (CJ > DiMax) {
      CJ = DiMax;
    }

    ATAG = CJ + (CJ * fracao2f * ag) - (CJ * fracao2f * at);

    if (ATAG < DiMin) {
      ATAG = DiMin;
    }
    if (ATAG > DiMax) {
      ATAG = DiMax;
    }
  }

  return {
    penaBase: "0 anos, 0 meses, 0 dias",
    penaProvisoria: "0 anos, 0 meses, 0 dias",
    penaDefinitiva: "0 anos, 0 meses, 0 dias",
  };
};
