class person {

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

const person1 = new person ("Clark David E. Tion", 18, "Gamer");

person1.getName();
person1.displayInfo();