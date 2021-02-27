let catName;
const catLocation = "London";

function takeMeHome(){
    catLocation = "Cornwall";
};

function rename(newName){
    catName = newName;
};

module.exports = {
    catName, catLocation, takeMeHome, rename
}