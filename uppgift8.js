/* Lösning till Uppgift 8. Av Fardowsa Araye, 2026 */
"use strict";

// en objekt som representerar en book
const book =  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: "1988",
   }

    // Funnktion som skriver ut information om boken
    function printBookInfo(book)  {
    console.log(`Titel: ${book.title}`);
    console.log(`Författare: ${book.author}`);
    console.log(`Utgivningsår: ${book.publishedYear}`);
    }

    // Anropar funktionen bokobjektet 
    printBookInfo(book);
    
    
    