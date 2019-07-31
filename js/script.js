console.log('You are at '+window.location);
var money = prompt("сколько денег?"); 
var apples = prompt("сколько яблок?"); 
var hleb = prompt("сколько хлеба?"); 
var apple = prompt("сколько за одно яблоко?")*apples; 
var onehleb = prompt("сколько за батон?")*hleb; 
var spent = apple+onehleb; 
var total = money - spent; 
Boolean(money >= spent);

