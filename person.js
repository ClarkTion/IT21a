class Person {

    constructor(name, age,occupation){
        this.name=name;
        this.age=age;
        this.occupation=occupation;
    }
    getName(){
        console.log(this.name);
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }
}

const Person1 = new Person ("Clark David E. Tion", 18, "Gamer");

Person1.getName();
Person1.displayInfo();