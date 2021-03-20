// document.getElementById("rs3").innerHTML = localStorage.getItem("rs3");
const cars = JSON.parse(localStorage.getItem('cars'));


function addProduct(product, price) {
 var car = { }
 car.name = product ; 
 car.price = price ; 
 cars.push(car) ; 
 localStorage.setItem('cars',JSON.stringify(cars))
}



