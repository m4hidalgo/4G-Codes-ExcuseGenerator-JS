let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function ExcusesGenerator(){
    let result = "";


    result += who[getRndInteger(0, who.length)]+" ";
    result += action[getRndInteger(0, action.length)]+" ";
    result += what[getRndInteger(0, what.length)]+" ";
    result += when[getRndInteger(0, when.length)]+" ";

    return document.getElementById("excuse").innerHTML = result;


}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

document.getElementById("button").onclick = function() {ExcusesGenerator()};