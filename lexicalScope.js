let intro = "Hello!"

function outerCircle(){
    let message = "You have access to the outer circle!";
    console.log("\nYou have entered the outer circle!\n******")
    console.log(intro);
    console.log(message);
    console.log(secretMessage);

    function innerCircle(){
        let secretMessage = "You have access to the inner circle!";
        console.log("\nYou have entered the inner circle!\n******")
        console.log(intro);
        console.log(message);
        console.log(secretMessage);
    }

    innerCircle();
};

console.log(intro);
console.log(message);
console.log(secretMessage);

outerCircle();