// How does this behave with var, let and const?
// What if we move the variable declaration to the top of the function?
function shapely(){
    console.log(`I am so ${status}.`)

    var status = 'in shape';

    console.log(`I am so ${status}.`)
};


// What about function declarations?
function shapely(){
    console.log(`I am so ${status}.`)

    function status(){
        return 'in shape';
    }

    console.log(`I am so ${status}.`)
};

// What about variables that point to anonymous functions?
function shapely(){
    console.log(`I am so ${status}.`)

    var status = () => 'in shape';

    console.log(`I am so ${status}.`)
};


