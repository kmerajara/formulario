
let contador = 1; // Inicia un contador para los códigos automáticos.

        function generarCodigo() {
            return `C${contador++}`; // Genera un código en formato 'C1', 'C2', etc.
        }

        function agregarRegistro() {
            let codigo = generarCodigo();  // Generar código automáticamente
            let idd = document.getElementById("idd").value;
            let iddni = document.getElementById("iddni").value;
            let nombre = document.getElementById("nombre").value;
            let apellidop = document.getElementById("apellidop").value;
            let apellidom = document.getElementById("apellidom").value;
            let sexo = document.getElementById("sexo").value;
            let fenac = document.getElementById("fenac").value;
            let tel = document.getElementById("tel").value;
            let especialidad = document.getElementById("especialidad").value;
            let correop = document.getElementById("correop").value;
            let correoe = document.getElementById("correoe").value;
            let cmp = document.getElementById("cmp").value;
            let rne = document.getElementById("rne").value;
            let estado = document.getElementById("estado").value;
            let area = document.getElementById("area").value;

            // Verificación de campos vacíos
            if (idd === "" || iddni === "" || nombre === "" || apellidop === "" || apellidom === "" || sexo === "" 
                || fenac === "" || tel === "" || especialidad === "" || correop === "" || correoe === ""
                || cmp === "" || rne === "" || estado === "" || area === "") {
                alert("Por favor, complete todos los campos.");
                return;
            }

            // Verificación de duplicados
            let tabla = document.getElementById("tablaRegistros").getElementsByTagName('tbody')[0];
            let filas = tabla.getElementsByTagName('tr');
            
            for (let i = 0; i < filas.length; i++) {
                let filaCodigo = filas[i].cells[0].innerText;
                if (filaCodigo === codigo) {
                    alert("Este código ya está registrado. No se puede agregar el mismo registro.");
                    return;
                }
            }

            // Agregar nuevo registro
            let nuevaFila = tabla.insertRow();
            nuevaFila.insertCell(0).innerText = codigo;
            nuevaFila.insertCell(1).innerText = idd;
            nuevaFila.insertCell(2).innerText = iddni;
            nuevaFila.insertCell(3).innerText = nombre;
            nuevaFila.insertCell(4).innerText = apellidop;
            nuevaFila.insertCell(5).innerText = apellidom;
            nuevaFila.insertCell(6).innerText = sexo;
            nuevaFila.insertCell(7).innerText = fenac;
            nuevaFila.insertCell(8).innerText = tel;
            nuevaFila.insertCell(9).innerText = especialidad;
            nuevaFila.insertCell(10).innerText = correop;
            nuevaFila.insertCell(11).innerText = correoe;
            nuevaFila.insertCell(12).innerText = cmp;
            nuevaFila.insertCell(13).innerText = rne;
            nuevaFila.insertCell(14).innerText = estado;
            nuevaFila.insertCell(15).innerText = area;

             // Columna para el ícono de edición
            let celdaAcciones = nuevaFila.insertCell(16);
            let editarIcono = document.createElement('span');
            editarIcono.innerHTML = '✏️'; // Icono de lápiz
            editarIcono.classList.add('editar-icono');
            editarIcono.onclick = function() {
                editarRegistro(nuevaFila);
            };
            celdaAcciones.appendChild(editarIcono);

            // Limpiar el formulario
            document.getElementById("registroForm").reset();
        }

function eliminarRegistro(button) {
    if (confirm("¿Está seguro de eliminar este registro?")) {
        let row = button.closest("tr");
        row.remove();
    }
}
function editarRegistro(button) {
    let row = button.parentElement.parentElement;

    // Rellenar el formulario con los datos de la fila seleccionada
    document.getElementById("codigo").value = row.cells[0].innerText;
    document.getElementById("idd").value = row.cells[1].innerText;
    document.getElementById("iddni").value = row.cells[2].innerText;
    document.getElementById("nombre").value = row.cells[3].innerText;
    document.getElementById("apellidop").value = row.cells[4].innerText;
    document.getElementById("apellidom").value = row.cells[5].innerText;
    document.getElementById("sexo").value = row.cells[6].innerText;
    document.getElementById("fenac").value = row.cells[7].innerText;
    document.getElementById("tel").value = row.cells[8].innerText;
    document.getElementById("especialidad").value = row.cells[9].innerText;
    document.getElementById("correop").value = row.cells[10].innerText;
    document.getElementById("correoe").value = row.cells[11].innerText;
    document.getElementById("cmp").value = row.cells[12].innerText;
    document.getElementById("rne").value = row.cells[13].innerText;
    document.getElementById("estado").value = row.cells[14].innerText;
    document.getElementById("area").value = row.cells[15].innerText;

    row.remove();
}

function eliminarRegistro(button) {
    if (confirm("¿Está seguro de que desea eliminar este registro?")) {
        button.parentElement.parentElement.remove();
        mostrarMensaje("Registro eliminado correctamente.");
    }
}

function mostrarMensaje(mensaje) {
    // Crear un div de mensaje de éxito
    let mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje-exito");
    mensajeDiv.innerText = mensaje;
    
    // Agregar el mensaje al DOM
    document.body.appendChild(mensajeDiv);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeDiv.remove();
    }, 3000);
}