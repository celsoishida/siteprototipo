<?php
header('Content-Type: text/html; charset=utf-8');
?>
<html>
<head>
<title>Inscrição - Passo 5 - Inscrição solicitada</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body>
<?php include_once("../../cyi/analyticstracking.php");
include_once("modificar.php");
?>
<a href="http://www.pgedf.ufpr.br/"><img src="http://www.pgedf.ufpr.br/imagens/HeaderPrincipal.jpg" width="1024" height="130" /></a>

<h2>Passo 5 - Inscrição para Renovação de Bolsa de Estudos no PPGEDF solicitada - UFPR (<?php echo $desPeriodo; ?>) </h2>

<?php 
include_once("../../cyi/cyistr.php");
if (!($_POST[candidato]) || $_POST[candidato] =="") {
	header('Location: http://produtividade.ufpr.br/');
}

print "<pre>";
$nome = removeAcentos($_POST[candidato]);
print 'Foram recebidos os seguintes documentos do candidato ' . $_POST[candidato] . ' (';
$today = date("F j, Y, g:i a"); 
echo $today;

print ') <br />';
$conta = linkArquivo2( $nome . '_inscricao', "Ficha de Inscrição");
$somador = $conta;
$conta = linkArquivo2( $nome . '_artigo', "Artigo Científico ou Comprovante de Aceite");
$somador = $somador + $conta ;
$conta = linkArquivo2( $nome . '_carteira', "Carteira de Trabalho");
$somador = $somador + $conta ;

print "</pre>";

if ($somador >= 3) {
	if ($timestamp_dt_atual > $timestamp_dt_expira) {
	  echo  "Inscrições encerradas!! Solicitação número: ";
	} else
	print 'Inscrição solicitada com sucesso. Imprima esta página como comprovante de solicitação número: ';
	
	$arquivo2 = fopen( $nome . '.txt','r+');
	if ($arquivo2 == true) {
		$linha = stream_get_line($arquivo2, 1024, '\n');
		echo $linha;
		$primeiroEnvio = stream_get_line($arquivo2, 1024, '\n');
		echo ' (primeiro envio em: ' .$primeiroEnvio . ').';
		fclose($arquivo2);
	} else {
		$arquivo = fopen('../../cyi/num.comprovante','r+');
		if ($arquivo == false) die('Não foi possível identificar o número da solicitação. ');
		$linha = fgets($arquivo);
		if ($linha==null) return;
		$linha = $linha + 1;
		rewind($arquivo);
		fputs($arquivo, $linha);
		echo $linha . '.';
		fclose($arquivo);
	}
	
	$arquivo = fopen( $nome . '.txt','a');
	if ($arquivo == false) die('Não foi possível associar o número da solicitação.');
	fputs($arquivo, $linha . '\n');
	fputs($arquivo, $today . '\n');
	fclose($arquivo);
	
	print '<br /> <br /> <a href="javascript:self.print()">IMPRIMIR</a>';
} else if ($somador <= 0) {
	print 'Volte ao passo 1: <a href="index.php">Instruções</a>.';
	$arquivo2 = fopen( $nome . '.txt','r');
	if ($arquivo2 == true) {
		$linha = stream_get_line($arquivo2, 1024, '\n');
		echo ' Foi gerado solicitação número: ' .  $linha;
		$primeiroEnvio = stream_get_line($arquivo2, 1024, '\n');
		echo ' (primeiro envio em: ' .$primeiroEnvio . ').';
		fclose($arquivo2);
	}
} else {
	print '<form enctype="multipart/form-data" action="passo2.php" method="post">';
	print 'Envie os documentos faltantes: ';
	print '<input type="submit" value="Passo 2" /> <input name="candidato" type="text" id="candidato" site="1" style="visibility:hidden" value=\'' . $nome . '\'>';
}

?>

<br /><br />


Desenvolvido por <a href="http://www.cedsmi.ufpr.br/celsoishida/pesquisa/">CYI</a>.

</body>
</html>