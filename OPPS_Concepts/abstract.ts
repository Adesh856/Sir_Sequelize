abstract class Abs{
    abstract main():void;
}

class Abstrac extends Abs{
    name:string
    constructor(name:string){
        super()
        this.name = name
    }
    main(): void {
        console.log(`Hello, ${this.name}`);
    }
}

let  check = new Abstrac("Adesh")
check.main()