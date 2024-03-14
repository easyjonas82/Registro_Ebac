//Envia una ventana emergente de bienvenida al sistema de registro

alert("Bienvenido al Sistema Ebac de Registro de Alumnos \nPreciona Aceptar para continuar");


//Arreglo con los datos de los estudiantes

var registro = [
    {
        nombre: "Salvador Mora", 
        edad: 30,
        residencia: "CDMX",
        programa: "Frontend Basico",
        correo: "salvador.mora@ecab.com",
        telefono: 5512345678,
        seguro: true
    },
    {
        nombre: "Ricardo Pérez", 
        edad: 27,
        residencia: "GDL",
        programa: "Curso Basico Python",
        correo: "ricardo.perez@ecab.com",
        telefono: 5583736374,
        seguro: false
    },
    {
        nombre: "Juan Gomez", 
        edad: 49,
        residencia: "BCS",
        programa: "Java Intermedio",
        correo: "juan.gomez@ecab.com",
        telefono: 5593847393,
        seguro: true
    },
    {
        nombre: "Daniel Ramirez", 
        edad: 41,
        residencia: "CDMX",
        programa: "HTML Basico",
        correo: "daniel.ramirez@ecab.com",
        telefono: 5512345678,
        seguro: true
    },
    {
        nombre: "Jose Castañeda", 
        edad: 26,
        residencia: "CDMX",
        programa: "CCS Avanzado",
        correo: "jose.castaneda@ecab.com",
        telefono: 55384747575,
        seguro: false
    },

]

//Funcion para agregar alumnos nuevos y mostrar registros opción 1 del menu

function agregarAlumno(){

 var nombre = prompt("Introduce el nombre y apellido del alumno");
 var edad = prompt("Introduce la edad del alumno");
 var residencia = prompt("Introduce la residencia del alumno");
 var programa = prompt("Introduce el programa a Inscribir");
 var correo = prompt("Introduce el correo el correo electronico del alumno");
 var telefono = prompt("Introduce el telefono del alumno");
 var seguro = prompt("El alumno cuenta con Seguro vigente escribe S para si y N para no ");

 //Condicion para actualizar el valor de seguro a true o false

 if (seguro === "S"){
    seguro = true;

 }else{
    seguro = false;
 }

 // Variable para agregar registros nuevos 

 var nuevoAlumno = {nombre: nombre, edad: edad, residencia: residencia, programa: programa, correo: correo, telefono: telefono, seguro: seguro};
 
 //Funcion para agregar nuevos valores y mostrarlos en consola
 
 registro.push(nuevoAlumno);

 consultarRegistros();

}

//Funcion para consultar registros, opción 2 del menu

function consultarRegistros(){

    
    //Intruccion for para desplegar cada uno de los registros
    
    
    for(var i = 0; i < registro.length; i++){
        console.log("Registro: " + (i + 1));
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Residencia: " + registro[i].residencia);
        console.log("Programa Inscrito: " + registro[i].programa)
        console.log("Correo: " + registro[i].correo);
        console.log("Telefono: " + registro[i].telefono);
        console.log("Seguro Social: " + registro[i].seguro);
        console.log("\n")
    }
    
};

// Menu de registro para selccionar la opcion deseada


do{


var menu = prompt("1. Agregar Alumno \n2. Buscar Alumno \n3. Editar Datos del Alumno \n4. Eliminar datos del Alumno \n5. Salir" );


if (menu === "1"){
    agregarAlumno();
}else if (menu === "2"){
    alert("Mostrar Registros");
    consultarRegistros();
}else if (menu === "3"){
    alert("Editar Datos del Alumno");
}else if (menu === "4"){
    alert("Eliminar datos del Alumno");
}else if (menu === "5"){
    alert("Saliendo del programa");
}else {
    alert("Salir");
}

var continuar = prompt("Para seleccionar de nuevo escribe S");

} while (continuar === "S");



