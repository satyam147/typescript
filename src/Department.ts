abstract class Department {
    protected employers: {name: string,id:number}[] = []
    constructor(public readonly id:string,public name:string) {}

    print(){
        console.log(`
        Department ID : ${this.id} \n
        Department Name : ${this.name}
        `)
    }

    set employer(name: {name: string,id:number}){
        if(this.employers.find(e =>e.name == name.name)) return
        this.employers.push(name);
    }

    get employer(){
        return this.employers[this.employers.length - 1]
    }

    static generateID(): number{
       return Math.floor(Math.random() * 90000) + 10000;
    }

    abstract printEmployers(): void;


    changeName(name: string){
        this.name = name;
    }
}


class ItDepartment extends Department{
    private laptops : string[] = []
    constructor(public readonly id:string) {
        super(id,'IT Department');
    }



    addLaptop(laptop: string){
        this.laptops.push(laptop)
    }

    printLaptops() {
        this.laptops.forEach(laptop => console.log(laptop))
    }

    printEmployers(){
        console.log('override in IT Department \n')
        this.employers.forEach(emp => console.log(emp.id))
    }


}

const itDepartment = new ItDepartment('it');
// itDepartment.print()

itDepartment.employer ={name:'emp1',id:Department.generateID()};
itDepartment.printEmployers();
itDepartment.employer ={name:'emp2',id:Department.generateID()};
itDepartment.printEmployers();
// console.log(itDepartment.employer)
// itDepartment.printEmployers()
itDepartment.addLaptop('laptop')
// itDepartment.printLaptops()

class AccountingDepartment extends Department {
    private accountants: string[] = [];
    constructor(id: string) {
        super(id,'Accounting Department');
    }

    addAccountant(name: {name: string,id:number}){
        if(this.employers.find(e =>e.name == name.name)) {
            console.log('Not an Employee')
            return
        }
        this.accountants.push(name.name);
    }

    printAccountants(){
        console.log(this.accountants)
    }

    printEmployers(){
        console.log('overriden in Accounting Department \n')
        this.employers.forEach(emp => console.log(emp.name))
    }
}

const accounting = new AccountingDepartment('acc')
// accounting.print()
// accounting.addAccountant('acc 1')
// accounting.printAccountants()
accounting.employer = {name:'acc 1',id:Department.generateID()};
accounting.printEmployers()
accounting.addAccountant({name:'acc 1',id:Department.generateID()});
accounting.printAccountants()

class  HRDepartment extends Department {
    constructor(id: string) {
        super(id,'HR Department');
    }

    printEmployers() {
        console.log('overriden in HR Department \n')
        this.employers.forEach(emp => console.log(emp.name))
    }

}

const hr = new HRDepartment('hr')
hr.employer = {name:'hr 1',id:Department.generateID()};
hr.employer = {name:'hr 2',id:Department.generateID()};
hr.printEmployers()


