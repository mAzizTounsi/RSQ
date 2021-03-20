

const cars = JSON.parse(localStorage.getItem('cars'));  

$(document).ready(function(){
    $.each(cars,function(index,value){
        $('#result').append( value.name + ' : ' + value.price + '<br>' );
    }) 

     
  })
 
    




