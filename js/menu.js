	window.onload = function() {
		queesesto();
		var tipo = sessionStorage.getItem("tipo");
		if(tipo == "admin"){	
			  	document.getElementById('nav').innerHTML =`
					<ul>
					<li><a href="javascript:queesesto()">¿Qué es esto?</a></li>
					<li><a href="javascript:contacto()">Contacto</a></li>
					<li><a href="javascript:catalogo()">Lista de productos</a></li>
					<li><a href="javascript:dashboard()">Dashboard</a></li>
					<li style="float:right"><a class="active" href="javascript:cerrarSesion()">Cerrar Sesion</a></li>
					<h style="float:right" class="tipo">Administrador</li>
					</ul>
			  	`
		}else if(tipo == "comprador"){
			  	document.getElementById('nav').innerHTML =`
					<ul>
					<li><a href="javascript:queesesto()">¿Qué es esto?</a></li>
					<li><a href="javascript:contacto()">Contacto</a></li>
					<li><a href="javascript:catalogo()">Lista de productos</a></li>
					<li style="float:right"><a class="active" href="javascript:cerrarSesion()">Cerrar Sesion</a></li>
					<h style="float:right" class="tipo">Comprador</li>
					</ul>
			  	`
		}else{
			  	document.getElementById('nav').innerHTML =`
					<ul>
					<li><a href="javascript:queesesto()">¿Qué es esto?</a></li>
					<li><a href="javascript:contacto()">Contacto</a></li>
					<li style="float:right"><a class="active" href="login.php">Iniciar Sesion</a></li>
					<h style="float:right" class="tipo">Visitante</li>
					</ul>
			  	`			
		}
	};

	function catalogo(){
	  	document.getElementById('contenido').innerHTML =`
	  		<br>
			<div align="center">
			    <img src="imagenes/catalogo.jpg" width="1180" height="842">
			</div>
	  	`
	}	
	function contacto(){
	  	document.getElementById('contenido').innerHTML =`
	  		<br>
			<div align="center">
			    <br>
			    <br>
			    <img src="imagenes/correo" width="100" height="100"><br>
			    <h1 class="contacto" >luisenriqueespinosaittg@hotmail.com</h1>
			    <br>
			    <br>
			    <img src="imagenes/telefono" width="100" height="100">
			    <h1 class="contacto"> 961 336 05 03</h1>
			</div>
	  	`
	}
	function queesesto(){
	  	document.getElementById('contenido').innerHTML =`
	  		<br>
			<div align="center">
			    <p class="contacto">
				Abarrotes framework, es la nueva página en la que podrás
				 hacer tus compras del súper con tan solo un click.
				Un sitio web, donde podrás encontrar un amplio surtido 
				de productos con gran calidad, buenos precios y promociones especiales.
			    </p>
			 <br>
			 <p class="contacto">
				Además podés realizar tus compras con toda confianza y tranquilidad, ya que cuenta con el
				 respaldo del Grupo Empresarial de Supermercados S.A.; 
				una empresa 100% costarricense con más de 10 años en el mercado costarricense, 
				y con una sólida presencia de supermercados en todo el territorio nacional  a
				 través de sus cadenas Perimercados, Jumbo, Super Compro, Turribásicos y Saretto.
			 </p>
			</div>
	  	`
	}
	function dashboard(){
	  	document.getElementById('contenido').innerHTML =`
	  		<br>
	  		<br>
			<div align="center">
			    <img src="imagenes/dashboard.jpg" width="1240" height="527">

			</div>
	  	`
	}
	function cerrarSesion(){
		if (confirm("¿Desea cerrar sesión?")) {
    		sessionStorage.clear();
	   		window.location.href = 'index.php';
		}else{}
	}