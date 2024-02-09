const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos",
        "Concatenação de strings",
        "Divisão de números"
      ],
      correta: 0
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      respostas: [
        "let = minhaVariavel",
        "variable minhaVariavel",
        "let minhaVariavel"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um modelo de objeto para interagir com elementos HTML",
        "Um método de loop"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um comentário no código",
        "Um bloco de código reutilizável",
        "Um operador lógico"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener'?",
      respostas: [
        "Modificar o estilo de um elemento",
        "Manipular eventos de mouse e teclado",
        "Realizar cálculos matemáticos"
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma linguagem de estilização",
        "Um formato de dados para troca de informações",
        "Um método de iteração de arrays"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, são sinônimos",
        "let é utilizado para valores constantes, const para variáveis mutáveis",
        "const é utilizado para valores constantes, let para variáveis mutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o conceito de 'escopo' em JavaScript?",
      respostas: [
        "A velocidade de execução do código",
        "A área do código onde uma variável é acessível",
        "Um tipo de dado primitivo"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'map' em arrays?",
      respostas: [
        "Modificar o tamanho de um array",
        "Criar um novo array transformando cada elemento do array original",
        "Ordenar os elementos de um array"
      ],
      correta: 1
    }
  ];
  
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
     //loop ou laço de repetição
      for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta //false
  
          corretas.delete(item)
          if(estaCorreta) {
            corretas.add(item)
          }
  
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
     }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }
  