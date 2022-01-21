import { Professional } from "./professional";

//Creación de objetos Professional

let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz");


 // Imprimo todos los datos de nuestros actores con
 // el método .getDatos().

actor1.getDatos();
actor2.getDatos();
actor3.getDatos();
actor4.getDatos();
actor5.getDatos();


//**

//Haciendo un array para meterlos en bloque

// let actores = [];
// actores.push(actor1);
// actores.push(actor2);
// actores.push(actor3);
// actores.push(actor4);
// for(let i = 0; i < actores.length; i++){
//     actores
// }