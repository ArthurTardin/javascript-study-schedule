const nome = "Arthur";
let idade = 17;

console.log("Olá, me chamo " + nome + " e tenho " + idade);
console.log(`Olá, me chamo ${nome} e tenho ${idade}`);

// nome = "pablo";
// Erro dado:

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\adm\Desktop\Familia_Organizada\01_Arthur\Programacao\javascript-study-schedule\01-sintaxe-fundamental\exercicios\exercicios.js:7:6)
//     at Module._compile (node:internal/modules/cjs/loader:1830:14)
//     at Object..js (node:internal/modules/cjs/loader:1961:10)
//     at Module.load (node:internal/modules/cjs/loader:1553:32)
//     at Module._load (node:internal/modules/cjs/loader:1355:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47