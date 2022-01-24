import { Movie } from "./movie";
import { Professional } from "./professional";

let actor1 = new Professional("Brad Pitt", 58, "masculino", 78, 180, "rubio", "azules", "blanca", false, "americana", 2, "actor");
let actor2 = new Professional("Denzel Washington", 67, "masculino", 78, 185, "negro", "marrones", "negra", false, "americana", 2, "actor");
let actor3 = new Professional("Scarlett Johansson", 37, "femenino", 48, 163, "rubio", "azules", "blanco", false, "americana", 0, "actriz");
let actor4 = new Professional("Angelina Jolie", 46, "femenino", 54, 169, "castaño", "azules", "blanco", false, "americana", 2, "actriz");
let actor5 = new Professional("Sophia Loren", 87, "femenino", 59, 174, "castaño", "marron", "blanco", true, "italiana", 2, "actriz");

let actores = [actor1,actor2,actor3,actor4,actor5];

let nuevaMovie = new Movie("El titulo de mi vida",1985,"Española");

nuevaMovie.actors = actores;

nuevaMovie.mostrarDatos();

