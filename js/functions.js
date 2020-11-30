var y = 1;
document.getElementById("intentoNum").innerHTML = "Intento número" + " " + y;


// funciones
function verificar() {
    var x = document.getElementById("pista").value;
    if (x == "Ansiedad" || x == "ansiedad") {
        alert("GANASTE");
        location.reload();
    }
    else if (x != "Ansiedad" || x != "ansiedad") {
        y++;
        event.preventDefault();
        document.getElementById("intentoNum").innerHTML = "Intento número" + " " + y;
        if (y <= 2) {
            document.getElementById("pista1").innerHTML = "";
        }
        else if (y == 3) {
            document.getElementById("pista1").innerHTML = 
            "<div class='alert alert-primary' role='alert'> <p>Primer pista: <p>" + "<p>La respuesta puede estar en alguno de los apartados anteriores.</p></div>";
            //alert("La respuesta puede estar en alguno de los apartados anteriores");
        }
        else if (y == 4) {
            document.getElementById("pista1").innerHTML ="";
            document.getElementById("pista2").innerHTML = 
            "<div class='alert alert-danger' role='alert'> <p>Segunda pista: <p>" + "<p>La respuesta se encuentra en el primer apartado.</p></div>";
            //alert("La respuesta se encuentra en el primer apartado");
        }
        else {           
            alert("Perdiste :(");
            location.reload();
        }
    }
}


