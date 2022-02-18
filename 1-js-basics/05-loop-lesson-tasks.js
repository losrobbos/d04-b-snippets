let index = 0;
while (index < 10) {
    console.log(index);
    index++;
}
/*
for-Schleife
    Vorteile
        1. kompakte Syntax
        2. Weniger Fehler (z.B. Endlosschleife)
    Wichtig: index mit let initialisieren
*/
"use strict";
for (let index = 0; index < 10; index++) {
    console.log("for-Schleife", index);
}
​
// Beispiel: alle geraden Zahlen von 100 bis 120
const evenNumbers = [];
for (let index = 100; index < 120; index += 2) {
    evenNumbers.push(index);
}
console.log(evenNumbers);
​
// Beispiel: Ein Array mit 50 ungeraden Zahlen aufbauen
const oddNumbers = [];
​
for (let index = 1; oddNumbers.length < 50; index += 2) {
    oddNumbers.push(index);
};
console.log(oddNumbers);
console.log("länge des Arrays", oddNumbers.length);
​
/*
Nested Array
*/
console.log(0, 1, 2, 3, 4, 5);
​
const obergrenze = 5;
​
for (let index = 0; index < 10; index++) {
​
    // Breite
    let string = "";
    for (let counter = 0; counter <= 10; counter++) {
        string = string + counter + " ";
    }
    console.log(string);
};
​
​
console.log(" 1 1 1 2 2 2 3 3 3 ");
console.log(" 1 1 1 2 2 2 3 3 3 ");
console.log(" 1 1 1 2 2 2 3 3 3 ");
​
for (let repeat = 0; repeat < 3; repeat++) {
    let zahlenString = "";
    for (let index = 1; index <= 3; index++) {
        for (let counter = 0; counter < 3; counter++) {
            zahlenString = zahlenString + index + " ";
        };
    };
    console.log(zahlenString);
};
​
/*
Aufgabe
Liste an Mitarbeitern enthält zehn Mitarbeiternamen und soll in der Konsole ausgegeben werden.
Jeder Name soll ausgegeben werden mit dem Text: z.B.: "John ist Mitarbeiter in der Firma".
*/
const employees = ["John", "Bob", "Chuck", "Robert", "Pete", "Nancy", "Ana", "Francy", "Sammy"];
//console.log("John ist Mitarbeiter in der Firma");
//console.log("Bob ist Mitarbeiter in der Firma");
// ... verwende eine for-Schleife.
​
//for(let index = employees.length; index > 0; index--){
//    console.log(`${employees[index - 1]} ist Mitabeiter in der Firma!`);
//}
​
for(let employeeIndex in employees){
    console.log(employeeIndex);
    console.log(`${employees[employeeIndex]} ist Mitarbeiter in der Firma`);
};
​
/*
Alle Mitarbeitergehälter werde um 100€ erhöht
*/
const salaries = [3300, 2100, 4500, 2500, 4100, 2550, 3500, 2890, 3000];
const salaries2022 = [];
​
for(let salariesIndex of salaries){
    salaries2022.push(salaries[salariesIndex] + 100);
}
​
console.log(salaries2022);
​
/*
while
*/
index = 0;
while(index < salaries.length){
    salaries2022.push(salaries[index] + 100);
    index++;
};
​
/*
for Schleife
*/
for(let index = 0; index < salaries.length; index++){
    salaries2022.push(salaries[index] + 100);
}
​
/*
for-in Schleife
(Kritik: for-in-Schleifen sind in der Ausführung etwas langsamer)
Vorteil: Fehlervermeidung
*/
for(let salariesIndex in salaries){
    salaries2022.push(salaries[salariesIndex] + 100);
};
​
/*
for-of-loop
*/
const customers = ["Dan", "Franky", "Sarah", "Henry", "Chuck"];
​
for(let customer of customers){
    console.log(`${customer} is customer of the company`);
}
​
const myString = "Hello World! How have you been? Have a nice day!";
const myArray = [];
for(let letter of myString){
    myArray.push(letter);
}
console.log(myArray);
​
/*
 Array mit Zahlen. Sortiere die Zahlen im Array in zwei neue Arrays, eines mit ungeraden Zahlen und geraden Zahlen.
*/
// Array mit allen Zahlen
const numbers = [54, 23, 7, 11, 342, 89, 67, 41, 97, 35];
// Initial angelegte Arrays
const evenIntegers = [];
const oddIntegers = [];
​
// für alle Zahlen im Array
for(let number of numbers){
    if(number % 2 === 0){
        // die Zahl ist gerade
        evenIntegers.push(number);
    } else {
        // die Zahl ist ungerade
        oddIntegers.push(number);
    }
}
// Konsolenausgabe
console.log("Array mit geraden Zahlen:", evenIntegers);
console.log("Array mit ungeraden Zahlen:", oddIntegers);