const perguntas =[
    {
        texto:"Qual era o verdadeiro nome de Cora Coralina?",
        opcoes:["Anna Lins dos Guimarães Peixoto Bretas", "Ana Maria Machado", "Cecília Meireles", "Rachel de Queiroz"],
        respostaCorreta: 0
    },
    {
        texto:"Qual ano Cora Carolina nasceu?",
        opcoes: ["1886", "1887", "1888", "1889"],
        respostaCorreta: 3
    },
    {
        texto:"Qual é sua obra mais famosa",
        opcoes:["Meu Livro de Cordel", "Poemas dos Becos de Goiás e Estórias Mais", "Vinté de Cobre - Meias Confissões de Aninha"],
        respostaCorreta: 1
    },
    {
        texto: "Em sua literatura, Cora Coralina falava sobre temas:",
        opcoes: ["A vida simples, infância, trabalho e as mulheres", "A vida díficil, velhice, trabalho e as mulheres", "A vida simples, a infância, trabalho e a vida dos homens", "A vida díficil, adulto, trabalho e a vida das mulheres"],
        respostaCorreta: 0
    },
    {
        texto:"DESAFIO - 'Cora Coralina faleceu em 1985, aos 95 anos. Mesmo tendo alcançado reconhecimento literário principalmente na velhice, tornou-se uma das escritoras mais conhecidas da literatura brasileira'. Na sua trajetória de vida, em qual momento da vida ela conquistou seu reconhecimento literário?",
        opcoes: ["Criança", "Adolecência", "Adulto", "Velhice"],
        respostaCorreta: 3
    }
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});