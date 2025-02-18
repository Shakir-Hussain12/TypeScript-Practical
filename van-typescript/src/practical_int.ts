interface Computer {
    readonly id: string,
    brand: string,
    ram: number,
    storage?: number,
    upgradeRam(upg_value: number): number,
}

let PC: Computer = {
    id: 'PC-101',
    brand: 'MSI',
    ram: 32,
    storage: 512,
    upgradeRam(upg_value) {
        if (upg_value % 4 === 0) {
            this.ram += upg_value;
        }

        return this.ram;
    }
}

console.log(PC.upgradeRam(15));

interface Person {
    name: string,
    age: number,
    gender: string
};

interface DogOwner {
    dogName: string,
    dogAge: number,
}

interface Job extends Person, DogOwner {
    jobTitle: string,
    jobLocation: string,
    getDetails?(): Job,
}
