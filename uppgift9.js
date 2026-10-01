/* Lösning till Uppgift 9. Av Fardowsa Araye, 2026 */
"use strict";
// Array som innehåller tre objekt
const people = [
    {
        name: "Amani",
        age: 26, 
        city: "Stockholm"
        },
        { 
        name: "Naomi",
        age: 30,
        city: "Göteborg"
         },
         {
        name: "Iman",
        age: 17, 
        city: "Malmö"
        }
        ];
        
// funktion som skriver ut information om varje person i arrayen
function printPeopleInfo(person) {
    
        if (person.age >= 18) {
            console.log(`${person.name} bor i ${person.city} och är myndig.`);
        } else {
            console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
        }
}
// går igenom arrayen med en loop
for (let i = 0; i < people.length; i++) {
    printPeopleInfo(people[i]);
}
