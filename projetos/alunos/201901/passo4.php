<?php
header('Content-Type: text/html; charset=utf-8');
?>
<html>
<head>
<title>Inscrição - Passo 4 - verificação dos documentos</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
<?php include_once("../../cyi/analyticstracking.php") ?>
<a href="http://www.pgedf.ufpr.br/"><img src="http://www.pgedf.ufpr.br/imagens/HeaderPrincipal.jpg" width="1024" height="130" /></a>

<h2>Passo 4 - Verifique se arquivos estão corretos (baixe e abra o documento)</h2>


<?php include_once("../../cyi/cyistr.php");
if (!($_POST[candidato]) || $_POST[candidato] =="") {
	header('Location: http://www.cedsmi.ufpr.br/celsoishida/pesquisa/');
}

print "<pre>";
$nome = removeAcentos($_POST[candidato]);
print "Candidato: " . $nome. ".";
$conta = linkArquivo2( $nome . '_inscricao', "Ficha de Inscrição");
$somador = $conta;
$conta = linkArquivo2( $nome . '_artigo', "Artigo Científico ou Comprovante de Aceite");
$somador = $somador + $conta ;
$conta = linkArquivo2( $nome . '_carteira', "Carteira de Trabalho");
$somador = $somador + $conta ;

if ($somador >= 3) {
	print '<form enctype="multipart/form-data" action="passo5.php" method="post">';
	print '<br /><br />Se todos os documentos foram visualizados corretamente, clique em \'Continuar\' <input name="candidato" type="text" id="candidato" size="50" style="visibility:hidden" value=\'' . $nome . '\'><br />';
	print '<br /><input type="submit" value="Continuar" />';
	print '</form>';
} else {
	print '<form enctype="multipart/form-data" action="passo2.php" method="post">';
	print '<br /><br />Volte para enviar os documentos faltantes <input type="submit" value="Voltar passo 2" /> <input name="candidato" type="text" id="candidato" size="50" style="visibility:hidden" value=\'' . $_POST[candidato] . '\'><br />';
	print '<br />';
	print '</form>';
}

print "</pre>";

?>

<br />
Obs: 1) Se receber a mensagem: "Not Found" significa que o documento não foi carregado corretamente.<br />

2) Se, para todos os links, conseguir baixar o arquivo e abrir o mesmo, este foi enviado corretamente.<br />
3) É de responsabilidade do candidato o correto envio dos documentos nos campos correspondentes (exemplo: o currículo deve ter sido informado corretamente no campo Currículo).<br />
4) Se algum documento for informado incorretamente, ou documento fraudado, a solicitação será cancelada.<br />

</body>
</html>
