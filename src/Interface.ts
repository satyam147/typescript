
// type Add = (a: number, b: number) => number;
interface Add {
    (a: number, b: number): number
}
const a: Add = (a: number,b: number) => {
    return a+b;
}

interface IDepartment   {
    id: string;
    name?: string|undefined;
    employers: {id?: string;name:string}[];
}


let department: IDepartment = {
    id : 'dep',
    employers: [
        {id:'123',name:'emp1'}
    ]
}

let itdepartment: IDepartment = {
    id : 'dep',
    name: 'Department',
    employers: [
        {id:'123',name:'emp1'}
    ]
}

interface IPerson  {
    readonly id: string;
    name: string;
    hello(message?: string): void;
}

class Person implements IPerson {
    constructor(public id: string,public name:string) {
    }

    hello(){
        console.log('hello : ' + this.name);
    }
}

class Person2 implements IPerson{
    constructor(public id: string,public name:string) {
    }

    hello(message: string) {
        console.log(message+' : ' + this.name);
    }
}

const person1: IPerson = new Person('123','person 1')
person1.hello()
const person3: IPerson = new Person('789','person 3')
person3.hello()
const person2: IPerson = new Person2('456','person 2')
person2.hello('hello')


interface IEmployer extends IPerson {

}

class Emploer implements IEmployer{
    constructor(public id: string,public name:string) {

    }

    hello() {
        console.log('hello : ' + this.name);
    }
}

class D {
    static instance : D;
    name?: string
    private constructor() {
    }

    static getInstance(): D {
        if(!this.instance){
            this.instance = new D();
        }
        return this.instance;
    }

    setName(name: string) {
        this.name = name
    }
}

const d :D = D.getInstance();
d.name = 'Demo'
console.log(d);

const d2 = D.getInstance();
console.log(d2)

