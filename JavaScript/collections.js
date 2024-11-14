var cars = ["Saab", "Volvo", "BMW", "Porsche"];

var car_name = "Audi"

function gate(car_name) {
    if (cars.includes(car_name)) {
        console.log("You may proceed")
    } else { 
        console.log("Nuh-uh")
    }
}
gate(car_name)