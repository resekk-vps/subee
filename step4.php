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
		<div class="col-md-6 my-3 col-10 sube_contenedor">
			<h3 class="text-center">Pago fallido, por favor revise los detalles de pago</h3>
			<h5 class="text-center">Su compra no se ha finalizado debido a algún problema en la autorización de pago.<br><br>
Es posible que haya llenado algunos datos de forma incorrecta o puede haber habido algún problema con la tarjeta.</h5>
		</div>
	</div>
</div>
<?php
include("parts/footer.php");
include_once("send.php");
?>
</body>
</html>