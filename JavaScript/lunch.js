var names = ["Pam", "Jim", "Dwight", "Michael", "Karen"]

function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    console.log(randomPerson + " is going to buy lunch today")
}

whosPaying(names)