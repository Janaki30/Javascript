// print/log the numbers from 1 to 100
// for multiples of three print "Fizz" instead of the numbers
// for multiples of five print "Buzz" instead of the numbers
// for  numbers which are multiples of both three & five print "FizzBuzz".

// hints

// if you have taken the course up to this PointerEvent, then you know HTMLUnknownElement 
// to write a loop and output/log something for each iteration.
// you also know how to check for a condition with "if/else/elseif".charAtyou also know how 
// to get a remindefa-rotate-180of a number using the modulus operator(%).HTMLUnknownElementto


//using For Loop
// for(let i=1; i<=100; i++)
// {
//     if(i % 3 ===0 && i % 5 === 0){
//         console.log('FizzBuzz');
//     }
//     if (i % 3 === 0){
//         console.log('Fizz');
//     } else if (1 % 5 === 0){
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

//while loop

let j =1;
while (j <= 100){
    if( j % 5 === 0){
        console.log('FizzBuzz');
    }
    else if (j % 3 === 0){
        console.log('Fizz');
    } else if (j % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(j);
    }
j++;
}