var reservas = [];

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var servicio = document.getElementById("servicio").value;
    var tipoEvento = document.getElementById("tipoEvento").value;
    var fecha = document.getElementById("fecha").value;
    var hora = document.getElementById("hora").value;
    var invitados = document.getElementById("invitados").value;
    var direccion = document.getElementById("direccion").value;
    var comentarios = document.getElementById("comentarios").value;

    var reserva = {
        nombre: nombre,
        telefono: telefono,
        email: email,
        servicio: servicio,
        tipoEvento: tipoEvento,
        fecha: fecha,
        hora: hora,
        invitados: invitados,
        direccion: direccion,
        comentarios: comentarios
    };

    reservas.push(reserva);

    document.getElementById("mensaje").style.display = "block";
    setTimeout(function () {
        document.getElementById("mensaje").style.display = "none";
    }, 3000);

    mostrarReservas();
    document.getElementById("formulario").reset();
});

function mostrarReservas() {
    var lista = document.getElementById("listaReservas");

    if (reservas.length == 0) {
        lista.innerHTML = '<div class="no-reservas">No hay reservas aún</div>';
        return;
    }

    var html = "";
    for (var i = 0; i < reservas.length; i++) {
        html += '<div class="reserva-item">';
        html += '<h4>' + reservas[i].nombre + '</h4>';
        html += '<p><strong>Email:</strong> ' + reservas[i].email + '</p>';
        html += '<p><strong>Teléfono:</strong> ' + reservas[i].telefono + '</p>';
        html += '<p><strong>Servicio:</strong> ' + reservas[i].servicio + '</p>';
        html += '<p><strong>Evento:</strong> ' + reservas[i].tipoEvento + '</p>';
        html += '<p><strong>Fecha:</strong> ' + reservas[i].fecha + ' - ' + reservas[i].hora + '</p>';
        html += '<p><strong>Invitados:</strong> ' + reservas[i].invitados + '</p>';
        html += '<p><strong>Dirección:</strong> ' + reservas[i].direccion + '</p>';
        if (reservas[i].comentarios) {
            html += '<p><strong>Comentarios:</strong> ' + reservas[i].comentarios + '</p>';
        }
        html += '<a href="Pagar.html"><button class="boton">Ir a Pagar</button></a>';
        html += '</div>';
    }

    lista.innerHTML = html;
}