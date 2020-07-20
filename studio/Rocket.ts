import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

class myPayload implements Payload{ 
    massKg: number;
}

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: myPayload[] ): number {
        let total:number = 0;
        for (var i in items) {
            total = total + items[i].massKg;
        }
        return total;
    }

    currentMassKg(): number {
        let mass: number = 0;
        mass = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return mass;
    }

    canAdd( item: Payload ): boolean {
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
        return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}