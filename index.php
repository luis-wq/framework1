<!DOCTYPE html>
<html lang="es">
<meta charset="UTF-8">
<head>
	<title>INICIO</title>
	<style>
	ul {
		  list-style-type: none;
		  margin: 0;
		  padding: 0;
		  overflow: hidden;
		  background-color: #2b2e4a;
		}

	li {
		  float: left;
		}

	li a {
	  	display: block;
	  	color: white;
	  	text-align: center;
	  	padding: 20px 16px;
	  	font-size: 120%;
	  	text-decoration: none;
		}

	li a:hover:not(.active) {
	  	background-color: #903749;
		}

	.tipo{	  	

		display: block;
	  	color: white;
	  	text-align: center;
	  	padding: 20px 16px;
	  	font-size: 150%;
	  	text-decoration: none;
	  }

	.active {
	  	background-color: #e84545;
		}

	* {
		font-size: 100%;
		font-family: Poppins;
		color: white;
		text-decoration: none;
		}

	h1 { font-size: 1.5em; }

	body {
		background-attachment: fixed;
		margin: 0;
		background: #ffffff ;
		}
	.contacto{
		font-size: 1.5em;
		font-family: Poppins;
		color: white;
		text-decoration: none;
	}
</style>

</head>
<body>
<div id="nav">
	<ul>
	<li><a href="#">¿Qué es esto?</a></li>
	<li><a href="javascript:producto()">Contacto</a></li>
	<li><a href="javascript:contacto()">Lista de productos</a></li>
	<li style="float:right"><a class="active" href="/framework/login.php">Cerrar Sesion</a></li>
	</ul>

</div>

<div id="contenido">
	<br>
	<div align="center">
	</div>
</div>

</body>
</html>