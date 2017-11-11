var express = require('express');
var app = express();
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});

app.get('/', function(request, response){
    response.sendFile(__dirname+ "/public/VacationPlanner.html");
});
app.get('/styles/VacationPlanner.css', function(request, response){
    response.sendFile(__dirname+ "/public/styles/VacationPlanner.css");
});
app.get('/scripts/VacationPlanner.js', function(request, response){
    response.sendFile(__dirname+ "/public/scripts/VacationPlanner.js");
});
app.get('/CostaRicaManuelAntonio.jpg', function(request, response){
    response.sendFile(__dirname+ "/public/CostaRicaManuelAntonio.jpg");
});
app.get('/CostaRicaManuelAntonio2.jpg', function(request, response){
    response.sendFile(__dirname+ "/public/CostaRicaManuelAntonio2.jpg");
});
app.get('/CostaRicaManuelAntonio3.jpg', function(request, response){
    response.sendFile(__dirname+ "/public/CostaRicaManuelAntonio3.jpg");
});
app.get('/CostaRicaManuelAntonio4.jpg', function(request, response){
    response.sendFile(__dirname+ "/public/CostaRicaManuelAntonio4.jpg");
});