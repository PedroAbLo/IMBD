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
        // for (let datos in this){
        //         console.log(this[datos]);          
        // }
    }
}