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