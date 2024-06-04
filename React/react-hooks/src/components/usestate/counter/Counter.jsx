// import React, { useState } from 'react';

// const Counter = () => {
//     //let count = 0;in javascript
//     //function setCount(count) {
//         //return count;
//     //} setCount(5)//function call

//     const [count, setCount] = useState(0);

//     function add() {
//         if (count===10) {
//             return 0 ;
//         }else {
//      setCount((prev) => prev + 1);
       
        
//        }
//     }

//     function reduce() {
//         if(count ===0){
//             setCount(0);
//         }else {
//         setCount((prev) => prev - 1);
//     }
// }

//   return (
//     <div>
//         <h1>Here the counter value is: {count}</h1>
//         <button onClick={add}>Add</button>
//         <button onClick={reduce}>Reduce</button>
//     </div>
//   );
// };

// export default Counter;