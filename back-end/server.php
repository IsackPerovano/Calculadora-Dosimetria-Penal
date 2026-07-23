<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_SERVER['HTTP_ORIGIN'])){
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit;
}
}

$body = file_get_contents('php://input');
$data = json_decode($body);

if(!$data){
    http_response_code(400);
    echo json_encode(["erro" => "Nenhum dado recebido pelo PHP", "input_recebido" => $body]);
    exit;
}

function LimitesLegais($data){
    $PenaMinima = $data->tempo->MinAnos * 365 + $data->tempo->MinMes * 30 + $data->tempo->MinDias;
    $PenaMaxima = $data->tempo->MaxAnos * 365 + $data->tempo->MaxMes * 30 + $data->tempo->MaxDias;
    $Difereca = ($PenaMaxima - $PenaMinima) / 2 + $PenaMinima;


    return  CircunstanciasJudiciais($data, $PenaMinima, $PenaMaxima, $Difereca);
}

function CircunstanciasJudiciais($data, $PenaMinima, $PenaMaxima, $Difereca){
    $CountCircP = 0; // CountCircP => Contador de Circuntancias Judiciais Positivas;
    $CountCircN = 0; // CountCircN => Contador de Circuntancias Judiciais Negativas;
   $DenominadorCJ = !empty($data->fracao->denominador) ? $data->fracao->denominador : 8;
    $fracaoCJ = ($data->fracao->numerador ?? 1) / $DenominadorCJ;
    
    foreach($data->valores as $sinais){
        if($sinais === "+"){
            $CountCircP++;
        }else if($sinais === "-"){
            $CountCircN++;
        }
    }

    $basecalculo = $data->tipo !== "minima" ? $Difereca : $PenaMinima;
    $CircJud = $basecalculo + ($basecalculo * $fracaoCJ * $CountCircP) - ($basecalculo * $fracaoCJ * $CountCircN);

    if ($CircJud < $PenaMinima) $CircJud = $PenaMinima;
    if ($CircJud > $PenaMaxima) $CircJud = $PenaMaxima;

    return AtenuantesAgravantes($data, $CircJud, $PenaMinima, $PenaMaxima, $basecalculo);
}

function AtenuantesAgravantes($data, $CircJud, $PenaMinima, $PenaMaxima, $basecalculo){
    $ag = $data->ag ?? 0;
    $at = $data->at ?? 0;

    $DenominadorATAG = !empty($data->fracao->denominador) ? $data->fracao->denominador : 6;
    $fracaoAGAT = ($data->fracao->numerador ?? 1) / $DenominadorATAG;
    
    $AtenAgrav = $CircJud + ($CircJud * $fracaoAGAT * $ag) - ($CircJud * $fracaoAGAT * $at);

    if ($AtenAgrav < $PenaMinima) $AtenAgrav = $PenaMinima;
    if ($AtenAgrav > $PenaMaxima) $AtenAgrav = $PenaMaxima;

    return PenaDefinitiva($data, $CircJud, $AtenAgrav, $basecalculo);
}

function PenaDefinitiva($data, $CircJud, $AtenAgrav, $basecalculo){
    
    $PenaDef = $AtenAgrav;
    foreach($data->conjunto as $causa){
        if(empty($causa->denominador) || empty($causa->numerador)){
                continue;
        }

        $FracaoPenaDef = $causa->numerador / $causa->denominador;

        $causa->tipo === 'Aumento' ? $PenaDef = $AtenAgrav + ($AtenAgrav * $FracaoPenaDef) : $PenaDef = $AtenAgrav - ($AtenAgrav * $FracaoPenaDef);  
    }

    return Varicacoes($CircJud, $AtenAgrav, $PenaDef, $basecalculo);
}

function Varicacoes($CircJud, $AtenAgrav, $PenaDef, $basecalculo){
    $VariacaoInicial = $basecalculo;
    $Variacao1 = $CircJud - $basecalculo;
    $Variacao2 = $AtenAgrav - $CircJud;
    $Variacao3 = $PenaDef - $AtenAgrav;

    $sinalV1 = "";
    $Variacao1 > 0 ? $sinalV1 = "+ " : $sinalV1 = "- " ;
    $sinalV2 = "";
    $Variacao2 > 0 ? $sinalV2 = "+ " : $sinalV2 = "- " ;
    $sinalV3 = "";
    $Variacao3 > 0 ? $sinalV3 = "+ " : $sinalV3 = "- " ;

   return [
    "penaBase" => converterDiasParaTexto($CircJud),
    "penaProvisoria" => converterDiasParaTexto($AtenAgrav),
    "penaDefinitiva" => converterDiasParaTexto($PenaDef),
    
    "VInicial" => converterDiasParaTexto($VariacaoInicial), 
    "V1" => $Variacao1 == 0 ? "0 dias" : $sinalV1 . converterDiasParaTexto($Variacao1),
    "V2" => $Variacao2 == 0 ? "0 dias" : $sinalV2 . converterDiasParaTexto($Variacao2),
    "V3" => $Variacao3 == 0 ? "0 dias" : $sinalV3 . converterDiasParaTexto($Variacao3)
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

    if($anos > 0) array_push($partes, $anos === 1 ? "1 ano" : $anos . "anos");
    if($meses > 0) array_push($partes, $meses === 1 ? "1 mês" : $meses . "meses");
    if($dias > 0) array_push($partes, $dias === 1 ? "1 dia" : $dias . "dias");

    return implode(", ", $partes);
}

$resultado = LimitesLegais($data);
echo json_encode($resultado);
exit;