<html>
<head>
<title>Inscrição - Passo 3 - status de upload</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<?php include_once("../../cyi/analyticstracking.php") ?>
<a href="http://www.pgedf.ufpr.br/"><img src="http://www.pgedf.ufpr.br/imagens/HeaderPrincipal.jpg" width="1024" height="130" /></a>

<h2>Passo 3 - status de upload</h2>

<?php
include_once("modificar.php");
include_once("../../cyi/cyiver.php");
include_once("../../cyi/cyistr.php");
include_once("../../cyi/cyiarq.php");

if (!($_POST[candidato]=="")) {
print "Candidato: ";
print $_POST[candidato];
}

print "<pre>";
$nome = removeAcentos($_POST[candidato]);
$_FILES['upfile']=$_FILES['inscricao'];
carregarArquivo( $nome . '_inscricao', 'Ficha de Inscrição');
$_FILES['upfile']=$_FILES['artigo'];
carregarArquivo( $nome . '_artigo', 'Artigo Científico ou Comprovante de Aceite');
$_FILES['upfile']=$_FILES['carteira'];
carregarArquivo( $nome . '_carteira', 'Carteira de Trabalho');

print "</pre>";

print '<form enctype="multipart/form-data" action="passo2.php" method="post">';
print 'Para enviar algum documento faltante: ';
print '<input type="submit" value="Voltar" /> <input name="candidato" type="text" id="candidato" site="1" style="visibility:hidden" value=\'' . $nome . '\'>';
print '</form>';

print '<form enctype="multipart/form-data" action="passo4.php" method="post">';
print 'Se todos os documentos foram enviados, prossiga clicando em: ';
print '<input type="submit" value="Verificar" /> <input name="candidato" type="text" id="candidato" size="1" style="visibility:hidden" value=\'' . $nome . '\'>';

?>

</form>

<br />
Obs: 1) Caso queira reenviar novamente algum documento volte para o <a href="passo2.php">passo 2</a>.<br />
2) Se receber mensagem "Parâmetros inválidos": indica que a soma de todos os documentos ultrapassou 20MB. Volte ao passo 2 e tente enviar cada documento separadamente.<br />



</body>
</html>
