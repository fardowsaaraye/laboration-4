/* Lösning till Uppgift 6. Av Fardowsa Araye, 2026 */
"use strict";

// Skapar en funktion som heter calculateArea och som tar emot bredd och höjd som parametrar //
function calculateArea(length, width)  {

// beräknar arean // 
const area = length * width;

// returnerar arean //
return area; 

}

// Anropar funktionen minst tre gånger med olika värden och skriver ut resultatet //
console.log("Arean är:",calculateArea(2,3));
console.log("Arean är:",calculateArea(4,5));
console.log("Arean är:",calculateArea(7,10));