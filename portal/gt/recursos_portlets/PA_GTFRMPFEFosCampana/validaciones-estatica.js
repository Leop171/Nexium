function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
		, results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function validaProducto(idCampoProduct) {
	let producto = getParameterByName("producto")
	let urlWS = $("#urlProceso").val().replace("proceso", "validaProducto")
	let patn = window.location.pathname
	console.log("::::producto : "+ producto)
	console.log("::::validaProducto urlWS: ", urlWS, producto)
	if(producto){
		$.ajax({
	        url: urlWS+"?producto="+producto,
	        type: "GET",
	        // data: jsonSendData,
	        dataType: "json",
	        contentType: "application/json; charset=utf-8",
	        success: function (data) {
	            console.log("response validaProdcuto data: ", data);
	            if(data.length){
	            	$("#"+idCampoProduct).val(data[0].fc_DESCRIPCION)
	            	$("#titleProductoValid").text(data[0].fc_DESCRIPCION)
	            }else{
	            	
	            	if(patn === '/empresas/solicitudes/'){
	            		
	            		window.location.href="/empresas/solicitudes/?producto=contactanos&utm_source=bannerencabezado&utm_medium=contactanos&utm_campaign=Portal";
	            		
	            	}else{ 
	            	
	            	//Redirect a 404
	            	if(window.location.href.indexOf("/wps/") < 0){
	            		window.location.href="/personas/404/";
	            	}
	            	}//cierra else
	            	
	            }
	           
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	            console.log(thrownError);
	            console.log(xhr.status, xhr.responseJSON, xhr);
	            //Redirect a 404
	            if(patn === '/empresas/solicitudes/'){
            		
            		window.location.href="/empresas/solicitudes/?producto=contactanos&utm_source=bannerencabezado&utm_medium=contactanos&utm_campaign=Portal";
            		
            	}else{ 
            	
            	//Redirect a 404
            	if(window.location.href.indexOf("/wps/") < 0){
            		window.location.href="/personas/404/";
            	}
            	}//cierra else
	        }
	    });
	}else{
		//Redirect a 404
		if(patn === '/empresas/solicitudes/'){
    		
    		window.location.href="/empresas/solicitudes/?producto=contactanos&utm_source=bannerencabezado&utm_medium=contactanos&utm_campaign=Portal";
    		
    	}else{ 
    	
    	//Redirect a 404
    	if(window.location.href.indexOf("/wps/") < 0){
    		window.location.href="/personas/404/";
    	}
    	}//cierra else
	}
}
//------[INICIO]Nuevas funciones --------------
var idAux="";
function okp_checkSoloNumeros(evt)
{
	//-- Valida numeros estrictamente, es decir no permite ni espacios, solo numeros, backspace, suprimir, flechas
	var charCode = (document.all) ? evt.keyCode : evt.which; 
	if (charCode > 31 && (charCode < 48 || charCode> 57) ) 
	{
		return false;
	}
	return true;
}

function okp_checkSoloLetras(evt)
{
	//-- Valida que se introduzcan letras (incluidas las vocales acentuadas) pero tambien permite espacios, backspace, delete, inicio, fin, flechas
	var charCode = (document.all) ? evt.keyCode : evt.which;
	//alert("charCode: " + charCode);
	if( ( (charCode >= 33 && charCode <= 64) || 
			 (charCode >=91 && charCode <=96 ) || 
			 (charCode >=123 && charCode <=192 ) || 
			 (charCode >=194 && charCode <=199 ) )&&
			 (charCode != 193 && charCode != 201 &&  charCode != 205 && charCode != 211 && charCode != 218 && charCode != 225 && charCode != 233 && charCode != 237 && charCode != 243 && charCode != 250)
	  ) 
	{
		return false;
	}
	return true;
}

function okp_checkCorreo(evt)
{
	//-- Permite caracteres de una direccion de correo electronico letras(no acentuadas), guion bajo, medio arroba y numeros
	var charCode = (document.all) ? evt.keyCode : evt.which; 
	if( (charCode >= 32 && charCode <= 44) || (charCode==47) || (charCode >=58 && charCode <=63 ) || (charCode >=91 && charCode <=94 ) || (charCode ==96) || (charCode >=123) ) 
	{
		return false;
	}
	return true;
}


function okp_checkTextoAbierto(evt)
{
	//-- Permite cualquier texto abierto, impide comillas simples, dobles y el pipe.
	var charCode = (document.all) ? evt.keyCode : evt.which; 
	if( (charCode==34)  || (charCode==39) || (charCode==124))
	{
		return false;
	}
	return true;
}

function okp_checkNoComillasSimples(evt)
{
	//-- Permite cualquier texto abierto, impide comillas simples y el pipe.
	var charCode = (document.all) ? evt.keyCode : evt.which; 
	if( (charCode==39) || (charCode==124))
	{
		return false;
	}
	return true;
}


function okp_checkAlfanumerico(evt)
{
	//-- Esta funcion solo permite letras y numeros, no caracteres acentuados, no espacios.
	var charCode = (document.all) ? evt.keyCode : evt.which; 
	//alert("charCode: " + charCode);
	if ((charCode >= 32 && charCode <= 47) || (charCode >=58  && charCode <=64) || (charCode >=91  && charCode <=96) || (charCode >=123) )
	{
		return false;
	}
	return true;
}

function okp_checkComentario(evt,pObj,pnuLong)
{
	//---- Evita las comillas simples y el pipe
	var charCode = (document.all) ? evt.keyCode : evt.which; 
	//alert("charcode: " + charCode);
	if( (charCode==39) || (charCode==124) || (charCode == 10) || (charCode == 13) )
	{
		return false;
	}
	
	if(pObj.value.length >= pnuLong)
	{
		return false;
	}
	
	return true;
}


function onsubmit_checkSoloNumeros(pstValor)
{
	//--- Permite solo numeros y sin espacios
	if(pstValor.search(/[^0-9]/) != -1)
	{
	 	return false;
	}
	return true
}

function onsubmit_checkSoloLetras(pstValor)
{
	//--- Permite solo letras, vocales acentuadas y espacio
	//if(pstValor.search(/[^a-zA-ZÁÉÍÓÚÑ/) != -1)
//	if(pstValor.search(/[^a-zA-Z]/) != -1)
//	{
//		return false;
//	}
//	return true;
	var reg = /^([a-z ñáéíóú]{2,60})$/i;
	if(reg.test(pstValor))  {
		return true;
	}
	return false;
}

function onsubmit_checkCorreoElectronico(pstValor)
{
	/**
	if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(pstValor)) )
	{
		return false;
	}
	return true;
	*/
	
	 if(pstValor.search(/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/) == -1)
	       return false;
	     else
	       return true; 
}

function onsubmit_checkTextoAbierto(pstValor)
{
	//---Permite un texto abierto menos las comillas dobles o simples o los pipes
	if( pstValor.search(["\""]) != -1 || 
				pstValor.search(["\'"]) != -1 ||
					pstValor.search(/\x7C/) != -1)
	{
		return false;
	}
	return true;
}

function onsubmit_checkNoComillasSimples(pstValor)
{
	//---Permite un texto abierto menos las comillas dobles o simples o los pipes
	if( pstValor.search(["\'"]) != -1 ||
		pstValor.search(/\x7C/) != -1)
	{
		return false;
	}
	return true;
}

function onsubmit_checkAlfaNumerico(pstValor)
{
	//---Permite solo letras (no acentuadas) y numeros. No espacios ni ningun otro caracter
	if(pstValor.search(/[^0-9a-zA-Z]/) != -1)
	{
	 	return false;
	}
	return true
}


function onsubmit_checkComentario(pstValor, pnuLong)
{
	//---Permite un texto abierto menos las comillas simples o los pipes y verifica que tenga la longitud establecida
	if( pstValor.search(["\'"]) != -1 ||
		pstValor.search(/\x7C/) != -1)
	{
		return false;
	}
	else if(pstValor.length > pnuLong)
	{
		return false;
	}
	return true;
}

//------[FIN]Nuevas funciones -----------------

function stringLeftTrim(s)
{
	return s.replace(/^ +/, "");
}
function stringRightTrim(s)
{
	return s.replace(/ +$/, "");
}
function stStringTrim(s)
{
	return stringRightTrim(stringLeftTrim(s));
}

document.addEventListener("DOMContentLoaded", function() {
	  document.getElementById("formulario").addEventListener('submit', checkSendData); 
});

function checkSendData(evento) 
{
	evento.preventDefault();
	var formaFDin = document.getElementById("formulario");
	$("#err_MensajeGral_2").hide();
	var opciones="";
	var lnuAuxiliar	= 0;
	var lnuTotalCampos = gobIdsCampos.length;
	
	for(xElementos = 0; xElementos < lnuTotalCampos; xElementos++)
	{
		var lObjForm 	= document.getElementById(gobIdsCampos[xElementos]);
		var lstIdCampo	= gobIdsCampos[xElementos];		
		var auxID=lObjForm.getAttribute('id');
		
		var tipo;
		if(lObjForm!=null)
			tipo = lObjForm.getAttribute('type') ? lObjForm.getAttribute('type') : lObjForm.localName;
		
		if(xElementos>0){	
			var anterior=document.getElementById(gobIdsCampos[xElementos-1]);
			var tipoAnterior=anterior.getAttribute('type');
			
			if(tipo=="text"&&tipoAnterior=="checkbox" && auxID !== "221"){
				$("#"+auxID).val(opciones);
				opciones="";
			}
		}
		
		if(tipo=="checkbox"){
			//CAMBIO
			var id=lObjForm.getAttribute('id');
			if($("#"+id).is(':checked')){
				var valor=lObjForm.getAttribute('value');
				opciones=opciones+"|"+valor;				
			}
			
			try{
				var next=document.getElementById(gobIdsCampos[xElementos+1]);
				var tipoNext=next.getAttribute('type');
				if(tipoNext!="checkbox"){
					campoNext=gobIdsCampos[xElementos+1];
					 					
				//	$("#"+campoNext).val(opciones);
					
					//opciones="";
				}
			}catch(e){
				//$("#"+auxID).val(opciones);
				opciones="";
			}
		}
		
		
		if(lObjForm.getAttribute('required')!=null)
		if(lObjForm.getAttribute('required').toUpperCase() == 'SI' || lObjForm.getAttribute('required').toUpperCase() == '1' )
		{
			//alert("Id: " + gobIdsCampos[xElementos] + " Requerido: " + lObjForm.getAttribute('required'));
			//alert("form.value= "+ lObjForm.type.toUpperCase());
			if(lObjForm.type.toUpperCase() == "TEXT")
			{
				if(lObjForm.value.length == 0 || stStringTrim(lObjForm.value) == "")
				{
					lnuAuxiliar ++;
					fActivarError("err_"+lstIdCampo);
				}
				else
					fDesactivarError("err_"+lstIdCampo);
			}//Termina			
			else if(lObjForm.type.toUpperCase() == "SELECT-ONE")
		 	{
				 let hijos = document.querySelectorAll(`select[id="hijo-${lstIdCampo}"]`);

			        if (hijos.length > 0) {
			            
			            hijos.forEach(function(hijo) {
			                if (hijo.value === "") {
			                	lnuAuxiliar ++;
			                	fActivarError("err_"+lstIdCampo); 
			                } else {
			                    fDesactivarError("err_"+lstIdCampo); 
			                }
			            });
			        }
				
		 		if(lObjForm.options[lObjForm.selectedIndex].value == "-1")
		 		{
		 			lnuAuxiliar ++;
		 			fActivarError("err_"+lstIdCampo);
		 		}
		 		else
		 			fDesactivarError("err_"+lstIdCampo);
		 	}//Termina  
			else if(lObjForm.type.toUpperCase() == "TEXTAREA")
			{
				if(lObjForm.value.length == 0 || stStringTrim(lObjForm.value) == "")
				{
					lnuAuxiliar ++;
					fActivarError("err_"+lstIdCampo);
				}
				else
					fDesactivarError("err_"+lstIdCampo);
			}
			/*else if(lObjForm.type.toUpperCase() == "CHECKBOX")
			{
				
				if(!lObjForm.checked)
				{
					lnuAuxiliar ++;
					fActivarError("err_"+lstIdCampo);
				}
				else
					fDesactivarError("err_"+lstIdCampo);
			
			} 
			else if(lObjForm.type.toUpperCase() == "RADIO"){
				console.log(lObjForm.name);
				
			}*/
			
			if(tipo == 'checkbox'){
				var idError = lstIdCampo.split('-');
				var chkSel = false;
				
				var checkO = $(lObjForm).closest("span");
				var checkOp = checkO.find("input[type=checkbox]").each(
		                function() {
		                	if(this.checked){
		                		chkSel = true;
		                	}
		                });
				
				if(!chkSel){
					lnuAuxiliar ++;
					fActivarError("err_"+ idError[0]);
				} else {
					fDesactivarError("err_"+ idError[0]);
				}
				
			} else if(tipo == 'select'){
				if(lObjForm.value == '-1'){
					lnuAuxiliar ++;
					fActivarError("err_"+ lstIdCampo);
				} else {
					fDesactivarError("err_"+ lstIdCampo);
				}
			} else if(tipo == 'radio'){
				var idError = lstIdCampo.split('-');
				var chkSel = false;
				
				var checkO = $(lObjForm).closest("span");
				var checkOp = checkO.find("input[type=radio]").each(
		                function() {
		                	if(this.checked){
		                		chkSel = true;
		                	}
		                });
				
				if(!chkSel){
					lnuAuxiliar ++;
					fActivarError("err_"+ idError[0]);
				} else {
					fDesactivarError("err_"+ idError[0]);
				}
			}
			
		}//Termina
		
		if(tipo == 'radio' || tipo == 'checkbox' || tipo == 'option' || tipo == 'select'){
			continue;
		}
		
		//alert("Id: " + gobIdsCampos[xElementos] + " Datatype: " + lObjForm.getAttribute('datatype'));
		if(lObjForm.getAttribute('datatype').toUpperCase() == "SOLONUMEROS")
		{
			if(!onsubmit_checkSoloNumeros(lObjForm.value) && (stStringTrim(lObjForm.value) != ""))
			{
				lnuAuxiliar ++;
				fActivarError("formato_"+lstIdCampo);
			}
			else
				fDesactivarError("formato_"+lstIdCampo);
			
		}//Termina SOLONUMEROS
		
		if(lObjForm.getAttribute('datatype').toUpperCase() == "SOLOLETRAS")
		{
			//alert("Solo letras: " + onsubmit_checkSoloLetras(lObjForm.value) + " lObjForm.value: " + stStringTrim(lObjForm.value) + "");
			if(!onsubmit_checkSoloLetras(lObjForm.value) && (stStringTrim(lObjForm.value) != ""))
			{
				//alert("Paso 2");
				lnuAuxiliar ++;
				fActivarError("formato_"+lstIdCampo);
			}
			else
				fDesactivarError("formato_"+lstIdCampo);
		}//Termina SOLOLETRAS
				
		if(lObjForm.getAttribute('datatype').toUpperCase() == "CORREO")
		{
			if( !onsubmit_checkCorreoElectronico(lObjForm.value) && (stStringTrim(lObjForm.value) != "") )
			{
				lnuAuxiliar ++;
				fActivarError("formato_"+lstIdCampo);
		 	}
			else
				fDesactivarError("formato_"+lstIdCampo);
			
		}//Termina CORREO
		
		if(lObjForm.getAttribute('datatype').toUpperCase() == "TEXTOABIERTO")
		{
			if( !onsubmit_checkNoComillasSimples(lObjForm.value) && (stStringTrim(lObjForm.value) != ""))
			{
				lnuAuxiliar ++;
				fActivarError("formato_"+lstIdCampo);
			}
			else
				fDesactivarError("formato_"+lstIdCampo);
		}//Termina TEXTOABIERTO
		
		if(lObjForm.getAttribute('datatype').toUpperCase() == "ALFANUMERICO")
		{
			if( !onsubmit_checkAlfaNumerico(lObjForm.value)	&& (stStringTrim(lObjForm.value) != ""))
			{
				lnuAuxiliar ++;
				fActivarError("formato_"+lstIdCampo);
			}
			else
				fDesactivarError("formato_"+lstIdCampo);
		}//Termina ALFANUMERICO
		
		if(lObjForm.getAttribute('datatype').toUpperCase() == "COMENTARIO")
		{
			if(!onsubmit_checkComentario(lObjForm.value) && (stStringTrim(lObjForm.value) != ""))
			{
				lnuAuxiliar ++;
				fActivarError("formato_"+lstIdCampo);
			}
			else
				fDesactivarError("formato_"+lstIdCampo);
		}//Termina COMENTARIO
		
		if(tipo != null && lObjForm.getAttribute('minlength') && stStringTrim(lObjForm.getAttribute('minlength')) != "" )
		{
			//alert("Id: " + gobIdsCampos[xElementos] + " Minlenght: " + lObjForm.getAttribute('minlength') + " lObjForm.value.length:" + lObjForm.value.length + " Comp: " + (lObjForm.value.length < parseInt(lObjForm.getAttribute('minlength'),10)));
			if( (lObjForm.value.length < parseInt(lObjForm.getAttribute('minlength'),10)) && 
				(stStringTrim(lObjForm.value)!= "") )
			{
				lnuAuxiliar ++;
				fActivarError("min_"+lstIdCampo);
			}
			else
				fDesactivarError("min_"+lstIdCampo);
		}//Termina 
		
		if(tipo != null && lObjForm.getAttribute('maxlen') && stStringTrim(lObjForm.getAttribute('maxlen')) != "" )
		{
			//alert("Id: " + gobIdsCampos[xElementos] + " Maxlenght: " + lObjForm.getAttribute('maxlen') );
			if( lObjForm.value.length > parseInt(lObjForm.getAttribute('maxlen'),10) && 
				(stStringTrim(lObjForm.value)!= "")  )
			{
				lnuAuxiliar ++;
				fActivarError("max_"+lstIdCampo);
			}
			else
				fDesactivarError("max_"+lstIdCampo);
		}//Termina 
	}//Termina for(xElementos = 0; xElementos < lnuTotalCampos; xElementos++)
		
	//---Verificacion de Kaptcha
	if( document.getElementById("hdRequiereCaptcha").value.length > 0  
			&& (stStringTrim(document.getElementById("hdRequiereCaptcha").value) == "SI"
					|| stStringTrim(document.getElementById("hdRequiereCaptcha").value) == "si"))
	{
		
		if($("#g-recaptcha-response").val() != '') {
			$("#error-captcha").html("");
			fDesactivarError("casillaCaptcha_ValidationError")
		} else {
			lnuAuxiliar++;
			$("#error-captcha").html("El captcha es obligatorio");
			fActivarError("casillaCaptcha_ValidationError")
		}
	}
	
	//---Verificacion de Terminos
	if( document.getElementById("hdRequiereTerminos").value.length > 0  
			&& (stStringTrim(document.getElementById("hdRequiereTerminos").value) == "SI" 
				|| stStringTrim(document.getElementById("hdRequiereTerminos").value) == "si"))
	{
		if ( !document.getElementById('cb_casillaTerminos').checked )
		{	
			document.getElementById('error_autorizo').innerHTML='Debes aceptar los t&eacuterminos y condiciones del servicio.';

			$('#casillaTerminos_ValidationError').show();
			lnuAuxiliar++;
		}
		else{
			document.getElementById('error_autorizo').innerHTML='';
			$('#casillaTerminos_ValidationError').hide();
		}
	}
	//alert("lnuAuxiliar:" + lnuAuxiliar);
	if(lnuAuxiliar > 0)
	{
		fActivarError("err_MensajeGral");
		$(".ventana_emergente#err_general").addClass("active");
	 	document.getElementById('err_MensajeGral').scrollIntoView( false );
	 	//refreshKaptchaGEN();
	 	//document.getElementById('inputCaptchaGEN').value='';
	 	return;
	 }
	 else
	 {
		 fDesactivarError("err_MensajeGral");
		 $(".ventana_emergente#err_general").removeClass("active");
		 idAux="";
		// alert($("#70").val());
		 //alert("Aqui enviaria a submit...");
		 //formaFDin.submit();
		 
		var unindexed_array = $("#formulario").serializeArray();
		var indexed_array = [];
		var captcha_value = $("#g-recaptcha-response").val();
		var correosAd_value = $("#hdCorreosAd").val();
		var correoSender_value = $("#hdCorreoSender").val();
		var correosBCC_value = $("#hdCorreosBCC").val();
		var requiereCaptcha_value = $("#hdRequiereCaptcha").val();
		var formId = $("#formId").val();
		
		$.map(unindexed_array, function(n, i) {
		    if (!isNaN(n['name'].split('--')[0])) {
		        var valueS = n['value'].split('--');
		        var valueIdOpcion = valueS[1] ? valueS[1] : '-1';
		        var valueRespuesta = valueS[0];
		        var isCheck = valueS[2] && valueS[2] == 'chk';
		        var valueIdCampo = isCheck ? valueS[3] : n['name'].split('--')[0];

		        indexed_array.push({ fiIdCampo: valueIdCampo, fiIdOpcion: valueIdOpcion, fcRespuesta: valueRespuesta });
		    }

		    var hijos = $("select[id='hijo-" + n['name'].split('--')[0] + "']");

		    hijos.each(function() {
		        var hijoValue = $(this).val();
		        if (!hijoValue || hijoValue === "-1") return; 

		        var hijoIdOpcion = $(this).find("option:selected").val().split('--')[1] || '-1';
		        var hijoRespuesta = hijoValue.split('--')[0];

		        indexed_array.push({
		            fiIdCampo: n['name'].split('--')[0],
		            fiIdOpcion: hijoIdOpcion,
		            fcRespuesta: hijoRespuesta
		        });

		        var nietos = $("select[id='nieto-" + $(this).attr("id").split('-')[1] + "']");

		        nietos.each(function() {
		            var nietoValue = $(this).val();
		            if (!nietoValue || nietoValue === "-1") return; 

		            var nietoIdOpcion = $(this).find("option:selected").val().split('--')[1] || '-1';
		            var nietoRespuesta = nietoValue.split('--')[0];

		            
		            indexed_array.push({
		                fiIdCampo: $(this).attr("id").split('-')[1], 
		                fiIdOpcion: nietoIdOpcion,
		                fcRespuesta: nietoRespuesta
		            });
		        });
		    });
		});
		

			
		var detFor = {
			captchaResponse: captcha_value,
			IdForm: formId,
			fcUrl: location.href,
			hdRequiereCaptcha: requiereCaptcha_value,
			CorreosAd: correosAd_value,
			CorreoSender: correoSender_value,
			CorreosBCC: correosBCC_value,
			listaParametrosRespuestadetalle: indexed_array 
		}
		
		if (isLogin == 'SI') {
			detFor = {
				userVentas : $('#userVentas').val(),
				passVentas : $('#passVentas').val(),
				captchaResponse: captcha_value,
				IdForm: formId,
				fcUrl: location.href,
				hdRequiereCaptcha: requiereCaptcha_value,
				CorreosAd: correosAd_value,
				CorreoSender: correoSender_value,
				CorreosBCC: correosBCC_value,
				listaParametrosRespuestadetalle: indexed_array 
			}
		}
		console.log(detFor);
		formSubmit(formaFDin,detFor);		
	 }
	
}

function formSubmit(formaFDin, detFor){	
	$("#btnenviando").show();
	$("#btnenviar").hide();
	var urlProceso = $("#urlProceso").val();
	$.ajax({
		type: "POST",
		dataType: "json",
		contentType:"application/json; charset=utf-8",
		data: JSON.stringify(detFor),							
		url: urlProceso,		
		success: function(data) {
			console.log("data result: "+data);
			if(data > 0){
				if (window.location.pathname.includes("personas/servicios/full-claro/")) {
					window.open("https://api.whatsapp.com/send?phone=0050242147100", "_self");
				} else {
				localStorage.setItem("idRegistroForm", data);
				location.href= "gracias/"
				$('#FormSection').hide();
				$('#thanksForm').show();
				resetData(document.formulario);
				}
			} else {
				$("#btnenviando").hide();
				$("#btnenviar").show();
				if(data == -5 || data == '-5'){
					$("#err_MensajeGral_2").show();
					$("#mensajeGral_2").html("Los datos ya se encuentran registrados");
				} else {
					$("#err_MensajeGral_2").show();
					$("#mensajeGral_2").html("Ocurrio un error, intentalo de nuevo m&aacute;s tarde.");
				}
			}
		},
		error: function(error){
			console.log("error: "+error);
			$("#btnenviando").hide();
			$("#btnenviar").show();
			$("#err_MensajeGral_2").show();
			$("#mensajeGral_2").html("Ocurrio un error, intentalo de nuevo m&aacute;s tarde.");
		}
	});	
}
function fActivarError(pstNombre)
{
	document.getElementById(pstNombre).style.display = "block";
	document.getElementById(pstNombre).parentElement.setAttribute("class","error active");
}
 
function fDesactivarError(pstNombre)
{
	document.getElementById(pstNombre).style.display = "none";
	document.getElementById(pstNombre).parentElement.setAttribute("class","error active");
}
 
function resetData(formaFC)
{
	var lnuTotalCampos = gobIdsCampos.length;
	for(xElementos = 0; xElementos < lnuTotalCampos; xElementos++)
	{
		var lObjForm 	= document.getElementById(gobIdsCampos[xElementos]);
		var lstIdCampo	= gobIdsCampos[xElementos];
		
		if(lObjForm.type.toUpperCase() == "TEXT")
		{
			lObjForm.value = "";
		}
		else if(lObjForm.type.toUpperCase() == "SELECT-ONE")
		{
			lObjForm.selectedIndex=0;
		}
		else if(lObjForm.type.toUpperCase() == "TEXTAREA")
		{
			lObjForm.value = "";
		}
		
		fDesactivarError("err_"+lstIdCampo);
		fDesactivarError("formato_"+lstIdCampo);
		fDesactivarError("min_"+lstIdCampo);
		fDesactivarError("max_"+lstIdCampo);
		
	}

	/*if( document.getElementById("hdRequiereCaptcha").value.length > 0  && stStringTrim(document.getElementById("hdRequiereCaptcha").value) == "SI" )
	{
 	 	with (formaFC)
 	 	{
 			caracteresCaptcha.value="";
 			//document.getElementById('err_Kaptcha').innerHTML='';
 	 	} 		
	}*/
			
	fDesactivarError("err_MensajeGral");
	document.getElementById('tdPlaceToGo').scrollIntoView( false );
 	
 }
 
