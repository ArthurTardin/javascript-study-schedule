# [![My Skills](https://skillicons.dev/icons?i=js)](https://skillicons.dev) [![My Skills](https://skillicons.dev/icons?i=nodejs)](https://skillicons.dev) Trilha JavaScript + Node.js Backend - Roadmap Completo

## PARTE A - JavaScript Puro (Etapas 1-16)

**Etapa 1 - Sintaxe fundamental**
Variáveis (`var`/`let`/`const` e por que `var` é evitado), tipos primitivos, coerção implícita vs explícita, template literals.
Exercício: green-field.

**Etapa 2 - Operadores e controle de fluxo**
`if/else`, `switch`, operadores lógicos e de comparação, `==` vs `===`, ternário.
Exercício: green-field.

**Etapa 3 - Loops**
`for`, `while`, `do-while`, `for...of`, `for...in`.
Exercício: **DEBUG** (loop quebrado - infinito ou off-by-one).

> **Checkpoint 1** (integra 1-3): reaproveitar exercício de loop com tipos/coerção da Etapa 1 num cenário combinado.

**Etapa 4 - Funções**
Declaração vs expressão vs arrow function, hoisting, parâmetros default, rest params.
Exercício: green-field.

**Etapa 5 - Scope e Closures**
Escopo de bloco vs função, lexical scope, closures (contadores, factories, encapsulamento sem classe).
Exercício: green-field.

**Etapa 6 - Arrays e métodos funcionais**
`map/filter/reduce/forEach/find/some/every`, quando usar cada um.
Exercício: **DEBUG** (uso incorreto de reduce/filter silenciosamente errado).

> **Checkpoint 2** (integra 4-6): refatorar exercício de loop (Etapa 3) usando métodos funcionais + closures (Etapa 5).

**Etapa 7 - Objetos**
Literais, propriedades computadas, destructuring, spread/rest.
Exercício: green-field.

**Etapa 8 - `this` e contexto**
`this` em método, função solta, arrow function; `call/apply/bind`.
Exercício: **DEBUG** (callback perdendo `this`).

**Etapa 9 - Prototypes e Classes**
Prototype chain, `class`, herança, getters/setters.
Exercício: green-field.

> **Checkpoint 3** (integra 7-9): reescrever objeto da Etapa 7 como classe usando `this` corretamente (Etapa 8).

**Etapa 10 - Tratamento de erros**
`try/catch/finally`, `throw`, erros customizados (extends Error), padrão error-first.
Exercício: green-field.

**Etapa 11 - Módulos**
CommonJS vs ESM, diferenças reais de resolução.
Exercício: green-field.

**Etapa 12 - Assincronismo I: event loop e callbacks**
Call stack, event loop, callbacks, callback hell.
Exercício: **DEBUG** (callback hell "resolvido" errado).

> **Checkpoint 4** (integra 10-12): tratamento de erro aplicado a cenário de callback.

**Etapa 13 - Assincronismo II: Promises**
`then/catch/finally`, `Promise.all/race/allSettled`.
Exercício: green-field.

**Etapa 14 - Assincronismo III: async/await**
Sintaxe, tratamento de erro assíncrono, armadilhas de concorrência (await em loop).
Exercício: **DEBUG** (await matando paralelismo sem erro visível).

**Etapa 15 - Node.js: fundamentos de runtime**
Módulos nativos (`fs`, `path`, `os`), `process`, `npm`/`package.json` básico.
Exercício: **DEBUG** (API síncrona usada onde deveria ser assíncrona).

> **Checkpoint 5** (integra 13-15 + revisita 12): mesma tarefa resolvida como callback, Promise e async/await.

**Etapa 16 - Projeto ponte**
Script/CLI Node usando fs assíncrono + tratamento de erro + módulos + async/await. Fecha a Parte A.

---

## PARTE B — Node.js Backend Avançado (Etapas 17-31)

**Etapa 17 - Event loop em profundidade**
Fases do event loop (timers, poll, check), microtask vs macrotask queue, streams e buffers (visão geral).
Exercício: **DEBUG** (ordem de execução incorreta prevista pelo aluno vs real).

**Etapa 18 - Ecossistema NPM avançado**
Semver, `package-lock.json`, scripts npm, `npx`, diferença dependencies vs devDependencies.
Exercício: green-field.

**Etapa 19 - HTTP fundamentals**
Módulo `http` nativo, ciclo request/response, status codes corretos, headers.
Exercício: **DEBUG** (servidor HTTP nativo com status code semanticamente errado).

> **Checkpoint 6** (integra 17-19): servidor HTTP nativo simples usando o que foi visto de event loop/streams.

**Etapa 20 - Framework backend (Express ou Fastify — sua escolha)**
Rotas, middleware, abstração de request/response do framework.
Exercício: green-field.

**Etapa 21 - Middleware avançado**
Middleware de erro, middleware customizado, ordem de execução e por que ordem importa.
Exercício: **DEBUG** (middleware de erro na posição errada, engolindo erro).

**Etapa 22 - Design de API REST**
Recursos, verbos HTTP corretos, status codes semânticos, versionamento básico.
Exercício: **DEBUG** (API mal desenhada — verbos/rotas incorretos — pra você corrigir).

> **Checkpoint 7** (integra 20-22): API REST mínima com middleware de erro correto.

**Etapa 23 - Validação e tratamento de input**
Schema validation (zod ou joi), sanitização, erro estruturado (conecta com Etapa 10).
Exercício: green-field.

**Etapa 24 - Integração com banco de dados**
Driver nativo (`pg`) vs query builder vs ORM — decisão consciente. Conecta direto com sua trilha SQL.
Exercício: green-field.

**Etapa 25 - Camada de acesso a dados**
Repository pattern, separação de responsabilidade (query fora do controller).
Exercício: **DEBUG** (query dentro do controller — acoplamento pra você identificar e corrigir).

> **Checkpoint 8** (integra 23-25): API com validação + banco + repository, tudo junto.

**Etapa 26 - Autenticação e autorização**
Hash de senha (bcrypt), sessions vs JWT, middleware de auth, por que JWT não guarda dado sensível.
Exercício: green-field.

**Etapa 27 - Segurança básica de API**
CORS, rate limiting, helmet, `.env` e por que secret não vai pro git.
Exercício: **DEBUG** (config de CORS/env exposta incorretamente).

**Etapa 28 - Testes automatizados**
Unit test (Jest ou Vitest), mock de dependência, integration test básico de rota.
Exercício: **DEBUG** (teste que passa mas não testa nada — false positive pra você identificar).

> **Checkpoint 9** (integra 26-28): rota autenticada, protegida, com teste cobrindo caso de sucesso e falha de auth.

**Etapa 29 - Logging e observabilidade básica**
Log estruturado, níveis de log, por que `console.log` não é logging de produção.
Exercício: green-field.

**Etapa 30 - Deploy e containerização**
Dockerfile para app Node, variáveis de ambiente em produção, diferença dev/prod.
Exercício: green-field (você já tem Docker rodando via SQL/C#, aqui é aplicar a Node).

**Etapa 31 - Projeto de consolidação final**
API REST completa: CRUD com Postgres real, auth, validação, testes, logging, containerizada. Fecha a trilha inteira.

---
