import { Imdb } from "./imdb";
import { writeFileSync } from "fs";
import { Movie } from "./movie";
import { Professional } from "./professional";

let readlineSync = require('readline-sync');

let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz");


let actores = [actor1.name, actor2.name, actor3.name, actor4.name, actor5.name];


let title:string = readlineSync.question("Introduce titulo: ");
let releaseYear:number = parseInt(readlineSync.question("Introduce año de estreno: "));
// let actors:string[] = readlineSync.keyInSelect(pelicula.actors, "Introduce los actores: ");
let nationality:string = readlineSync.question("Introduce la nacionalidad: ");
// let director:string = readlineSync.question("Introduce el director: ");
// let escritor:string = readlineSync.question("Introduce escritor: ");
// let idioma:string = readlineSync.question("Introduce idioma: ");
// let plataforma:string = readlineSync.question("Introduce plataforma: ");
// let isMCU:boolean = readlineSync.question("Es del MCU (True or False): ");
// let mainCharacterName:string = readlineSync.question("Personaje principal: ");
// let producer:string = readlineSync.question("Introduce productor: ");
// let distributor:string = readlineSync.question("Introduce distribuidor: ");
// let genre:string = readlineSync.question("Introduce género: ");

let pelicula:Movie = new Movie(title, releaseYear, nationality);
while(readlineSync.keyInSelect(actores, "Introduce los actores: ") == 0){
let actors:string[] = readlineSync.keyInSelect(actores, "Introduce los actores: ");
}

writeFileSync("imdbBBDD.json",JSON.stringify(pelicula));