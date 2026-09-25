# Etapa 1 — Sintaxe Fundamental

## 1. Declaração de variáveis: `var`, `let`, `const`

JavaScript tem três formas de declarar variável, e elas não são intercambiáveis por estilo, têm comportamento diferente de verdade.

- **`var`**: escopo de função (não de bloco). Sofre "hoisting", a declaração sobe pro topo do escopo, mas fica inicializada como `undefined` até a linha onde você realmente atribui. Isso significa que você pode "usar antes de declarar" sem erro, só recebe `undefined`. Também permite redeclaração da mesma variável no mesmo escopo sem erro.
- **`let`**: escopo de bloco (`{}`). Também sofre hoisting, mas fica numa "zona morta temporal" (temporal dead zone), tentar usar antes da declaração dá erro (`ReferenceError`), não `undefined`. Não permite redeclaração no mesmo escopo.
- **`const`**: igual a `let` em escopo e TDZ, mas a referência não pode ser reatribuída após a declaração. Atenção: isso **não significa imutável**. Um objeto ou array declarado com `const` pode ter suas propriedades/itens alterados, só a variável em si não pode apontar para outro valor.

`var` é evitado hoje porque escopo de função + hoisting silencioso gera bugs difíceis de rastrear (variável "escapando" de um loop, por exemplo). Você vai ver isso na prática no exercício de debug de loops (Etapa 3), mas já fica registrado aqui.

## 2. Tipos primitivos

JavaScript tem 7 tipos primitivos: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`. Os que importam agora:

- **`number`**: não existe distinção entre inteiro e decimal (não tem `int` vs `float` como C#). Todo número é IEEE 754 double-precision. Isso tem consequência prática: `0.1 + 0.2 !== 0.3` por imprecisão de ponto flutuante.
- **`string`**: aspas simples, duplas ou template literals (crase), funcionalmente equivalentes, exceto template literals.
- **`boolean`**: `true`/`false`.
- **`undefined`**: variável declarada mas sem valor atribuído.
- **`null`**: ausência de valor atribuída **intencionalmente** por quem escreveu o código. `typeof null` retorna `"object"`, isso é um bug histórico da linguagem, não lógica, e você precisa saber que existe.

## 3. Coerção implícita vs explícita

JavaScript converte tipos automaticamente em certas operações (coerção implícita), o que gera resultados que parecem "errados" se você não souber a regra:

- `"5" + 3` → `"53"` (o `+` com string concatena, converte o número pra string)
- `"5" - 3` → `2` (o `-` não tem significado pra string, então converte a string pra número)
- `"5" == 5` → `true` (o `==` faz coerção antes de comparar)
- `"5" === 5` → `false` (o `===` compara tipo E valor, sem coerção)

Coerção explícita é você fazendo a conversão de propósito: `Number("5")`, `String(5)`, `Boolean(0)`. Regra prática: em código de produção, **use `===`/`!==` sempre**, e converta tipos explicitamente quando precisar. Coerção implícita em comparação é fonte clássica de bug.

## 4. Template literals

Sintaxe com crase (`` ` ``) permite interpolação de variável direto na string, sem concatenação manual:

```js
const nome = "Arthur";
const idade = 20;
console.log(`Nome: ${nome}, Idade: ${idade}`);
```

Também permite string multi-linha sem `\n` manual. É a forma padrão hoje, concatenação com `+` pra montar string dinâmica é considerada estilo antigo.