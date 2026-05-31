import type { Form } from "../Types/Form";
import type { LimitesLeg } from "../Types/LimitesLeg";
import type { Valores } from "../Types/Valores";

export interface ResultadoDosimetria {
  penaBase: string;
  penaProvisoria: string;
  penaDefinitiva: string;
}

const converterDiasParaTexto = (diasTotais: number) : string => {
  const diasArredondados = Math.round(diasTotais);

  const anos = Math.floor(diasArredondados / 365);
  const restoAnos = diasArredondados % 365;

  const meses = Math.floor(restoAnos / 30);
  const dias = restoAnos % 30;

    const partes: string[] = [];

 if (anos > 0) {
    partes.push(anos === 1 ? "1 ano" : `${anos} anos`);
  }
  if (meses > 0) {
    partes.push(meses === 1 ? "1 mês" : `${meses} meses`);
  }
  if (dias > 0) {
    partes.push(dias === 1 ? "1 dia" : `${dias} dias`);
  }

  return partes.join(", ");
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
    listaSinais.forEach((sinais) => {
      if (sinais === "+") {
        valcontP++;
      } else if (sinais === "-") {
        valcontN++;
      }
    });
    CJ = DiMin + (DiMin * fracao1f * valcontP) - (DiMin * fracao1f * valcontN);

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

  let penaF: number = ATAG;

  conjunto.forEach((causa) => {
    if(causa.denominador === 0) {
        return;
    }
      let fracao3f = causa.numerador / causa.denominador;

      if(causa.tipo === 'Aumento'){
        penaF = penaF + (penaF * fracao3f);
      }else if(causa.tipo === 'Diminuicao'){
        penaF = penaF - (penaF * fracao3f);
      }
  })




  return {
    penaBase: converterDiasParaTexto(CJ),
    penaProvisoria: converterDiasParaTexto(ATAG),
    penaDefinitiva: converterDiasParaTexto(penaF),
  };
};
