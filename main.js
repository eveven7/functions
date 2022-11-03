
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
//-----------------------


findCharNum("Tekstas grazuolis!");

function findCharNum(text) {
    // text.replace(/\s/g, ''); => panaikina tekste esancius tarpus
    text = text.replace(/\s/g, '');
    console.log("Tekste esanciu simboliu sk: " + text.length);
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


console.log(findNum(40));
// atranda is kiek skaiciu argumentas dalijasi be liekanos
function findNum(number) {
    // sveiku skaiciu (is kuriu argumentas dalijasi be liekanos) kiekis 
    let intNum = 0;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            intNum++;
        }
    }
    return intNum;
}


console.log(" 5uzd ------------------------------------------------------");

//Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.

function createArray(min, max, length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        let randomNum = Math.round(Math.random() * (max - min) + min)
        array[i] = randomNum;
    }
    return array
}
let newArray = createArray(33, 77, 100);
console.log(newArray);

const num = [13, 17, 14, 19, 16];
let temp;
for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
        if (findNum(newArray[i]) <= findNum(newArray[j])) {
            temp = newArray[i]
            newArray[i] = newArray[j]
            newArray[j] = temp
        }
    }
}
console.log(newArray);

console.log(" 6uzd ------------------------------------------------------");
//atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

function kiekSveikuSkaiciu(sk) {
    let sum = 0;
    for (let i = 2; i < sk; i++) {
        if (sk % i === 0) {
            sum++;
        }
    }
    return sum;
    //   console.log(`${sk} dalinasi is ${sum} sveiku skaiciu.`);
}
let masyvas1 = [];
for (let i = 0; i < 100; i++) {
    let skaicius = rand(333, 777);
    if (kiekSveikuSkaiciu(skaicius)) {
        masyvas1[i] = skaicius;
    }
}
console.log(masyvas1);

console.log(" 7uzd ------------------------------------------------------");
//Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let masyvasAtsitiktinis = [];
let masyvoIlgis = rand(10, 20);
let paskutinis = [];
let paskutinioIlgis = rand(10, 20);

let pakartotasIlgis = rand(10, 30);

for (let k = 0; k < pakartotasIlgis; k++) {
    let pakartotas = [];
    for (let i = 0; i < masyvoIlgis; i++) {
        masyvasAtsitiktinis.push(rand(0, 10));
        if (i < masyvoIlgis - 1) {
            continue;
        } else for (let j = 0; j < paskutinioIlgis; j++) {
            paskutinis.push(rand(0, 10));
        }
        masyvasAtsitiktinis[masyvasAtsitiktinis.length] = paskutinis;
        paskutinis[paskutinioIlgis] = 0;
    }
    pakartotas.push(masyvasAtsitiktinis);
    console.log(pakartotas);
}

console.log(" 7uzd ------------------------------------------------------");


//------------------------------------------

let masyvas2 = function () {
    let masyvas = [];
    masyvas.length = rand(10, 20);
    for (let i = 0; i < masyvas.length; i++) {
        for (let a = 0; a < masyvas.length - 1; a++) {
            masyvas[a] = rand(0, 10);
            masyvas[i] = masyvas[a];
        }
        masyvas[i] = [];
    }
    console.log(masyvas);
};
masyvas2();

