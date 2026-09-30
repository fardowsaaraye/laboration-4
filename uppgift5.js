/* Lösning till Uppgift 5. Av Fardowsa Araye, 2026 */
"use strict";

// fem valfria maträtter //
const dish = ["Pizza", "Sushi", "Lasagne", "Tacos", "Pasta"];

// 1. Skriv ut hela arrayen // 
console.log(dish);

// 2. Skriv ut det första elementen i arrayen //
console.log(dish[0]);

// 3. Skriv ut det sista elementet i arrayen //
console.log(dish[4]);

// 4. lägg till en ny maträtt sist i arrayen //
dish.push("Fiskburgare");
console.log(dish);

// 5. Ta bort den första matträtten i arrayen // 
dish.shift();
console.log(dish);