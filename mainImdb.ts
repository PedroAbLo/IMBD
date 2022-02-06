import { Imdb } from "./imdb";
import { Professional } from "./professional";
import { Movie } from "./movie";
import { readFileSync } from 'file-system';
//
//import { readFile, writeFile } from "fs";
import * as fs from 'file-system';
//import Promise from "bluebird";
//import * as fs from 'fs';
//const fs2 = require('fs');





let libreriaPeliculas = new Imdb();

let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz");

let actores = [actor1,actor2];
let actores2 = [actor3,actor4];
let actores3 = [actor5];

let nuevaMovie = new Movie("El titulo de mi vida",1985,"Española");
let nuevaMovie2 = new Movie("Otro titulo 2",2000,"Inglesa");
let nuevaMovie3 = new Movie("Otro titulo 3",2010,"Lituana");

nuevaMovie.actors = actores;
nuevaMovie2.actors = actores2;
nuevaMovie3.actors = actores3;

libreriaPeliculas.peliculas = [nuevaMovie,nuevaMovie2,nuevaMovie3];

libreriaPeliculas.getDatos();
fs.writeFileSync("imdbBBDD.json",JSON.stringify(libreriaPeliculas));

let nuevaLibreriaPeliculas= new Imdb();
let rawdata = readFileSync('imdbBBDD.json');

//nuevaLibreriaPeliculas = JSON.parse(rawdata);

let prueba:Imdb = JSON.parse(rawdata);

console.log("--------------------------------------------------");
//console.log(typeof(prueba));
//console.log(prueba);
nuevaLibreriaPeliculas.peliculas = prueba.peliculas;

console.log(nuevaLibreriaPeliculas);

console.log("00000000000000000000000000");

nuevaLibreriaPeliculas.getDatos();
//nuevaLibreriaPeliculas.getDatos();


