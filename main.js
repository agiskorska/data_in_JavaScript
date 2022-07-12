const catName = "Zelda";
let catLocation = "London";

function takeMeHome(){
    return catLocation = "Cornwall";
};

function rename(newName){
    catName = newName;
};

module.exports = {
    catName, catLocation, takeMeHome, rename
}