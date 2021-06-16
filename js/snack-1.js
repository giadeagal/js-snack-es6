// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let randoNum = (a, b) => Math.floor(Math.random() * (b - a) ) + a;
let docuPrint = (a, b) => document.getElementById(a).innerHTML = b;

const listaBici = [
    {
        nome: "gialla",
        peso: randoNum(5, 10)
    },
    {
        nome: "rossa",
        peso: randoNum(5, 10)
    },
    {
        nome: "bianca",
        peso: randoNum(5, 10)
    },
    {
        nome: "nera",
        peso: randoNum(5, 10)
    },
    {
        nome: "antica",
        peso: randoNum(5, 10)
    },
];
let miniBici = listaBici[0];

for (let i = 0; i < listaBici.length; i++) {
    if (miniBici.peso>listaBici[i].peso)
    miniBici = listaBici[i]
}
const {nome, peso} = miniBici;

const toPrint = 
`

<ul>
    <li> 
        bici: "${nome}"  
        <ul>
            <li>
                peso: ${peso} kg
            </li>
        </ul>
    </li>
</ul>

`;

docuPrint("text", toPrint);