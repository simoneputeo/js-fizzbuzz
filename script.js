//1. Definisco la stampa incrementale dei numeri da 1 a 100 usando for
for (let i = 1; i <= 100; i++)
//2. Inserisco la prima regola che i numeri divisibili per 15 restituiranno FizzBuzz
{   if (i % 15 === 0) {
    console.log("FizzBuzz");}
//3. Inserisco la seconda regola che i numeri divisibili per 3 restituiranno Fizz
 else if (i % 3 === 0) {
    console.log("Fizz");}
//4. Inserisco la terza regola che i numeri divisibili per 5 restituiranno Buzz
else if (i%5===0){
    console.log("Buzz");}
//5. Inserisco la quarta regola che i numeri rimanenti restituiranno il proprio valore
else {console.log(i);}
 }