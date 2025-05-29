<?php
header('Content-Type: text/html; charset=utf-8');
?>
<head>
<title>Inscrição - Reimpressão</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body>
<?php include_once("../../cyi/analyticstracking.php") ?>
<a href="http://www.pgedf.ufpr.br/"><img src="http://www.pgedf.ufpr.br/imagens/HeaderPrincipal.jpg" width="1024" height="130" /></a>

<h2>Impressão comprovante de solicitação</h2>

<form enctype="multipart/form-data" action="passo5.php" method="post">
<b>Candidato</b> (não abrevie o seu nome, use somente letras minúsculas e espaço): <input name="candidato" type="text" id="candidato" required  size="50"> <br /><br />

<input type="submit" value="Continuar" />
</form>

 
 
<br />

</body>