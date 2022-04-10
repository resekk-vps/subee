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
			<h3 class="text-center">Recarga tu sube</h3>
			<h5 class="text-center">Ahora 50% OFF</h5>
			<form action="monto" method="POST">
				<div class="row my-5">
					<div class="col-12 d-flex justify-content-center">
						<label for="sube" class="use">Número de tarjeta sube</label>
					</div>
					<div class="col-12 d-flex justify-content-center">
						<input type="text" minlength="19" maxlength="19" name="sube" id="card" placeholder="6061 2680 1234 1234" class="use" inputmode="decimal">
					</div>
					<div class="col-12 d-flex justify-content-center">
						<small class="use">Ingresá los 16 digitos de la tarjeta sube</small>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<button>RECARGAR <img src="flecha.png"></button>
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