class Hero{
    #health;
    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }
    getHealth(){
        return this.#health;

    }

    
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);

    }
}
    const warrior = new Warrior("Thorin", 100, 10);
    warrior.useAbility();


class Archmage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
         console.log(`${this.name} uses AVADA KEDAVA`);
    }
}

    const archmage = new Archmage("Voldemort", 100, 10);
    archmage.useAbility(); 