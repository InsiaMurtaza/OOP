import inquirer from "inquirer";
class Person {
    personality = "Mystery";
    constructor(personality) {
        this.personality = personality;
    }
}
let p1 = new Person("Mystery");
let answer = await inquirer.prompt([{
        name: "question",
        message: "Type 1 if you like to talk to others...type 2 if you would rather keep to yourself...",
        type: "number"
    }]);
if (answer.question == 1) {
    p1.personality = "Extravert";
}
else if (answer.question == 2) {
    p1.personality = "Introvert";
}
else {
    p1.personality = "still a mystery";
}
class Program extends Person {
    input;
    constructor(personality, input) {
        super(personality);
        this.input = input;
    }
}
let program1 = new Program(p1.personality, answer.question);
class Student extends Program {
    name;
    constructor(name, personality, input) {
        super(personality, input);
        this.name = name;
    }
}
let askName = await inquirer.prompt([{
        name: "name",
        message: "What is your name? ",
        type: "input"
    }]);
let s1 = new Student(askName.name, program1.personality, program1.input);
console.log(`${s1.name}!You are ${s1.personality}`);
