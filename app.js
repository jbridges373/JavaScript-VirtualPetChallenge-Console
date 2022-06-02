class Animal { // Class declaration of the parent - Animal, which the other classes are based on
    constructor(name, age, hunger, happiness) { // Properties assigned to all animal classes
        this.name = name; // this. refers to the objects created from this class, using dot notation to access the property
        this.age = age;
        this.hunger = hunger;
        this.happiness = happiness;
    }
}

class Dog extends Animal { // class Dog defines a new class Dog, and 'extends Animal' means it takes properties and methods from Animal, so name age happiness and hunger!
    constructor(name, age, hunger, thirst, happiness) { // declaring the properties of the subclass, still including those from the parents
        super(name, age, hunger, happiness); //super() allows us to inherit these properties from Animal
        this.thirst = thirst;
        this.happiness = happiness;
    }
    feed() { // A class method, this can be accessed at myPet.feed() and it will change the properties of myPet, it can't be accessed by the other subclasses
        this.happiness += 10;
        this.hunger -= 10;
        this.thirst += 10;
    }

    giveWater() {
        this.thirst -= 10;
        this.hunger += 10;
        this.happiness += 10;
    }

    play() {
        this.thirst += 10;
        this.hunger += 10;
        this.happiness += 10;
    }
    hungerCheck(){ // Checks properties, allows us to end the game if the ending conditions are true
        if(this.hunger >= 100){
            console.log("hunger end");
        }}
    thirstCheck(){
        if (this.thirst >= 100){
            console.log('thirst end');
        }}
    happinessCheck(){
        if(this.happiness >= 100){
            console.log('happiness end');
        }
}
}
class Parrot extends Animal {
    constructor(name, age, hunger, learn, sing) {
        super(name, age, hunger);
        this.learn = learn;
        this.sing = sing;
    }

    feed(){
        this.hunger -= 10;
        this.learn -= 10;
        this.sing += 10;
    }

    fly(){
        this.hunger += 10;
        this.learn -= 10;
        this.sing += 10;
    }

    talk(){
        this.learn += 10;
        this.sing -= 10;
    }
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("hunger end");
        }}
    happinessCheck(){
        if(this.happiness >= 100){
            console.log("happiness end");
        }}
    learnCheck(){
        if (this.learn >= 100){
            console.log('learn end');
        }}
    singCheck(){
        if(this.sing <= 0){
            console.log('sing end');
        }
}
}
class Turtle extends Animal {
    constructor(name, age, hunger, happiness, growth) {
        super(name, age, hunger);
        this.happiness = happiness;
        this.growth = growth;        
    }

    feedCactus() {
        this.hunger -=10;
        this.happiness += 10;
        this.growth += 10;
    }

    swim() {
        this.happiness += 10;
        this.growth += 10;
    }

    digHole() {
        this.happiness -= 10;
        this.growth += 10;
    }
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("hunger end");
        }}
    happinessCheck(){
        if (this.happiness <= 100){
            console.log('happiness end');
        }}
    growthCheck(){
        if(this.growth <= 100){
            console.log('growth end');
        }
    }
    }

    


module.exports = { Dog, Parrot, Turtle }; // Allows us to use our classes in the other file