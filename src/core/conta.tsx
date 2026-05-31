import type { Form } from "../Types/Form";
import type { LimitesLeg } from "../Types/LimitesLeg";
import type { Valores } from "../Types/Valores";

export interface ResultadoDosimetria {
  penaBase: string;
  penaProvisoria: string;
  penaDefinitiva: string;
  
  VI: string;
  V1: string;
  V2: string;
  V3: string;
}

const converterDiasParaTexto = (diasTotais: number) : string => {
  const diasArredondados = Math.round(Math.abs(diasTotais));

  if (diasArredondados === 0) return "0 dias";

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

  let VariacaoI : number = 0;
  let Variacao1 : number = 0;
  let Variacao2 : number = 0;
  let Variacao3 : number = 0;


  if (tipo !== "minima") {
    listaSinais.forEach((sinais) => {
      if (sinais === "+") {
        valcontP++;
      } else if (sinais === "-") {
        valcontN++;
      }
    });
    VariacaoI = DiI;

    CJ = DiI + (DiI * fracao1f * valcontP) - (DiI * fracao1f * valcontN);
     

     Variacao1 = CJ - DiI;
   
    if (CJ < DiMin) CJ = DiMin;
    if (CJ > DiMax) CJ = DiMax;
  
      ATAG = CJ + (CJ * fracao2f * ag) - (CJ * fracao2f * at);
  
      Variacao2 = ATAG - CJ;

    if (ATAG < DiMin) {
      ATAG = DiMin;
    } else if (ATAG > DiMax) {
      ATAG = DiMax; 
    }
  
  
  } else {
    listaSinais.forEach((sinais) => {
      if (sinais === "+") {
        valcontP++;
      } else if (sinais === "-") {
        valcontN++;
      }
    });
    
    VariacaoI = DiMin;

    CJ = DiMin + (DiMin * fracao1f * valcontP) - (DiMin * fracao1f * valcontN);
   
    Variacao1 = CJ - DiMin; 

    if (CJ < DiMin) CJ = DiMin;
    if (CJ > DiMax) CJ = DiMax;
  
      ATAG = CJ + (CJ * fracao2f * ag) - (CJ * fracao2f * at);
      
      Variacao2 = ATAG - CJ;
  
    if (ATAG < DiMin) {
      ATAG = DiMin;
    } else if (ATAG > DiMax) {
      ATAG = DiMax; 
    }
  }

  let penaF: number = ATAG;

  conjunto.forEach((causa) => {
    if(!causa.denominador || causa.denominador === 0 || !causa.numerador || causa.numerador === 0) {
        return;
    }
      let fracao3f = causa.numerador / causa.denominador;

      if(causa.tipo === 'Aumento'){
        penaF = penaF + (penaF * fracao3f);
      }else if(causa.tipo === 'Diminuicao'){
        penaF = penaF - (penaF * fracao3f);
      }
  })


  Variacao3 = penaF - ATAG;

  let sinalV1 = "";
  if (Variacao1 > 0) sinalV1 = "+ ";
  if (Variacao1 < 0) sinalV1 = "- ";

  let sinalV2 = "";
  if (Variacao2 > 0) sinalV2 = "+ ";
  if (Variacao2 < 0) sinalV2 = "- ";

  let sinalV3 = "";
  if (Variacao3 > 0) sinalV3 = "+ ";
  if (Variacao3 < 0) sinalV3 = "- ";


  return {
    penaBase: converterDiasParaTexto(CJ),
    penaProvisoria: converterDiasParaTexto(ATAG),
    penaDefinitiva: converterDiasParaTexto(penaF),

    VI: converterDiasParaTexto(VariacaoI), 
    V1: Variacao1 === 0 ? "0 dias" : `${sinalV1}${converterDiasParaTexto(Variacao1)}`, 
    V2: Variacao2 === 0 ? "0 dias" : `${sinalV2}${converterDiasParaTexto(Variacao2)}`, 
    V3: Variacao3 === 0 ? "0 dias" : `${sinalV3}${converterDiasParaTexto(Variacao3)}`
  };
};
