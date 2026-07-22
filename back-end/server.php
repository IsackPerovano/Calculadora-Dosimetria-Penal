<?php

function cors(){
    if(isset($_SERVER['HTTP_ORIGIN'])){
        header("Access-Control-Allow-Origin: http://localhost:5173");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
            header("HTTP/1.1 200 OK");
            exit();
        }
    }
}

cors();
$body = file_get_contents('php://input');
$data = json_decode($body);
LimitesLegais($data);

export {
    $penaBase = '';
    $penaProvisoria = '';
    $penaDefinitiva = '';

    $Vinicial = '';
    $V1 = '';
    $V2 = '';
    $V3 = '';
}

function LimitesLegais($data){
    
    $PenaMinima = $data->tempo->MinAnos * 365 + $data->tempo->MinMes * 30 + $data->tempo->MinDias;
    $PenaMaxima = $data->tempo->MaxAnos * 365 + $data->tempo->MaxMes * 30 + $data->tempo->MaxDias;
    $Difereca = ($PenaMaxima - $PenaMinima) / 2 + $PenaMinima;

    return [
        'PenaMinima' => $PenaMinima,
        'PenaMaxima' => $PenaMaxima,
        'Diferenca' => $Difereca,
        'CircJudi' => CircunstanciasJudiciais($data, $PenaMinima, $PenaMaxima, $Difereca),
    ];

}

function CircunstanciasJudiciais($data, $PenaMinima, $PenaMaxima, $Difereca){

    $CountCircP = 0; // CountCircP => Contador de Circuntancias Judiciais Positivas;
    $CountCircN = 0; // CountCircN => Contador de Circuntancias Judiciais Negativas;
    $fracaoCJ = $data->fracao->numerador / $data->fracao->denominador;
    
    foreach($data->valores as $sinais){
        if($sinais === "+"){
            $CountCircP++;
        }else if($sinais === "-"){
            $CountCircN++;
        }
    }

    $basecalculo = $data->tipo !== "minima" ? $Difereca : $PenaMinima;
    $CircJud = $basecalculo + ($basecalculo * $fracaoCJ * $CountCircP) - ($basecalculo * $fracaoCJ * $CountCircN);

    $CircJud < $PenaMinima ? $CircJud = $PenaMinima : $CircJud;
    $CircJud > $PenaMaxima ? $CircJud = $PenaMaxima : $CircJud;

    return AtenuantesAgravantes($data, $CircJud, $PenaMinima, $PenaMaxima, $Difereca);
}

function AtenuantesAgravantes($data, $CircJud, $PenaMinima, $PenaMaxima){

    $ag = $data->ag;
    $at = $data->at;
    $fracaoAGAT = $data->fracaoAGAT->numerador / $data->fracaoAGAT->denominador;

    $AtenAgrav = $CircJud + ($CircJud * $fracaoAGAT * $ag) - ($CircJud * $fracaoAGAT * $at);

    $AtenAgrav < $PenaMinima ? $AtenAgrav = $PenaMinima : $AtenAgrav;
    $AtenAgrav > $PenaMaxima ? $AtenAgrav = $PenaMaxima : $AtenAgrav;

    return PenaDefinitiva($data, $AtenAgrav);
}

function PenaDefinitiva($data, $AtenAgrav){

    foreach($data->conjunto as $causa){
        if(!$causa->denominador || $causa->denominador === 0 || !$causa->numerador || $causa->numerador === 0){
            continue;
        }

        $FracaoPenaDef = $causa->numerador / $causa->denominador;

        $causa->tipo === 'Aumento' ? $PenaDef = $AtenAgrav + ($AtenAgrav * $FracaoPenaDef) : $PenaDef = $AtenAgrav - ($AtenAgrav * $FracaoPenaDef);  
    }

    return $PenaDef;
}

function Varicacoes($PenaMinima, $CircJud, $AtenAgrav, $PenaDef){
    $VariacaoInicial = $PenaMinima;
    $Variacao1 = $CircJud - $PenaMinima;
    $Variacao2 = $AtenAgrav - $CircJud;
    $Variacao3 = $PenaDef - $AtenAgrav;

    $sinalV1 = "";
    $Variacao1 > 0 ? $sinalV1 = "+ " : $sinalV1 = "- " ;
    $sinalV2 = "";
    $Variacao2 > 0 ? $sinalV2 = "+ " : $sinalV2 = "- " ;
    $sinalV3 = "";
    $Variacao3 > 0 ? $sinalV3 = "+ " : $sinalV3 = "- " ;

   return [
    $penaBase = converterDiasParaTexto($CircJud),
    $penaProvisoria = converterDiasParaTexto($AtenAgrav),
    $penaDefinitiva = converterDiasParaTexto($PenaDef),
    
    $VInicial = converterDiasParaTexto($VariacaoInicial), 
    $V1 = $Variacao1 === 0 ? "0 dias" : `$sinalV1 converterDiasParaTexto($Variacao1)`, 
    $V2 = $Variacao2 === 0 ? "0 dias" : `$sinalV2 converterDiasParaTexto($Variacao2)`, 
    $V3 = $Variacao3 === 0 ? "0 dias" : `$sinalV3 converterDiasParaTexto($Variacao3)`
   ];
  
}

function converterDiasParaTexto($diasTotais){
$diasArredondados = floor(abs($diasTotais));

if($diasArredondados === 0) return "0 dias";

$anos = floor($diasArredondados / 365);
$restoAnos = $diasArredondados % 365;

$meses = floor($restoAnos / 30);
$dias = $restoAnos % 30;

$partes = [];

if($anos > 0) array_push($partes, $anos === 1 ? "1 ano" : `$anos anos`);
if($meses > 0) array_push($partes, $meses === 1 ? "1 mês" : `$meses meses`);
if($dias > 0) array_push($partes, $dias === 1 ? "1 dia" : `$dias dias`);

return implode(", ", $partes);
}