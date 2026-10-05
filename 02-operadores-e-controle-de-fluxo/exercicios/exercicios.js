// Exercício 1

const idade = 17;

if (idade >= 18) {
    console.log("adulto");
} else {
    console.log("Menor");
}


// Exercício 2

const nota = 7;

if (nota >= 9) {
    console.log("A");
} else if (nota >= 7) {
    console.log("B");
} else if (nota >= 5) {
    console.log("C");
} else {
    console.log("D");
}

// Exercício 3

const apelidoFalsy = "";

const apelido = apelidoFalsy || "sem apelido";
console.log(apelido);

// Exercício 4

const negativo = 5 === 5;
console.log(!negativo);
