/* Lösning till Uppgift 2. Av Fardowsa Araye, 2026 */
"use strict";
/* Skapar variabel för produktens pris och antal produkter */
const price = 100;
const quantity = 3;

/* Räknar ut priset för alla produkter */
const totalPrice = price * quantity;

/* Lägger till 25% moms på totalpriset */
const totalPriceIncludingVat = totalPrice * 1.25;

/* skriver ut priset, antalet och de beräknade resultaten */
console.log("Pris:",price,"kr");
console.log("Antal",quantity);
console.log("Totalt:", totalPrice,"kr");
console.log("Totalt inklusive moms:", totalPriceIncludingVat,"kr");
