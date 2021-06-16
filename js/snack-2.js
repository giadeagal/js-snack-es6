// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.
let randoNum = (a, b) => Math.floor(Math.random() * (b - a) ) + a;
let docuPrint = (a, b) => document.getElementById(a).innerHTML = b;

const teamList = [
    {
        nome: "gialli",
        punti: randoNum(0, 20),
        falli: randoNum(0, 50)
    },
    {
        nome: "rossi",
        punti: randoNum(0, 20),
        falli: randoNum(0, 50)
    },
    {
        nome: "verdi",
        punti: randoNum(0, 20),
        falli: randoNum(0, 50)
    },
    {
        nome: "bianchi",
        punti: randoNum(0, 20),
        falli: randoNum(0, 50)
    },
    {
        nome: "neri",
        punti: randoNum(0, 20),
        falli: randoNum(0, 50)
    }
];

const falliList = [];

for (let i = 0; i < teamList.length; i++) {
    const {nome, falli} = teamList[i];
    falliList.push({nome, falli})
}

console.log(falliList)