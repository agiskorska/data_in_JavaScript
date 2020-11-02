// How does this behave with var, let and const?
// What if we move the variable declaration to the top of the function?

function shapely(){
    const blah = 'in shape'
    console.log(`I am so ${blah}.`) 


    console.log(`I am so ${blah}.`)
};


shapely()


// // What about function declarations?
// function shapely(){
//     console.log(`I am so ${blah()}.`)

//     function blah(){
//         return 'in shape';
//     }

//     console.log(`I am so ${blah()}.`)
// };


// What about variables that point to anonymous functions?
// function shapely(){
//     console.log(`I am so ${blah()}.`)
    
//     var blah = () => 'in shape';
//     // var blah = function(){
//     //     return 'in shape'
//     // }

//     console.log(`I am so ${blah()}.`)
// };



// Use https://ui.dev/ to help visulalize execution contexts (supports ES5 only)