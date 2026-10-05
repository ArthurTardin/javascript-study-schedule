# Etapa 2 - Operadores e Controle de Fluxo

## 1. `if / else` e `switch`

Sintaticamente parecido com C#. A diferença que importa: em JS, **qualquer valor** pode entrar numa condição, não só `boolean`, e ai entra o conceito de **truthy/falsy** (ver na seção 3). Isso não existe da mesma forma em C#, onde `if` exige estritamente um `bool`.

`switch` usa `===` internamente para comparar `case` (comparação estrita, sem coerção). Ponto de atenção: sem `break`, o `switch` cai pro próximo `case` ("fall-through"), isso é comportamento intencional da linguagem, não bug, mas é fonte clássica de erro quando esquecido.

## 2. Operadores de comparação: `==` vs `===`

Você já viu isso na prática na etapa 1 (`"5" == 5` vs `"5" === 5`). Formalizando:

- **`==` (igualdade solta)**: compara valor **depois** de aplicar coerção de tipo, se os tipos forem diferentes.
- **`===` (igualdade estrita)**: compara tipo E valor, sem qualquer coerção. Se os tipos já são diferentes, retorna `false` direto.

Regra prática (sem exceção neste momento do seu aprendizado): **use sempre `===` / `!==`**. `==` tem casos "esquisitos" documentados (ex: `[] == false` é `true`) que não valem a pena decorar agora, só saber que existem e que `===` evita todos eles.

## 3. Truthy e Falsy

Todo valor em JS, quando avaliado num contexto booleano (`if`, `&&`, `||`, `!`), é convertido para `true` ou `false`. A lista de valores **falsy** é curta e fixa, todo o resto é truthy:

```js
    false, 0, -0, 0n, "", null, undefined, NaN
```

Isso inclui casos que surpreendem quem vem de outra linguagem: `"0"` (string) é **truthy** (string não vazia), mas `0` (number) é **falsy**. Uma array vazia `[]` e um objeto vazio `{}` são **truthy** (são objetos, e todo objeto é truthy, independente do conteúdo).

## 4. Operadores lógicos: `&&`, `||`, `!`, e curto-circuito

`&&` e `||` em JS não retornam necessariamente `true`/`false`. eles retornam **um dos operandos originais**, por causa de "short-circuit evaluation" (avaliação de curto-circuito):

- `a && b`: se `a` for falsy, retorna `a` sem nem avaliar `b`. Se `a` for truthy, retorna `b`.
- `a || b`: se `a` for truthy, retorna `a` sem avaliar `b`. Se `a` for falsy, retorna `b`.

Isso é usado na prática para coisas com valor default (`const nome = input || "Anônimo"`), mas atenção: como `""` e `0` são falsy, isso "quebra" para inputs que são zero ou string vazia de propósito. (Existe operador `??`, nullish coalescing, que resolve isso, mas fica para quando você encontrar a necessidade, não vou introduzir agora fora de contexto.)

## 5. Ternário

```js
    const status = idade >= 18 ? "adulto" : "menor";
```

Equivalente ao ternário de C#. Mesma regra de legibilidade se aplica: ternário aninhado (`a ? b : c ? d : e`) é evitado, se você sentir vontade de aninhar, é um sinal de que deveria ser `if/else` ou `switch`.

---

## Pergunta

Sem rodar código: qual o resultado de `console.log(0 || "" || "Arthur" || null)` e por quê? Me explique operando por operando, na ordem de avaliação, dizendo qual regra (truthy/falsy + curto-circuito) decide quando o motor para de avaliar.