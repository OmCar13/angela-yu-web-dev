function HouseKeeper (name, yearsOfExperience, cleaningRepertoire){
    this.name = name; 
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleanHouse = function () {
        this.cleanHouse();
        alert("The house has been cleaned");

    }
}

var HouseKeeper1 = new HouseKeeper("Jane", 12, ["bathroom", "bedroom", "lobby"])


console.log(HouseKeeper1)
console.log(HouseKeeper1.name)