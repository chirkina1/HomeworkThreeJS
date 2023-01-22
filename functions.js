 //1
function eat(hamburger, potato){
    if(hamburger == 3 && potato == 1){
        console.log('"Ми поїли"');
     } else {
        console.log('Ми йдемо в інше кафе');
     }
 }

eat(4,1);

 
//2
function checkPrice(productPrice){
    if(productPrice >= 1000 && productPrice <= 1900){
        console.log(productPrice);
     }
}

checkPrice(1000);


//3
function checkPriceNew(productPriceNew){
    if(productPriceNew <= 1000 || productPriceNew >= 1900){
        console.log(productPriceNew);
     } 
}

checkPriceNew(900);


//4
function determineSeason(season){
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
}

determineSeason(4);


//5
function middleNumber(a,b,c){
    if ((a > b && a < c) || (a > c && a < b)){
        console.log("a = " + a);
     }else if ((b < a && b > c) || (b < c && b > a)){
        console.log("b = " + b);
     }else if((c < a && c > b) || (c < b && c > a)){
        console.log("c = " + c);
     }
}
middleNumber(15,18,3);


//6
function printWeekDay(weekDay){
    switch(weekDay){
        case 1:
           console.log("Weekday is Monday = " + weekDay)
           break;
        case 2: 
           console.log("Weekday is Tuesday = " + weekDay)
           break;
        case 3:
           console.log("Weekday is Wednesday = " + weekDay)
           break;
        case 4:
           console.log("Weekday is Thusday = " + weekDay)
           break;
        case 5:
           console.log("Weekday is Friday = " + weekDay)
           break;
        case 6:
           console.log("Weekday is Saturday = " + weekDay)
           break;
        case 7:
           console.log("Weekday is Sunday = " + weekDay)
           break;
        default: 
        console.log('This is default output')
        break; 
     }
}

printWeekDay(1);


//7
function calculateExpession(operation, firstNumber, secondNumber, result){
    switch(operation){
        case '+':
           result = firstNumber + secondNumber;
           return result;
        case '*': 
           result = firstNumber * secondNumber;
           return result;
        case '/':
           result = firstNumber / secondNumber;
           return result;
        case '-':
           result = firstNumber - secondNumber;
           return result;
        default: 
        console.log('This is default output')
        break; 
     }
} 

let resultNum = calculateExpession('+', 30, 2, 0);
console.log(resultNum);



//8
function deleteVowels(text){
    let resultText;
    resultText = text.replace(/[a]|[e]|[o]|[u]|[i]|[y]/gi, ' ');
    return resultText;
}

let resulOftText = deleteVowels('weather');
console.log(resulOftText);



//9 я не поняла какое правильное округление имеется ввиду и сделала как в показывает в калькуляторе
// по переводу https://www.calconi.com/en/length_conversion/info/converter_kilometer_meter.php

function convertMeasure(m, km){
    if(m != 0){
        console.log(m + " m is " + (m / 1000) + " km");
        }else{
        console.log(km + " km is " + (km * 1000) + " m");
    }
}

convertMeasure(1000, 0);
