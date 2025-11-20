# 🧮 Calculadora de Partidas Rankeadas

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)
![Feito com JavaScript](https://img.shields.io/badge/Feito%20com-JavaScript-yellow)

<img src="https://raw.githubusercontent.com/flpcs/desafio-rank/main/assets/ranked-banner.png" alt="Banner do Projeto" width="100%"/>


## 📘 Descrição

Este projeto foi desenvolvido como parte de um desafio da plataforma [DIO](https://www.dio.me/), com o objetivo de praticar os fundamentos da programação em JavaScript. A proposta é criar uma função que calcule o saldo de vitórias de um jogador e determine seu nível com base nesse saldo.

## 🛠 Tecnologias Utilizadas

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão
- Funções

## 🎯 Objetivo

Criar uma função que receba como parâmetros a quantidade de **vitórias** e **derrotas** de um jogador. A partir disso, calcular o **saldo de Rankeadas** com a fórmula:

saldo = vitórias - derrotas

# Com base no número de vitórias, o jogador será classificado em um dos seguintes níveis:
| Vitórias             | Nível     |
|----------------------|-----------|
| Menor que 10         | Ferro     |
| Entre 11 e 20        | Bronze    |
| Entre 21 e 50        | Prata     |
| Entre 51 e 80        | Ouro      |
| Entre 81 e 90        | Diamante  |
| Entre 91 e 100       | Lendário  |
| 101 ou mais          | Imortal   |



## 🖥️ Código

function rankeada(vitoria, derrota) {
    let saldoRankeada = vitoria - derrota;
    let nivelRankeada = '';

    if (vitoria < 10) nivelRankeada = 'Ferro';
    if (vitoria >= 10 && vitoria <= 20) nivelRankeada = 'Bronze';
    if (vitoria >= 20 && vitoria <= 50) nivelRankeada = 'Prata';
    if (vitoria >= 50 && vitoria <= 80) nivelRankeada = 'Ouro';
    if (vitoria >= 80 && vitoria <= 90) nivelRankeada = 'Diamante';
    if (vitoria >= 90 && vitoria <= 100) nivelRankeada = 'Lendário';
    if (vitoria >= 101) nivelRankeada = 'Imortal';

    return `O Herói está com saldo de ${saldoRankeada} e está no nível ${nivelRankeada}.`;
}

console.log(rankeada(32, 15));


## 📤 Saída Esperada

O Herói está com saldo de 17 e está no nível Prata.



Bons estudos e boa codificação! 😉

-------------------------------------------------------------------

## 🇺🇸 English Version

# 🧮 Ranked Match Calculator

![Project Status](https://img.shields.io/badge/Status-Finished-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Built with JavaScript](https://img.shields.io/badge/Built%20with-JavaScript-yellow)

<img src="https://raw.githubusercontent.com/flpcs/desafio-rank/main/assets/ranked-banner.png" alt="Project Banner" width="100%"/>

## 📘 Description

This project was developed as part of a challenge from the [DIO](https://www.dio.me/) platform, aiming to practice JavaScript fundamentals. The goal is to create a function that calculates a player's victory balance and determines their rank level based on that balance.

## 🛠 Technologies Used

- Variables
- Operators
- Loops
- Conditional structures
- Functions

## 🎯 Objective

Create a function that receives the number of **wins** and **losses** as parameters. Then calculate the **Ranked balance** using the formula:

balance = wins - losses

# Based on the number of wins, the player will be classified into one of the following levels:
| Wins                 | Level     |
|----------------------|-----------|
| Less than 10         | Iron      |
| Between 11 and 20    | Bronze    |
| Between 21 and 50    | Silver    |
| Between 51 and 80    | Gold      |
| Between 81 and 90    | Diamond   |
| Between 91 and 100   | Legendary |
| 101 or more          | Immortal  |


## 🖥️ Code
function ranked(victory, defeat) {
    let rankedBalance = victory - defeat;
    let rankedLevel = '';

    if (victory < 10) rankedLevel = 'Iron';
    if (victory >= 10 && victory <= 20) rankedLevel = 'Bronze';
    if (victory >= 20 && victory <= 50) rankedLevel = 'Silver';
    if (victory >= 50 && victory <= 80) rankedLevel = 'Gold';
    if (victory >= 80 && victory <= 90) rankedLevel = 'Diamond';
    if (victory >= 90 && victory <= 100) rankedLevel = 'Legendary';
    if (victory >= 101) rankedLevel = 'Immortal';

    return `The Hero has a balance of ${rankedBalance} and is ranked as ${rankedLevel}.`;
}

console.log(rankeada(32, 15));


## 📤 Expected Output
The Hero has a balance of 17 and is ranked as Silver.



Happy coding! 😉

---

Se quiser, posso gerar a imagem ilustrativa do banner (`ranked-banner.png`) para você agora. Quer que eu crie?


