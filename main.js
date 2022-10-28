
// 1 uzd 

console.log(" 1 uzd ------------------------------------------------------");
let result = daugyba(3, 1);

function daugyba(a, b) {

    console.log(a * b);
}


console.log(" 2 uzd ------------------------------------------------------");

labas("Evelina");
function labas(name) {

    console.log("labas " + name);
}


console.log(" 3 uzd ------------------------------------------------------");
var str = "Tekstas grazuolis!";

var count = 0;

for (var i = 0; i < str.length; i++) {

    count++;

}

console.log("Siame tekste tiek yra simboliu " + count);

console.log(" 4 uzd ------------------------------------------------------");

const str1 = 'evelina venckute';
const arr = str1.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);


console.log(" 5 uzd ------------------------------------------------------");

printDivContent("Labas");

function printDivContent(contentOfDiv) {
    document.getElementById("numberPlace").innerHTML = contentOfDiv;

}
console.log(" 7 uzd ------------------------------------------------------");

var string = "";
var numberOfRandomNumbers = 3;
for (var i = 0; i < numberOfRandomNumbers; i++) {
    var randomNumber = Math.floor((Math.random() * 5));
    string += randomNumber + ",";
}
console.log(string.substring(0, string.length - 1));


console.log(" 8 uzd ------------------------------------------------------");
let rest8 = myFunction(20, 30);
console.log(rest8);
function myFunction(nuo, iki) {

    return (nuo) + Math.round(Math.random() * (iki - (nuo)));

}



console.log(" 9 uzd ------------------------------------------------------");
addParagraphs();
function addParagraphs() {
    let container = document.getElementById("sequence");
    let HTML = "";
    for (let i = 1; i < 11; i++) {
        HTML += "<p>" + i + "</p>";

    }
    container.innerHTML = HTML;
}

console.log(" 1 uzd VIDUTINIAI ------------------------------------------------------");


function exponent(a, n) {
    if (n === 0) {
        return 1;
    }
    else {
        return a * exponent(a, n - 1);
    }
};

console.log(exponent(4, 2));
// console.log(exponent(2, 5));


console.log(" 1 uzd VIDUTINIAI KITAS SPRENDIMO BUDAS ------------------------------------------------------");


let kint1 = 2;
let kint2 = 3;

function laipsnis(num, pow) {
    if (pow == 0) {
        return 1;
    }
    let laipsnis = num;
    for (let u = 0; u < pow - 1; u++) {
        laipsnis *= num;

    }
    return laipsnis;

}


console.log(" 2 uzd VIDUTINIAI ------------------------------------------------------");

let rest2 = pirma(2, 50, "laipsnis");


function pirma(a, n, rest2) {
    let container = document.getElementById("laipsnis");
    container.innerText = exponent(a, n);

}

console.log(" Sunkesni ------------------------------------------------------");

console.log(" 1uzd ------------------------------------------------------");

insert();
function insert() {
    let container1 = document.getElementById("myHeader");
    container1.innerHTML += " iterpta";
}

console.log(" 2uzd ------------------------------------------------------");


insert1();
function insert1() {
    let container2 = document.getElementById("myHeader1");
    container2.innerHTML += " iterpta antra kart";
    container2.innerHTML += " " + (1 + Math.floor(Math.random() * 5));
}

console.log(" 3uzd ------------------------------------------------------");

let x = Math.random().toString(36).slice(-5);
console.log(x);

if (x.match(/\d+/g) != 0) {
    let container2 = document.getElementById("myHeader1");
    let digitsOnlyString = x.replace(/[^0-9]/g, '');


    container2.innerHTML += " " + digitsOnlyString;

}
else {
    for (let i = 0; i < x.length; i++) {
        const element = x[i];

    }
    container2.innerHTML += element;

}

console.log(" 4uzd ------------------------------------------------------");

//Parašykite funkciją, kuri skaičiuotų, 
//iš kiek sveikų skaičių jos argumentas dalijasi 
//be liekanos (išskyrus vienetą ir patį save



console.log(" 5uzd ------------------------------------------------------");


// var arr4 = Math.floor(Math.random() * (77 - 33));
let arr4 = [];
// console.log(arr4);

for (let a = 0; a < 10; a++) {
    arr4[a] = Math.floor(Math.random() * (77 - 33));
}
console.log(arr4);

// for (let i = 0; i < arr4.length; i++) {
//     const element = array[i];

// }

console.log(" 6uzd ------------------------------------------------------");
function find(number) {
    let Num = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            Num++;
        }
    }
    return Num++;
}


console.log(" 7uzd ------------------------------------------------------");


let newArray = createArray(33, 77, 100);
console.log(newArray);