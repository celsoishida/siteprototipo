<!DOCTYPE html>
<?php
header('Content-Type: text/html; charset=utf-8');
?>
<html lang="pt-br">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="Inscrição de Renovação de Bolsa de estudo educação física ufpr"></meta>
<meta name="keywords" content="bolsa de estudo, EDF"></meta>

	<title>Inscrição para Renovação de Bolsa de Estudo 2019 - instruções</title>


</head>
<body>
<?php include_once("../../cyi/analyticstracking.php") ?>

<a href="http://www.pgedf.ufpr.br/"><img src="http://www.pgedf.ufpr.br/imagens/HeaderPrincipal.jpg" width="1024" height="130" /></a>
					
<?php 
include_once("modificar.php");
?>
					
<h2 title="Educação física">Passo 1 de 5- Instruções para inscrição no processo seletivo de renovação de bolsa de estudos no PPGEDF (<?php echo $desPeriodo; ?>)</h2>

<form enctype="multipart/form-data" action="passo2.php" method="post">
As informações encontram-se no site do programa PPGEDF <a href="http://www.pgedf.ufpr.br/bolsas.htm" target=\"_blank\">(http://www.pgedf.ufpr.br/)</a>. Inscrevendo-se neste site, você concorda com as normas de seleção descritas no site do programa</a>.
<br /><br />

<?php 
if ($timestamp_dt_atual > $timestamp_dt_expira) {
  echo  "Inscrições encerradas!!";
} else {
	echo '<input type="submit" value="Continuar" />';
}

?>

</form>
<br />
<a href="reimpressao.php">Verifique sua solicitação aqui</a>.
</body>
</html>

