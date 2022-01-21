export class Professional{

    //Atributos de la clase

    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarsNumber:number;
    public profession:string;

    //Definimos constructor

    constructor (name:string, age:number, genre:string, weight:number, height:number,
                 hairColor:string, eyeColor:string, race:string, isRetired:boolean,
                 nationality:string, oscarsNumber:number, profession:string){
                    
                    this.name=name;
                    this.age=age;
                    this.genre=genre;
                    this.weight=weight;
                    this.height=height;
                    this.hairColor=hairColor;
                    this.eyeColor=eyeColor;
                    this.race=race;
                    this.isRetired=isRetired;
                    this.nationality=nationality;
                    this.oscarsNumber=oscarsNumber;
                    this.profession=profession;

    }
    
    // Bloque de métodos
    
    public getDatos():void{
        
        console.log("Datos de " + this.name );
        console.log("Nombre: " + this.name); 
        console.log("Edad: " + this.age); 
        console.log("Género: " + this.genre);
        console.log("Peso: " + this.weight); 
        console.log("Altura: " + this.height);
        console.log("Color de pelo: " + this.hairColor);
        console.log("Color de ojos: " + this.eyeColor );
        console.log("Raza: " + this.race);
        console.log("¿Está retirado?: " + this.isRetired);
        console.log("Nacionalidad: " + this.nationality); 
        console.log("Número de Oscars: " + this.oscarsNumber);
        console.log("Profesión: " + this.profession +"\n");
        

    }
}



