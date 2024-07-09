class Laptop{
    private ram: number[] = [
        2,2,4
    ];
    constructor(public laptopName:string) {}

    private totalRam(): string{
        let total = 0;
        this.ram.every(r => total= total+r);
        return `${total} GB`;
    }

    addRam(capacity: number): string{
        this.ram.push(capacity);
        return this.totalRam();
    }
    static printName(laptop: Laptop){
        console.log(laptop.laptopName);
    }
}

// const laptop: Laptop = new Laptop('Laptop1');
// Laptop.printName(laptop);
// console.log(laptop.addRam(3));
