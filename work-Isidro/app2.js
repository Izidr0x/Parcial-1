function getParam(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

function showCard(){
    let nombre = getParam("nombre")
    let email = getParam("email");
    let telefono = getParam("movil");
    let gusto = getParam("gusto");
    let porcentaje = getParam("porce");
		document.getElementById("name").innerText = nombre || "N/A";
		document.getElementById("email").innerText = email || "N/A";
		document.getElementById("phone").innerText = telefono || "N/A";
		document.getElementById("gustos").innerText = gustos || "N/A";
		document.getElementById("porce").innerText = porce || "N/A";

		
}
