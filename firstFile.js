//1
let hamburger = 3;
let potato = 1;
if(hamburger == 3 && potato == 1){
    console.log('"Ми поїли"');
 } else {
    console.log('Ми йдемо в інше кафе');
 }

 
//2
let productPrice = 1000;
if(productPrice >= 1000 && productPrice <= 1900){
   console.log(productPrice);
}



//3
if(productPrice <= 1000 || productPrice >= 1900){
   console.log(productPrice);
} 



//4
let season = 6;
if(season == 1){
   console.log("Winter");
} else if(season == 2){
   console.log("Spring");
} else if(season == 3){
   console.log("Summer");
} else if(season == 4){
   console.log("Autum");
} else{
   console.log("No season");
}



//5
let a = 18;
let b = 17;
let c = 22;
if ((a > b && a < c) || (a > c && a < b)){
   console.log("a = " + a);
}else if ((b < a && b > c) || (b < c && b > a)){
   console.log("b = " + b);
}else if((c < a && c > b) || (c < b && c > a)){
   console.log("c = " + c);
}



//6
let weekDay = 8;
switch(weekDay){
   case 1:
      console.log("Weekday is " + weekDay)
      break;
   case 2: 
      console.log("Weekday is " + weekDay)
      break;
   case 3:
      console.log("Weekday is " + weekDay)
      break;
   case 4:
      console.log("Weekday is " + weekDay)
      break;
   case 5:
      console.log("Weekday is " + weekDay)
      break;
   case 6:
      console.log("Weekday is " + weekDay)
      break;
   case 7:
      console.log("Weekday is " + weekDay)
      break;
   default: 
   console.log('This is default output')
   break; 
}


//7
let operation = '/';
let firstNumber = 30;
let seondNumber = 2;
let result = 0;
switch(operation){
   case '+':
      result = firstNumber + seondNumber;
      console.log("Result is " + result)
      break;
   case '*': 
      result = firstNumber * seondNumber;
      console.log("Result is " + result)
      break;
   case '/':
      result = firstNumber / seondNumber;
      console.log("Result is " + result)
      break;
   case '-':
      result = firstNumber - seondNumber;
      console.log("Result is " + result)
      break;
   default: 
   console.log('This is default output')
   break; 
}


//8
let text = 'weather';
console.log(text.replace(/[a]|[e]|[o]|[u]|[i]|[y]/gi, ' '));



//9 я не поняла какое правильное округление имеется ввиду и сделала как в показывает в калькуляторе
// по переводу https://www.calconi.com/en/length_conversion/info/converter_kilometer_meter.php
let m = 0;
let km = 0.02;
if(m != 0){
   console.log(m + " m is " + (m / 1000) + " km");
}else{
   console.log(km + " km is " + (km * 1000) + " m");
}