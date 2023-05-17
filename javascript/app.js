// //console.error('this is so me errror');
//console.clear('');
//console.warn('this is a warning');
//const
//const name =' janu';
//can not reassign
//name ='Bhushan';
// const person = {
//     name: 'Janu',
//     age: 30
// }
// person.name = 'Sara';
// person.age = 32;
// console.log(person);
// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);


// //primitive
// // string
// const name='janu';
// //number
// const age=45;
// //boolean
// const isgood=true;
// //null
// const car=null;
// //undefined
// const sym = Symbol();


// //Reference types-objects
// //array
// const likes =['movies','pets'];
// //object literal
// const address={
//     city:'nellore',
//     state:'ap'
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);


// //type conversion

// let val;
// //number to string
// val= String(555);
// val= String(4+4);
// //bool to string
// val= String(true);
// //date to string
// val=String(new Date());
// //array to string
// val=String([1,2,3,4]);
// //output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// window.console.log(window);
// console.log(document);

 //variables& constants
//  var car="BMW";
// // const
// let price=1000;
// var a,b,c;
// a=10
// b=30
// c=30
// console.log(a,b,c)//here we are using multiple variables at a time
// //replace const into let then it works
//  price++;
//  console.log(price);//it shows error beacuse increment operator dosen't exits in const -> means values can't change

//  date and time
//let d;
// d = new Date();
// d = d.toString();
// d = new Date(2021, 0, 10, 12, 30, 0);
// d = new Date('2021-07-10T10:10:00');
// console.log(d);

//Functions
// function add(num1,num2){
//     console.log(num1+num2);
// }
// add(5,10);
// function subtract(num1,num2){
//     return num1-num2;// here it doesn't return the value, because in backend we call any function then it works
//     console.log('after the return');
// }
// const result = subtract(10,2);
// console.log(result, subtract(20,15));
//function scope and global
// function add(){
//     const x = 1;
//     const y =50;
//     console.log(x+y);
// }
// add();
// //block scope
// for(let i=0; i<=10; i++){
//     console.log(i)
// }

// if(true){
//     const a =50;
//     let b=30;
//     var c=40;

// }
// console.log(c);

//function declarations&expressions
function addAndSign(value){
    return '&'+value;
}
console.log(addAndSign(300));
//function expression
const addPlusSign = function (value) {
    return '+' + value;
};
console.log(addPlusSign(400));
//if else & nesting
const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();
if (hour < 12){
console.log('Good Morning');
}else if (hour < 18){
    console.log('Good Afternoon');
}else{
    console.log('Good Night');
}
//Nested If
if (hour < 12){
    console.log('Good Morning');

    if(hour===6){
        console.log('wakeup');
    }
    }else if (hour < 18){
        console.log('Good Afternoon');
    }else{
        console.log('Good Night');
    }
    if(hour>=20){
        console.log('zzzzzz');
    }
    
    if(hour>=7 && hpur<15){
        console.log('It is working time!');
    }
//array.foreach

const cars =['BMW','Audi', 'bench'];
//console.lof(cars._proto_);
cars.forEach(function(item){
    console.log(item)
})