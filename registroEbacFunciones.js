//Envia una ventana emergente de bienvenida al sistema de registro

alert("Bienvenido al Sistema Ebac de Registro de Alumnos \nPreciona Aceptar para continuar");

// Menu de registro para selccionar la opcion deseada



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
        console.log("Seguro Social: " + registro[i].seguroSocialVigente);
        console.log("\n")
    }
    
};

do{


var menu = prompt("1. Agregar Alumno \n2. Buscar Alumno \n3. Editar Datos del Alumno \n4. Eliminar datos del Alumno \n5. Salir" );


if (menu === "1"){
    alert("Agregar Alumno");
}else if (menu === "2"){
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

//Arreglo con los datos de los estudiantes

var registro = [
    {
        nombre: "Salvador Mora", 
        edad: 30,
        residencia: "CDMX",
        programa: "Frontend Basico",
        correo: "salvador.mora@ecab.com",
        telefono: 5512345678,
        seguroSocialVigente: "SI",
    },
    {
        nombre: "Ricardo Pérez", 
        edad: 27,
        residencia: "GDL",
        programa: "Curso Basico Python",
        correo: "ricardo.perez@ecab.com",
        telefono: 5583736374,
        seguroSocialVigente: "SI",
    },
    {
        nombre: "Juan Gomez", 
        edad: 49,
        residencia: "BCS",
        programa: "Java Intermedio",
        correo: "juan.gomez@ecab.com",
        telefono: 5593847393,
        seguroSocialVigente: "NO",
    },
    {
        nombre: "Daniel Ramirez", 
        edad: 41,
        residencia: "CDMX",
        programa: "HTML Basico",
        correo: "daniel.ramirez@ecab.com",
        telefono: 5512345678,
        seguroSocialVigente: "NO",
    },
    {
        nombre: "Jose Castañeda", 
        edad: 26,
        residencia: "CDMX",
        programa: "CCS Avanzado",
        correo: "jose.castaneda@ecab.com",
        telefono: 55384747575,
        seguroSocialvigente: "SI",
    },

]