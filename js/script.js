console.log('You are at '+window.location);
var money = prompt("сколько у вас денег?"); 
var apples = prompt("сколько у вас яблок?"); 
var hleb = prompt("сколько у вас хлеба?"); 
var apple = prompt("сколько стоит одно яблоко?")*apples; 
var onehleb = prompt("сколько стоит батон?")*hleb; 
var spent = apple+onehleb; 
var total = money - spent; 
Boolean(money >= spent);
let result = money >= spent;

document.body.innerHTML = result

