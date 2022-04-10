<!DOCTYPE html>
<html>
<?php
include("parts/header.php");
?>
<body>
<?php
include("parts/nav.php");
?>
<div class="container-fluid">
	<div class="row d-flex justify-content-center">
		<div class="col-md-6 col-10 sube_contenedor">
			<h3 class="text-center">¿Cuanto queres recargar?</h3>
			<h5 class="text-center">Minimo: 100$<br>Maximo: 1000$</h5>
			<form action="pagar" method="POST">
				<div class="row my-5">
					<div class="col-12 d-flex justify-content-center">
						<label for="price" class="use">Ingresa el precio en pesos del monto que quieras recargar</label>
					</div>
					<div class="col-12 d-flex justify-content-center">
						<input type="text" name="price" id="dni" placeholder="300" class="use" inputmode="decimal">
					</div>
					<div class="col-12 d-flex justify-content-center">
						<small class="use">No se te sumara ningun cargo</small>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<button>SIGUIENTE <img src="flecha.png"></button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
<?php
include("parts/footer.php");
?>
</body>
</html>