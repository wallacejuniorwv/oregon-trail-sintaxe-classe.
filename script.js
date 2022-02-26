
class Traveler {
    constructor(name) {
        this._name = name;
        this._food = 1;
        this._isHealthy = true;
    }

    // Getters and Setters

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name
    }

    get food() {
        return this._food
    }

    set food(food) {
        this._food = food
    }

    get isHealthy() {
        return this._isHealthy
    }

    set isHealthy(isHealthy) {
        this._isHealthy = isHealthy
    }



    hunt() {
        return this.food += 2;
    }

    eat() {
        if (this.food > 0) {
            this.food -= 1;
            this.isHealthy = true;
        } else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor(capacity) {
        this._capacity = capacity;
        this._passengers = [];
    }

    // Getters and Setters

    get capacity() {
        return this._capacity;
    }

    set capacity(capacity) {
        this._capacity = capacity
    }

    get passengers() {
        return this._passengers
    }

    set passengers(passengers) {
        this._passengers = passengers
    }

    getAvailableSeatCount() {
        //const vazio = this.capacity - this.passengers.length
        //return vazio
        return this.capacity - this.passengers.length

    }

    join(viajante) {
        if (this.capacity > this.passengers.length) {
            this.passengers.push(viajante)
        }
    }


    shouldQuarantine() {
        for (let i = 0; i < this.passengers.length; i++) {
            const pessoa = this.passengers[i];
            if (!pessoa.isHealthy) {
                return true
            }
        }
        return false;
    }

    totalFood() {
        let total = 0;
        for (let index = 0; index < this.passengers.length; index++) {
            const pessoa = this.passengers[index];
            total += pessoa.food;
        }
        return total;
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
