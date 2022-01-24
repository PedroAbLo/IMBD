import { writeFileSync } from "fs";
import { Movie } from "./movie";




let title:string = window.prompt("Introduce titulo: ");
let releaseYear:number = parseInt(window.prompt("Introduce año de estreno: "));
// let actors:string[] = window.prompt("Introduce los actores: ");
let nationality:string = window.prompt("Introduce la nacionalidad: ");
// let director:string = window.prompt("Introduce el director: ");
// let escritor:string = window.prompt("Introduce escritor: ");
// let idioma:string = window.prompt("Introduce idioma: ");
// let plataforma:string = window.prompt("Introduce plataforma: ");
// let isMCU:boolean = window.prompt("Es del MCU (True or False): ");
// let mainCharacterName:string = window.prompt("Personaje principal: ");
// let producer:string = window.prompt("Introduce productor: ");
// let distributor:string = window.prompt("Introduce distribuidor: ");
// let genre:string = window.prompt("Introduce género: ");

let pelicula = new Movie(title, releaseYear, nationality);

writeFileSync("imdbBBDD.json",JSON.stringify(pelicula));