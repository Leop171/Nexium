function actualizarPaises() {
	//console.log("lstContinentes: " + JSON.stringify(lstPaises));	
	$("#error_pais").hide();
	$("#error_tipo_servicio").hide();
	$("#error_tipo_servicio").html('');						
	$("#error_pais").html('');			
	$('#seccionResultadosCobertura').hide();
	var idService = $("#servicio").val();
	var idContinente = $("#sel_continente").val();
	//console.log("***********");
	//console.log("[actualizarPaises.init]Tipo servicio:" + idService );
	//console.log("[actualizarcontinente.init]Tipo continente:" + idContinente );
	//console.log("***********");
	//$('#sel_continente').html('');
	$('#selPais').html('');
	var cadena ='<option value="-1">Seleccionar</option>';	
	if(lstPaises.length > 0) {
		
		console.log("lstPaises1: " + JSON.stringify(lstPaises));
		//lstPaises = removeDuplicatesPais(lstPaises);
				lstPaises.sort(function (a, b) {
            // if (a.fi_orden === 1 && b.fi_orden === 1) {
                return a.fc_descripcion.localeCompare(b.fc_descripcion);
            // }

            return 0;
        });

		console.log("lstPaises2: " + JSON.stringify(lstPaises));	
		
		for(var i=0; i < lstPaises.length; i++) {	
			if(lstPaises[i].fi_tipo_servicio == idService) {
			//if(lstPaises[i].fi_tipo_servicio == idService && lstPaises[i].fi_continente == idContinente) {
			//	cadena += '<option value="' + lstPaises[i].fi_pais  + '">' + lstPaises[i].fc_descripcion + '</option>';   
				cadena += '<option idContinente="' + lstPaises[i].fi_continente  + '" nombreContinente ="' + lstPaises[i].fc_continente  + '" value="' + lstPaises[i].fi_pais  + '">' + lstPaises[i].fc_descripcion + '</option>';   
				

			}
			//console.log("cadena de paises: " + cadena);
			$('#pais').html(cadena);
		}
	} else {
		$('#pais').html(cadena);
	}
}

/*function actualizarContinente() {
	//console.log("lstContinentes: " + JSON.stringify(lstContinentes));
	$("#error_pais").hide();
	$("#error_tipo_servicio").hide();
	$("#error_tipo_servicio").html('');						
	$("#error_pais").html('');			
	$('#seccionResultadosCobertura').hide();
	var idService = $("#servicio").val();
	var idContinente = $("#sel_continente").val();
	//console.log("***********");
	//console.log("[actualizarPaises.init]Tipo servicio:" + idService );
	//console.log("[actualizarcontinente.init]Tipo continente:" + idContinente );
	//console.log("***********");
	$('#sel_continente').html('');
	$('#selPais').html('');
	var cadena ='<option value="-1">Seleccionar</option>';	
	if(lstContinentes.length > 0) {
		
		console.log("lstContinentes1: " + JSON.stringify(lstContinentes));
		lstContinentes = removeDuplicates(lstContinentes);
		console.log("lstContinentes2: " + JSON.stringify(lstContinentes));	
		
		for(var i=0; i < lstContinentes.length; i++) {				
			//if(lstContinentes[i].fi_tipo_servicio == idService) {
				cadena += '<option value="' + lstContinentes[i].fi_continente  + '">' + lstContinentes[i].fc_descripcion + '</option>';   
			//}
		}
		//console.log("cadena de continentes: " + cadena);
		$('#sel_continente').html(cadena);
	} else {
		$('#sel_continente').html(cadena);
	}
} */

/*function removeDuplicates(lstContinentes) {
    var arrayOut = [];
    lstContinentes.forEach(item=> {
      try {
        if (JSON.stringify(arrayOut[arrayOut.length-1].fi_continente) !== JSON.stringify(item.fi_continente)) {
          arrayOut.push(item);
        }
      } catch(err) {
        arrayOut.push(item);
       }
    })
    return arrayOut;
} */

function removeDuplicatesPais(lstPaises) {
    var arrayOut = [];
    lstPaises.forEach(item=> {
      try {
        if (JSON.stringify(arrayOut[arrayOut.length-1].fi_pais) !== JSON.stringify(item.fi_pais)) {
          arrayOut.push(item);
        }
      } catch(err) {
        arrayOut.push(item);
       }
    })
    return arrayOut;
}

function cambiaPais() {
	$("#error_pais").hide();
	$("#error_tipo_servicio").hide();
	$("#error_tipo_servicio").html('');						
	$("#error_pais").html('');
	$('#seccionResultadosCobertura').hide();
}

function actualizarCobertura(){		
	$('#seccionResultadosCobertura').hide();
	var idPais 			= $("#pais").val();	
	var idtiposervicio 	= $("#servicio").val();
	var paisAux = $("#pais option:selected").text();
	//var nombreContinente 	= $("#sel_continente option:selected").text();
	var nombreContinente 	= $("#pais option:selected").attr("nombreContinente");
		
	console.log("[actualizarCobertura.init]idPais:" 		+ idPais);
	console.log("[actualizarCobertura.init]idtiposervicio:" + idtiposervicio);
	$("#error_pais").hide();
	$("#error_tipo_servicio").hide();
	$("#error_tipo_servicio").html('');						
	$("#error_pais").html('');			
	if(idPais != '-1' &&  idtiposervicio != '-1' ) {
		$('#seccionResultadosCobertura').show();		
		$('#tituloPais').html(tituloEtiquetaH4 + ' <strong>' + paisAux + '</strong> / ' + nombreContinente);
		if(lstCobertura.length > 0) {
			var isvolte = false;
            for(var i = 0; i < lstCobertura.length; i++) {		
            	if( lstCobertura[i].fi_tipo_servicio == idtiposervicio && lstCobertura[i].fi_pais == idPais && lstCobertura[i].volte == 1 ){
					isvolte = true;
              	}
            }
            var cadena = '';
			cadena += '<table>'; 
        	cadena += '	<thead>';
          	cadena += '		<tr>'; 
            cadena += '			<th>Operador</th>';
            cadena += '			<th>Banda</th>';
            cadena += '			<th>Voz</th>';
            cadena += '			<th>SMS</th>';
            cadena += '			<th>Datos 2G</th>';
            cadena += '			<th>Datos 3G</th>';
            cadena += '			<th>Datos 4G</th>';
            if( isvolte ) { cadena += '			<th>VoLTE</th>'; }         
          	cadena += '		</tr>';
        	cadena += '	</thead>';
        	cadena += '	<tbody>';
          	for(var i=0; i < lstCobertura.length; i++) {				  
              	if( lstCobertura[i].fi_tipo_servicio == idtiposervicio && lstCobertura[i].fi_pais == idPais) { 
					cadena += '		<tr>';
		            cadena += '			<td data-th="Operador"> <span class="celdaTable">' + lstCobertura[i].fc_operador + '</span></td>';
		            cadena += '			<td data-th="Banda"> <span class="celdaTable">' + lstCobertura[i].banda + '</span></td>';
		            cadena += '			<td data-th="Voz"> <span class="celdaTable">'; if( lstCobertura[i].voz == 1 ) { cadena += '<i class="ico-check"></i>'; } cadena += '</span></td>';
		            cadena += '			<td data-th="SMS"> <span class="celdaTable">'; if( lstCobertura[i].sms == 1 ) { cadena += '<i class="ico-check"></i>'; } cadena += '</span></td>';
		            cadena += '			<td data-th="Datos 2G"> <span class="celdaTable">'; if( lstCobertura[i].datos_2g == 1 ) { cadena += '<i class="ico-check"></i>'; } cadena += '</span></td>';
		            cadena += '			<td data-th="Datos 3G"> <span class="celdaTable">'; if( lstCobertura[i].datos_3g == 1 ) { cadena += '<i class="ico-check"></i>'; } cadena += '</span></td>';
		            cadena += '			<td data-th="Datos 4G"> <span class="celdaTable">'; if( lstCobertura[i].datos_4g == 1 ) { cadena += '<i class="ico-check"></i>'; } cadena += '</span></td>';
		            if( isvolte ) { cadena += '			<td data-th="VoLTE"> <span class="celdaTable">'; if( lstCobertura[i].volte == 1 ) { cadena += '<i class="ico-check"></i>'; } cadena += '</span></td>'; }
		          	cadena += '		</tr>';
		    	}
			}
			cadena += '	</tbody>';
      		cadena += '</table>';      		
      		$('#datosCobertura').html(cadena);
		} else {
			console.log('No se encontraron resultados');			
			$('#seccionResultadosCobertura').show();
			$('#datosCobertura').hide();
			$('#tituloLegales').hide();
			$('#etiH2').hide();
			$('#tituloPais').html(tituloEtiquetaH4 + ' <strong>' + paisAux + '</strong> / ' + nombreContinente + '<br><br>' + msjErrorResultados);		
		}		
	} else {		
		$('#seccionResultadosCobertura').hide();
		if(idPais == '-1' ){
			$("#error_pais").show();
			$("#error_pais").html('<br>Selecciona un opci&oacute;n.');			
		}
		
		if(idtiposervicio == '-1' ){
			$("#error_tipo_servicio").show();
			$("#error_tipo_servicio").html('<br>Selecciona un opci&oacute;n.');						
		}		
	}	
}