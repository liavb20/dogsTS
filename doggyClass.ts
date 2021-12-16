console.log("hello");
import axios from 'axios';

class Dog{
    private name : string;
    private age: number;
    private hunger: number;
    private sex: string;

    constructor(name: string = 'rexi', age: number = 3, hunger: number = 4 , sex: string = 'female'){
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sex = sex;
    }
    public setName(name: string) : void {
        this.name = name;
    }
    public growUp():void {
        this.age++;
    }
    public setHunger(hunger: number): void{
        if(hunger > 10 || hunger < 0) throw new Error('hunger must be between 0 to 10');
        else this.hunger = hunger;
    }
    public feed():void{
        if(this.hunger > 5){
            this.hunger = 0;
            console.log("the pet ate");
        }
        else console.log("the pet not hungry");
        
    }
    public async speak(url : string): Promise<void>{
        console.log("taking dogs");
        console.log((await axios.get(url)).data.quote);
        
    }

}

(async () => {
    const dog1 = new Dog();
    console.log(dog1);
    dog1.setName("RAMI");
    console.log(dog1);
    dog1.growUp();
    console.log(dog1)
    dog1.setHunger(9);
    console.log(dog1);
    dog1.feed();
    dog1.feed();
    dog1.setHunger(6);
    dog1.feed();
    dog1.feed();
    await dog1.speak('https://api.kanye.rest/');
    console.log("THE END ");
    // dog1.setHunger(-1);
})();





