interface Computer {
    readonly id: string,
    brand: string,
    ram: number,
    storage?: number,
    upgradeRam(upg_value: number): boolean,
}
