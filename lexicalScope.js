var intro = "Hello!"
var item 

function outerCircle(){
    var message = "You have access to the outer circle!";
    item = "thing"
    // console.log("\nYou have entered the outer circle!\n******")
    // console.log(intro);
    // console.log(message);
    // console.log(secretMessage);
    
    function innerCircle(){
        var secretMessage = "You have access to the inner circle!";
        var intro = "Inner intro"
        console.log("\nYou have entered the inner circle!\n******")
        console.log(intro);
        console.log(message);
        console.log(secretMessage);
    }
    innerCircle();
};


// outerCircle();

// console.log(intro);
// console.log(message);
// console.log(item)
// console.log(secretMessage);
