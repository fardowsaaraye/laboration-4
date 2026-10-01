/* Lösning till Uppgift 7. Av Fardowsa Araye, 2026 */
"use strict";

// En array med minst sex tal 
const numbers = [2, 4, 6, 8, 10, 12];

// Skapa en funktion som tar emot arrayen som parameter 
    function calculateSum(numbers){
        let sum = 0;
        
        // loppar igenom arrayen  
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
         }
         // Returnerar summan
        return sum;
}
// Skriver ut resultat 
console.log("Summan är:" + calculateSum(numbers));


