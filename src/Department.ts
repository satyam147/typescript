class Department {
    protected employers: string[] = []
    constructor(public readonly id:string,public name:string) {}

    print(){
        console.log(`
        Department ID : ${this.id} \n
        Department Name : ${this.name}
        `)
    }

    addEmployer(name: string): void{
        if(this.employers.includes(name)) return
        this.employers.push(name);
    }

    printEmployers(){
        this.employers.forEach(emp => console.log(emp+'\n'))
    }

    changeName(name: string){
        this.name = name;
    }
}


class ItDepartment extends Department{
    private laptops : string[] = []
    constructor(public readonly id:string) {
        super(id,'IT Department');
    }

    addEmployer(name: string) {
        this.employers.push(name)
    }

    addLaptop(laptop: string){
        this.laptops.push(laptop)
    }

    printLaptops() {
        this.laptops.forEach(laptop => console.log(laptop))
    }

}
const department = new Department('dep','abc')
console.log(department)

const itDepartment = new ItDepartment('it');
// itDepartment.print()
itDepartment.addEmployer('emp1')
itDepartment.addEmployer('emp1')
// itDepartment.printEmployers()
itDepartment.addLaptop('laptop')
// itDepartment.printLaptops()

class AccountingDepartment extends Department {
    private accountants: string[] = [];
    constructor(id: string) {
        super(id,'Accounting Department');
    }

    addAccountant(name: string){
        if(!this.employers.includes(name)) {
            console.log('Not an Employee')
            return
        }
        this.accountants.push(name);
    }

    printAccountants(){
        console.log(this.accountants)
    }
}

const accounting = new AccountingDepartment('acc')
accounting.print()
accounting.addAccountant('acc 1')
accounting.printAccountants()
accounting.addEmployer('acc 1')
accounting.printEmployers()
accounting.addAccountant('acc 1')
accounting.printAccountants()


