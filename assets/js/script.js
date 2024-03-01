document.querySelector(".titulo").innerHTML = "Estadisticas Centro Médico Ñuñoa";

/*document.write('<button id="informeBtn">Generar informe de primera y ultima atencion por especialidad</button>');*/

let radiologia = [

    {
        especialidad: 'Radiologia',
        rut_paciente: '9878782 - 1',
        nombre_paciente: 'Francisca Rojas',
        prevision: 'Fonasa',
        especialista: 'Ignacio Schulz',
        hora: '11:00'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '15345241-3',
        nombre_paciente: 'Pamela Estrada',
        prevision: 'Isapre',
        especialista: 'Federico Subercaseaux',
        hora: '11:30'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '16445345-9',
        nombre_paciente: 'Armando Luna',
        prevision: 'Isapre',
        especialista: 'Fernando Wurthz',
        hora: '15:00'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '17666419-0',
        nombre_paciente: 'Manuel Godoy',
        prevision: 'Fonasa',
        especialista: 'Ana Maria Godoy',
        hora: '15:30'
    },
    {
        especialidad: 'Radiologia',
        rut_paciente: '14989389-k',
        nombre_paciente: 'Ramon Ulloa',
        prevision: 'Fonasa',
        especialista: 'Patricia Suazo',
        hora: '16:00'
    },

];

var traumatologia = [
    {
        especialidad: 'Traumatologia',
        rut_paciente: '15554774-5',
        nombre_paciente: 'Paula Sanchez',
        prevision: 'Fonasa',
        especialista: 'Maria Paz Altuzarra',
        hora: '8:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '15444147-9',
        nombre_paciente: 'Angelica navas',
        prevision: 'Isapre',
        especialista: 'Rauls Araya',
        hora: '10:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '17879423-9',
        nombre_paciente: 'Ana Klapp',
        prevision: 'Isapre',
        especialista: 'Maria Arriagada',
        hora: '10:30'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '1547423-6',
        nombre_paciente: 'Felipe Mardones',
        prevision: 'Isapre',
        especialista: 'Alejandro Badilla',
        hora: '11:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '16554741-k',
        nombre_paciente: 'Diego Marre',
        prevision: 'Fonasa',
        especialista: 'Cecilia Budnik',
        hora: '11:30'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '9747535-8',
        nombre_paciente: 'Cecilia Mendez',
        prevision: 'Isapre',
        especialista: 'Arturo Cavagnaro',
        hora: '12:00'
    },
    {
        especialidad: 'Traumatologia',
        rut_paciente: '11254785-5',
        nombre_paciente: 'Marcial Suazo',
        prevision: 'Isapre',
        especialista: 'Andres Kanacri',
        hora: '12:30'
    }
];

var dental = [
    {
        especialidad: 'Dental',
        rut_paciente: '11123425-6',
        nombre_paciente: 'Marcela Retamal',
        prevision: 'Isapre',
        especialista: 'Andrea Zuñiga',
        hora: '8:30'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '9878789',
        nombre_paciente: 'Angel Muñoz',
        prevision: 'Isapre',
        especialista: 'Maria Pia Zañartu',
        hora: '11:00'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '7998789-5',
        nombre_paciente: 'Mario KART',
        prevision: 'Fonasa',
        especialista: 'Scarlett Witting',
        hora: '11:30'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '18887662-k',
        nombre_paciente: 'Karin Fernandez',
        prevision: 'Fonasa',
        especialista: 'Francisco Von Teuber',
        hora: '13:00'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '17665461-4',
        nombre_paciente: 'Hugo Sanchez',
        prevision: 'Fonasa',
        especialista: 'Eduardo Viñuela',
        hora: '13:30'
    },
    {
        especialidad: 'Dental',
        rut_paciente: '14441281-0',
        nombre_paciente: 'Ana Sepulveda',
        prevision: 'Isapre',
        especialista: 'Raquel Villaseca',
        hora: '14:00'
    }

];

let arreglos = [radiologia, traumatologia, dental];

informeBtn.addEventListener('click', function () {
    firstLast(arreglos);
});


// Muestra primera y ultima atencion 

function firstLast(arreglo) {

    let cadena = '';

    for (var i = 0; i < arreglo.length; i++) {

        let esp = ` --- ${arreglo[i][0].especialidad} ---`;

        for (var j = 0; j < arreglo[i].length; j++) {

            if (arreglo[i][j] == arreglo[i][0]) {

                console.log(`${arreglo[i][j].especialidad}`);

                var first = `Primera atencion: ${arreglo[i][j].nombre_paciente} - ${arreglo[i][j].prevision}`;
                console.log(first);
            }
            if (arreglo[i][j] == arreglo[i][((arreglo[i].length) - 1)]) {
                var last = `Ultima atencion: ${arreglo[i][j].nombre_paciente} - ${arreglo[i][j].prevision}`;
                console.log(last);
            }
        }

        cadena += esp + "\n" + first + "\n" + last + "\n";

    }

    alert(`----- informe por especialidad ----- \n ${cadena}`);

}


// Imprime arreglos en tabla de mi pagina html

var texto = "<tr><th>Epecialidad</th><th>Especialista</th><th>Hora</th><th>Nombre paciente</th><th>Rut paciente</th><th>Prevision</th></tr> ";

for (var i = 0; i < arreglos.length; i++) {

    for (var j = 0; j < arreglos[i].length; j++) {
        texto += `<tr>
                <td>${arreglos[i][j].especialidad}</td> 
                <td>${arreglos[i][j].especialista}</td>
                <td>${arreglos[i][j].hora}</td>
                <td>${arreglos[i][j].nombre_paciente}</td>
                <td>${arreglos[i][j].rut_paciente}</td>
                <td>${arreglos[i][j].prevision}</td>
             </tr>`;
    }
    document.getElementById("mi-tabla").innerHTML = texto;
}






/*

BONUS TRACK ; 
PARA TERMINAR CUANDO TENGA TIEMPO :     
------- Utilidad extrae y convierte no terminado) ------- 

// Especifica la ubicación del archivo Excel
var archivoExcelUbicacion = "../assets/ListadoDeConsultasMedicas.xlsx";

// Llama a la función para procesar el archivo Excel
var excel = leerArchivoExcel(archivoExcelUbicacion);
console.log(excel);

function convertirFraccionADecimal(fraccion) {
  var horas = fraccion * 24;
  var minutos = (horas % 1) * 60;
  var horasFormateadas = Math.floor(horas).toString().padStart(2, '0');
  var minutosFormateados = Math.round(minutos).toString().padStart(2, '0');
  return horasFormateadas + ":" + minutosFormateados;
}

function leerArchivoExcel(ubicacion) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", ubicacion, true);
  xhr.responseType = "arraybuffer";

  xhr.onload = function (e) {
    var datos = new Uint8Array(xhr.response);
    var libro = XLSX.read(datos, { type: 'array' });
    var hojas = {};

    // Iterar sobre todas las hojas del libro de trabajo
    libro.SheetNames.forEach(function (nombreHoja) {
      var hoja = libro.Sheets[nombreHoja];
      var datosJSON = XLSX.utils.sheet_to_json(hoja, { header: 1 });

      // Convertir la primera columna de fracción del día a hora
      for (var i = 0; i < datosJSON.length; i++) {
        if (typeof datosJSON[i][0] === 'number') {
          datosJSON[i][0] = convertirFraccionADecimal(datosJSON[i][0]);
        }
      }

      // Convertir la hoja en un arreglo de objetos
      var arregloHoja = [];
      var encabezado = datosJSON.shift(); // Remover la primera fila (encabezado)
      datosJSON.forEach(function(fila) {
        var objetoFila = {};
        encabezado.forEach(function(columna, indice) {
          objetoFila[columna] = fila[indice];
        });
        arregloHoja.push(objetoFila);
      });

      // Almacenar el arreglo de objetos en el objeto hojas
      hojas[nombreHoja] = arregloHoja;
    });

    // imprime y retorna? las hojas
    console.log(hojas);
    return hojas;
  };

  xhr.send();
}
*/