import { readFileSync, writeFileSync } from "fs";
import { Movie } from "./movie";

export class Imdb
{
    //Declaración de atributos
    public peliculas:Movie[];

    //constructor
    constructor()
    {
        this.peliculas = [];
    }

    public getDatos():void
    {
        for( let i = 0; i< this.peliculas.length; i++){
            console.log(this.peliculas[i]);
        }
    }

    public escribirEnFicheroJSON(fichero:string):void{
        writeFileSync(fichero,JSON.stringify(this.peliculas))
    }

    public obtenerInstanciaIMDB(fichero:string):Imdb{

        let objeto = JSON.parse(readFileSync("imdbBBDD.json").toString());
        return Object.setPrototypeOf(objeto,Imdb.prototype);        
    }


}