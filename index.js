
//variables datos cliente

let nombre;
let apellido;

//variables datos prod

let nota1, nota2, nota3;

//saludo y recopilacion de datos
function saludar() {
    let nombre = prompt ("Ingrese su nombre")
    let apellido = prompt ("Ingrese su apellido")

    alert("¡Hola " + nombre + apellido + "!");
}
saludar();


// Llamado a funciones
// Función para elegir el país de origen

function sacarPromedio(){
    
    nota1 = prompt('Ingrese 1ra. nota:');
    nota2 = prompt('Ingrese 2da. nota:');
    nota3 = prompt('Ingrese 3ra. nota:');
    //Convertimos los 3 string en enteros
    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);
    let pro;
    pro = (nota1 + nota2 + nota3) / 3;
    if (pro >= 7) {
        document.write('promocionado con: ' + pro);
    } else {
        if (pro >= 4) {
            document.write('regular con: ' + pro);
        } else {
            document.write('reprobado con' + pro);
        }
    }
}

sacarPromedio();





