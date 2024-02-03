console.log("*****   Opps - Task - Day-05   *****")
console.log("")

console.log("---A.Class- Movie---")
console.log("")
// Class- Movie
class Movie {
    // Constructor
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";// If no rating is provided, set it to "PG" by default
    }
}
// Example usage
const joe = new Movie("Joe", "Vision Cinema House"); //to check the default rating
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
// Display information about the movie
console.log("Title: " + joe.title);
console.log("Studio: " + joe.studio);
console.log("Rating: " + joe.rating);
console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);

console.log("")

console.log("---B.Write a “person” class to hold all the details---")
console.log("")
// Write a “person” class to hold all the details

class person{
    constructor(name,age,phone,email){
        this.name=(`${name}`);
        this.age=age;
        this.phone=(`+91 ${phone}`);
        this.email=email;
    }
    details(){
        console.log(`Hello, My Name is ${this.name}.I am ${this.age} Years old.
You Can Reach Me at ${this.phone} or email via ${this.email}.
***If You believe in yourself anything is Possible***`);
    }
}

const Myself= new person("Krishnamoorthy","25","12345 67890","unknown@gmail.com")
Myself.details();
console.log("")

console.log("---C.write a class to calculate the uber price---")
console.log("")
//write a class to calculate the uber price.
class uberprice_calculator{
    constructor(price_perkm,distance){
        this.price_perkm=price_perkm,
        this.distance=distance
    }
    calculate_price(){
        const total =this.price_perkm*this.distance;
        console.log(`We Covered ${this.distance}Km during our journey and the overall expenses for this trip amounted Rs${total}`)
        
    }
    
}
const thisTrip=new uberprice_calculator(10,350);
thisTrip.calculate_price();