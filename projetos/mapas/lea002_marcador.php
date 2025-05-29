<!DOCTYPE html>
<html>
<head>
	<title>Quick Start - Leaflet</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" type="image/x-icon" href="docs/images/favicon.ico" />
    <link rel="stylesheet" href="leaflet/leaflet.css" crossorigin=""/>
    <script src="leaflet/leaflet.js" crossorigin=""></script>
</head>
<body>

<div tabindex="0" class="leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" 
id="map" style="outline: invert; border: 1px solid rgb(204, 204, 204); border-image: none; width: 800px; height: 600px; position: relative;"><div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(37px, 22px, 0px);"><div class="leaflet-pane leaflet-tile-pane"><div class="leaflet-layer " style="z-index: 1; opacity: 1;"><div class="leaflet-tile-container leaflet-zoom-animated" style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(121px, 9px, 0px);" alt="" src="http://b.tile.openstreetmap.org/13/4094/2723.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(377px, 9px, 0px);" alt="" src="http://c.tile.openstreetmap.org/13/4095/2723.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(121px, 265px, 0px);" alt="" src="http://c.tile.openstreetmap.org/13/4094/2724.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(377px, 265px, 0px);" alt="" src="http://a.tile.openstreetmap.org/13/4095/2724.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(121px, -247px, 0px);" alt="" src="http://a.tile.openstreetmap.org/13/4094/2722.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(377px, -247px, 0px);" alt="" src="http://b.tile.openstreetmap.org/13/4095/2722.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(-135px, 9px, 0px);" alt="" src="http://a.tile.openstreetmap.org/13/4093/2723.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(633px, 9px, 0px);" alt="" src="http://a.tile.openstreetmap.org/13/4096/2723.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(-135px, 265px, 0px);" alt="" src="http://b.tile.openstreetmap.org/13/4093/2724.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(633px, 265px, 0px);" alt="" src="http://b.tile.openstreetmap.org/13/4096/2724.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(121px, 521px, 0px);" alt="" src="http://a.tile.openstreetmap.org/13/4094/2725.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(377px, 521px, 0px);" alt="" src="http://b.tile.openstreetmap.org/13/4095/2725.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(-135px, -247px, 0px);" alt="" src="http://c.tile.openstreetmap.org/13/4093/2722.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(633px, -247px, 0px);" alt="" src="http://c.tile.openstreetmap.org/13/4096/2722.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(-135px, 521px, 0px);" alt="" src="http://c.tile.openstreetmap.org/13/4093/2725.png"><img class="leaflet-tile leaflet-tile-loaded" role="presentation" style="width: 256px; height: 256px; opacity: 1; transform: translate3d(633px, 521px, 0px);" alt="" src="http://c.tile.openstreetmap.org/13/4096/2725.png"></div></div></div><div class="leaflet-pane leaflet-shadow-pane"></div><div class="leaflet-pane leaflet-overlay-pane"><div class="leaflet-draw-guides"></div><svg xmlns="http://www.w3.org/2000/svg" class="leaflet-zoom-animated"
style="transform: translate3d(-117px, -82px, 0px);" pointer-events="none" viewBox="-117 -82 960 720" width="960" height="720"><g>
<path class="leaflet-interactive" fill="#3388ff" fill-opacity="0.2" fill-rule="evenodd" stroke="#3388ff" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.5" stroke-width="4" d="M 315 176 L 410 295 L 532 207 L 494 149 L 411 102 L 337 121 Z"></path></g></svg></div><div class="leaflet-pane leaflet-marker-pane"></div><div class="leaflet-pane leaflet-tooltip-pane"></div><div class="leaflet-pane leaflet-popup-pane"></div><div class="leaflet-proxy leaflet-zoom-animated" style="transform: translate3d(1048306px, 697357px, 0px) scale(4096);"></div></div><div class="leaflet-control-container"><div class="leaflet-top leaflet-left"><div class="leaflet-control-zoom leaflet-bar leaflet-control"><a title="Zoom in" class="leaflet-control-zoom-in" role="button" aria-label="Zoom in" href="#">+</a><a title="Zoom out" class="leaflet-control-zoom-out" role="button" aria-label="Zoom out" href="#">−</a></div><div class="leaflet-control-layers leaflet-control-layers-expanded leaflet-control" aria-haspopup="true"><a title="Layers" class="leaflet-control-layers-toggle" href="#"></a><form class="leaflet-control-layers-list"><div class="leaflet-control-layers-base"><label><div><input name="leaflet-base-layers" class="leaflet-control-layers-selector" type="radio" checked="checked"><span> osm</span></div></label><label><div><input name="leaflet-base-layers" class="leaflet-control-layers-selector" type="radio"><span> google</span></div></label></div><div class="leaflet-control-layers-separator"></div><div class="leaflet-control-layers-overlays"><label><div><input class="leaflet-control-layers-selector" type="checkbox" checked=""><span> drawlayer</span></div></label></div></form></div><div class="leaflet-draw leaflet-control"><div class="leaflet-draw-section"><div class="leaflet-draw-toolbar leaflet-bar leaflet-draw-toolbar-top"><a title="Draw a polyline" class="leaflet-draw-draw-polyline" href="#"><span class="sr-only">Draw a polyline</span></a><a title="Draw a polygon" class="leaflet-draw-draw-polygon" href="#"><span class="sr-only">Draw a polygon</span></a><a title="Draw a rectangle" class="leaflet-draw-draw-rectangle" href="#"><span class="sr-only">Draw a rectangle</span></a><a title="Draw a circle" class="leaflet-draw-draw-circle" href="#"><span class="sr-only">Draw a circle</span></a><a title="Draw a marker" class="leaflet-draw-draw-marker" href="#"><span class="sr-only">Draw a marker</span></a><a title="Draw a circlemarker" class="leaflet-draw-draw-circlemarker" href="#"><span class="sr-only">Draw a circlemarker</span></a></div><ul class="leaflet-draw-actions" style="top: 32px; display: none;"><li><a title="Finish drawing" href="#">Finish</a></li><li><a title="Delete last point drawn" href="#">Delete last point</a></li><li><a title="Cancel drawing" href="#">Cancel</a></li></ul></div><div class="leaflet-draw-section"><div class="leaflet-draw-toolbar leaflet-bar"><a title="Edit layers" class="leaflet-draw-edit-edit" href="#"><span class="sr-only">Edit layers</span></a><a title="Delete layers" class="leaflet-draw-edit-remove" href="#"><span class="sr-only">Delete layers</span></a></div><ul class="leaflet-draw-actions"></ul></div></div></div><div class="leaflet-top leaflet-right"></div><div class="leaflet-bottom leaflet-left"></div><div class="leaflet-bottom leaflet-right"><div class="leaflet-control-attribution leaflet-control"><a title="A JS library for interactive maps" href="http://leafletjs.com">Leaflet</a> | © <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors</div></div></div></div>

<table>
<?php
$servidorBD = "localhost";
$usuario = "usuarioAplicWeb";
$senha = "B@t@t1nh@";
$baseDeDados = "projetosufpr";

try { 
	
	// Tenta abrir uma conexão com o servidor MySQL com servidor, usuário, senha e base de dados informados acima
	// Usa o PHP data objects
	
    $conexaoDB = new PDO("mysql:host=$servidorBD;dbname=$baseDeDados", $usuario, $senha);
    
	// define o modo de erro para uma exceção
	
    $conexaoDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	// Define uma variável que contém uma chamada ao BD para recuperação de informações
	
    $sql = "SELECT Nome, Latitude, Longitude FROM Curso";
	


$stmt = $conexaoDB->prepare( $sql );
$stmt->execute(array("%$query%"));
// iterating over a statement
foreach($stmt as $row) {
    echo '<tr><td>'. $row['Nome'] . '<td/><td>' . '</td><td>'. $row['Latitude'] . '<td/><td>' . $row['Longitude'] . "</td></tr>\r\n";
	$nome = $row['Nome'];
	$latitude = $row['Latitude'];
	$longitude = $row['Longitude'];
}
	
    }
catch(PDOException $e)
    {
    echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
    }

$conn = null;
?>
</table>

<script  type="text/javascript">

// latitude e longitude
	var mymap = L.map('map').setView([-25.444906, -49.238396], 20);

// criar e mostrar o mapa
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

// colocar o marcador no local desejado 
	L.marker([<?php Print($latitude); ?>, <?php Print($longitude); ?>]).addTo(mymap)
		.bindPopup("<b><?php Print($nome); ?></b>").openPopup();


</script>



</body>
</html>
