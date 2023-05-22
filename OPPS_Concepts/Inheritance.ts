interface IVehical{
    name:string
    Vehical_type:string
    price:number
    keyowner:()=>string;
}


class Vehical implements IVehical{
    name:string
    Vehical_type:string
    price:number
    constructor(name:string,Vehical_type:string,price:number){
      this.name=name
      this.price=price
      this. Vehical_type= Vehical_type
    }
    keyowner():string{
        return  this.name
    }
}

class Ducati  extends Vehical {
    brand: string;
    year: number;
    constructor(name:string,Vehical_type:string,price:number,brand:string,year:number){
        super(name,Vehical_type,price)
        this.brand=brand
        this.year=year
    }
    startengine():string{
   return `hrroomm`
    }
}

const NewCar =new Ducati("Adesh Tayde","Bike",1458621,"Ducati",2023)

console.log(NewCar.keyowner())

