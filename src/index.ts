const num:number =1;
const string:string = '1';
const boolean:boolean = true;
const obj:object = {};
const arr2:number[] = [1,2,3];
const arr4:string[] = ['1','2','3'];
const arr6:object[] = [{}];
const arr7:boolean[] = [true,false];
const arr8:any[] = [1,'1',true,{}];
const arr10:(number|string)[] = [1,'1',];

const func = (a:number,b:number):number => a+b;

function func2(a:number,b:number):number{
    return a+b;
}

let tuple:[number,string] = [1,'1'];

enum Color{
    Red='red',
    Green='green',
    Blue='blue'
}

