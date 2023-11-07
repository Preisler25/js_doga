/*Készíts egy fejszámolást gyakorló JavaScript kvíz alkalmazást az alábbi leírás alapján!

1. Készíts egy segédfüggvényt, amely egy egész számot generál a megadott intervallumban.
Be: a, b egész számok
Ki: egész szám az [a; b) intervallumban.
Képlet: lefeléKerekítés( véletlenSzám0és1között() * (b-a) ) + a
Ha függvény paramétere hibás (a >= b), akkor a visszatérési érték legyen NaN.

2. Az oldal betöltésekor generálj 2 egész számot a 100-200 intervallumban, ezt jelenítsd meg a felhasználónak.
A felhasználó feladata, hogy a két számot összeadja, és egy erre elhelyezett beviteli mezőbe begépelje.
A "Mehet" gombra kattintva a program ellenőrizze, hogy az eredmény helyes-e.
A felhasználónak 3 próbálkozása van.

Siker esetén az oldal háttere változzon zöldre, és jelenjen meg egy "Helyes!" feliratú üzenet.
Ha nem találta el, de még van próbálkozása, a szöveges mező háttere váltson sárgára, és jelenjen meg egy "hibaüzenet", ahol a felhasználó látja, hány próbálkozása van még.
Ha nincs több próbálkozása, akkor az oldal háttere változzon (olvasható) pirosra, és jelenítse meg a helyes megoldást.
Új játékot az oldal újratöltésével lehet kezdeni.
Pluszpontért helyezz el egy gombot, amivel új játékot lehet kezdeni újratöltés nélkül (generálj új véletlen számokat, a stílust állítsd alaphelyzetbe stb.)
 */
let display1 = document.querySelector('#display1');
let result = document.querySelector('#result');
let button = document.querySelector('#button');
let trys_left = 3;

let num1 = seged(100, 200);
let num2 = seged(100, 200);
let sum = num1 + num2;

const seged = (a, b) => {
    if (a >= b) {
        return NaN;
    }
    return Math.floor(Math.random() * (b - a)) + a;
}

button.addEventListener('click', () => {
    

    display1.innerHTML = `${num1} + ${num2} = `;
    result.value = '';
    result.focus();
});
