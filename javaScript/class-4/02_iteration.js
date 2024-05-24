//Iteration:

//what are loops:
// structures that are allow repeating a block of code multiple times,used to perform repetative task efficiently.

//Types:-
//1. for loop
//2. while loop
//3. do-while loop

//for ... loop:-
// Syntax-

//for (initialization'condition; increment/decrement){
      //code to be execute
//}
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }
// for (let i = 0; i < 5; i++){
//    console.log("*");
//  }
// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 5; j++){
//         console.log("*");
//     }
//   }

//DRY RUN:-
// i = 0
//condition : 0 < 5 => true
// console.log(0);
//i++(1)
//condition : 1 < 5 => true
//console.log(1);
//i++(2)
//condition : 2 < 5 => true
//console.log(2);
// .
// .
// .
// i = 4
//condition : 4 < 5 => true
//console.log(4);
//i++(5)
// i = 5
//condition : 5 < 5 => false
//terminate the loop

//while ... loop :
// Syntax-

 //while (condition){
    //code
 //}

 //let 1 = 0;
 //while (i < 5){
    //console.log(i);
    //i++;

 //}

//DRY RUN :
 
//do ... while loop :
// Syntax-

//let i = 0;
//do {
    //console.log(i);
    //i++
//} while (i < 5);

//DRY RUN
