<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="Inscrição para renovação de bolsa de estudo"></meta>

	<title>Inscrição para Renovação de Bolsa de Estudo no PPGEDF - UFPR - passo 2</title>


</head>
<body>
<?php include_once("../../cyi/analyticstracking.php") ?>

<a href="http://www.pgedf.ufpr.br/"><img src="http://www.pgedf.ufpr.br/imagens/HeaderPrincipal.jpg" width="1024" height="130" /></a>
					
<h2>Passo 2 - Indique os documentos (somente arquivos .zip ou .pdf)</h2>

<form enctype="multipart/form-data" action="passo3.php" method="post">
<?php 
include_once("modificar.php");
include_once("../../cyi/cyiver2.php");
?>

<b>Candidato</b> (não abrevie o seu nome, use somente letras minúsculas e espaço): <input name="candidato" type="text" id="candidato" required 
<?php
if ($_POST[candidato]){
	print "value=\"". $_POST[candidato] ."\"";
}
set_time_limit(600);
?>
 size="50"> <br /><br />
Formulário de Solicitação Nº11: <input name="inscricao" type="file" accept=".zip, .pdf" /><br /><br />
Artigo Científico ou Comprovante de Aceite: <input name="artigo" type="file"  accept=".zip, .pdf"/><br /><br />
Carteira de Trabalho: <input name="carteira" type="file"  accept=".zip, .pdf"/><br /><br />

<input type="submit" value="Enviar" />
</form>

<br /><br />
Obs: 1) A soma de todos os documentos pode ter no máximo 20MB. Se for preciso, envie cada documento individualmente.<br />

2) Se já conseguiu enviar algum documento anteriormente, apenas digite novamente o seu nome e envie apenas os documentos faltantes.<br />

3) A acentuação do seu nome deve estar correta na sua ficha de inscrição. No campo "candidato" acima pode ser escrito sem acentos ou 'ç'.<br />


</body>
</html>

