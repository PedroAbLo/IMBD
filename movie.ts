import { Professional } from "./professional";

export class Movie{
    
    //Atributos de la clase
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:string;
    public writer:string;
    public language:string;
    public plataform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    //constructor
    constructor(title:string, releaseYear:number, nacionality:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.actors = [];
        this.director ="Un director";
        this.writer = "Un escritor";
        this.language ="Español";
        this.plataform ="Cines";
        this.isMCU = true;
        this.mainCharacterName ="El prota";
        this.producer="El productor";
        this.distributor = "El distribuidor";
        this.genre ="Comedia";
    }

    public mostrarDatos():void{
        for(let datos in this){
            //this.actors[datos].getDatos()
            console.log(this[datos]);
        }
    }

}