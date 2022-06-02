const inquirer = require("inquirer"); //lets us use the plugin inquirer as inquirer
const { Dog } = require("./app"); //imports the class Dog from ./app as Dog
const { Parrot } = require("./app");
const { Turtle } = require("./app");
let myPet = {}; // Declares myPet as a mutable object

const dogFn = async () => { // defines an asynchronous function, async lets us delay the execution of code until we want it to execute, in conjunction with the 'await' function
    const dogAction = await inquirer.prompt({ // await lets us delay this line of code until the resolution of a promise, inquirer.prompt allows us to ask something in the terminal
    type: "list", //type of question asked by inquirer in the terminal
    name: "action", // name of the question
    message: "What would you like to do with your new dog?", // message that'll appear on the terminal
    choices: [
        {
            key: "a", // identifier for this question
            name: "Feed", // what shows up as an answer
            value: "feed", // value returned by this answer
        },
        {
            key: "b",
            name: "Give Water",
            value: "giveWater",
        },
        {
            key: "c",
            name: "Play",
            value: "play",
        },
    ],
});
if(dogAction.action == 'feed'){ // checks what action was chosen after the question
    await myPet.feed() // calls the method from the subclass currently used
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.happiness < 100){ //checks if game ending conditions are met
        await dogFn(); //if the game isn't supposed to end, it'll return this function
    }
    else{
        myPet.hungerCheck(); // checks to see which property has ended the game so the game can finish with a customised message
        myPet.thirstCheck();
        myPet.hapinessCheck();
    }
}
else if(dogAction.action == 'giveWater'){
    await myPet.giveWater();
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.happiness < 100){
        await dogFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.hapinessCheck();
    }
}
else if(dogAction.action == 'play'){
    await myPet.ignore();
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.hapiness < 100){
        await dogFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.hapinessCheck();
    }
}}

const parrotFn = async () => {
    const parrotAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your new parrot?",
    choices: [
        {
            key: "a",
            name: "Feed",
            value: "feed",
        },
        {
            key: "b",
            name: "Fly",
            value: "fly",
        },
        {
            key: "c",
            name: "Talk",
            value: "talk",
        },
    ],
});
if(parrotAction.action == 'feed'){
    await myPet.feed();
    if(myPet.hunger <100 && myPet.learn < 100 && myPet.sing > 0){
        await parrotFn();
    }
    else{
        myPet.hungerCheck();
        myPet.learnCheck();
        myPet.singCheck();
    }
}
else if(parrotAction.action == 'fly'){
    await myPet.fly();
    if(myPet.hunger <100 && myPet.learn < 100 && myPet.sing > 100){
        await parrotFn();
    }
    else{
        myPet.hungerCheck();
        myPet.learnCheck();
        myPet.singCheck();
    }
}
else if(parrotAction.action == 'talk'){
    await myPet.talk();
    if(myPet.hunger <100 && myPet.learn < 100 && myPet.sing > 100){
        await parrotFn();
    }
    else{
        myPet.hungerCheck();
        myPet.learnCheck();
        myPet.singCheck();
    }
}}

const turtleFn = async () => {
    const turtleAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your new turtle?",
    choices: [
        {
            key: "a",
            name: "Feed Cactus",
            value: "feedKnight",
        },
        {
            key: "b",
            name: "Swim",
            value: "swim",
        },
        {
            key: "c",
            name: "Dig Hole",
            value: "digHole",
        },
    ],
});
if(turtleAction.action == 'feedCactus'){
    await myPet.feedCactus();
    if(myPet.hunger <100 && myPet.happiness < 100 && myPet.growth < 100){
        await turtleFn();
    }
    else{
        myPet.hungerCheck();
        myPet.happinessCheck();
        myPet.growthCheck();
    }
}
else if(turtleAction.action == 'swim'){
    await myPet.swim();
    if(myPet.hunger <100 && myPet.happiness < 100 && myPet.growth < 100){
        await turtleFn();
    }
    else{
        myPet.hungerCheck();
        myPet.happinessCheck();
        myPet.growthCheck();
    }
}
else if(turtleAction.action == 'digHole'){
    await myPet.digHole();
    if(myPet.hunger <100 && myPet.happiness < 100 && myPet.growth < 100){
        await turtleFn();
    }
    else{
        myPet.hungerCheck();
        myPet.happinessCheck();
        myPet.growthCheck();
    }
}}


try{ // does this as a promise 

    const start = async () => {
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message: "Please select your animal type!",
            choices: [
                {
                    key: "a",
                    name: "Dog",
                    value: "dog",
                },
                {
                    key: "b",
                    name: "Parrot",
                    value: "parrot",
                },
                {
                    key: "c",
                    name: "Turtle",
                    value: "turtle",
                },
            ],
        });
        const petName = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your pet called?',
        });
        const petAge = await inquirer.prompt({
            type: 'input',
            name: 'age',
            message: 'And how old is your pet?',
        });
        switch(typeOfPet.typeOfPet){
            case 'dog':
                myPet = new Dog(petName, petAge, 10, 10, 10); // makes the pet using the class Dog with those parameters
                await dogFn();
                break;
            case 'parrot': 
                myPet = new Parrot(petName, petAge, 0, 1, 100);
                await parrotFn();
                break;
            case 'turtle':
                myPet = new Turtle(petName, petAge, 0, 100, 0);
                await turtleFn();
                break;
            default:
                break;


       

            }console.log(myPet);    }
    start();
}
    catch(error) {
        console.log("whoops error");
    } 