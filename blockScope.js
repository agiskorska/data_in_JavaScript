// How do each of these types of variable declarations behave with the if block?

function telescope(){
    var a = "near";
    let b = "near";
    const c = "near";
    d = "near";

    if (true){
        var a = "far";
        let b = "far";
        const c = "far";
        d = "far";
    };

    console.log(`a is ${a}.`);
    console.log(`b is ${b}.`);
    console.log(`c is ${c}.`);
    console.log(`d is ${d}.`);
};

// telescope();