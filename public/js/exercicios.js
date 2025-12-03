const capitulos = [
    {
    "id": 1,
    "titulo": "Capítulo-01: HTML e CSS",
    "video": "../assets/video/video.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/4hRTNbQIfzYxpZ",
    "exercicios": [

      {
        "pergunta": "Qual tag HTML é usada para criar um link?",
        "alternativas":
        
        [ "img",
          "a",
          "link", 
          "button", 
          "p"],
        
        "correta": "2"
      },
      {
        "pergunta": "Qual tag HTML é usada para inserir uma imagem?",
        "alternativas": [
            "image", 
            "picture", 
            "img", 
            "src", 
            "href"


        ]
      },

      {
        "pergunta": "Como você altera a cor do texto em CSS?",
        "alternativas": [
            "Color: red",
            "Font-size: Large" , 
            "Display: flex" , 
            "Background-color: red" , 
            "border-color: red"
        ]

      },

      {
        "pergunta": "O que faz a propriedade background-color no CSS?",
        "alternativas": 
        
        [ "Muda a cor da borda do elemento", 
          "Muda a cor do texto",
          "Muda a cor de fundo do elemento", 
          "Muda a cor da fonte", 
          "Muda a cor das letras"]

      },
      {
        "pergunta":"Como você cria a estrutura de uma lista não ordenada em HTML?",
        "alternativas":
        
        ["ul - li - ul", 
        "ol - li - ol", 
        "div - div", 
        "form - input - button - button - form", 
        "p - p"]

      }
    ]
  },

  {
    "id": 2,
    "titulo": "Capítulo-02: Javascript",
    "video": "../assets/video/video.mp4",
    "material": "https://www.example.com/material2",
    "exercicios": [
      {
        "pergunta": "Qual a diferença entre var e let?",
        "alternativas": [
            "let pode ser redeclarado no mesmo escopo",
            "var tem escopo de bloco",
            "let possui escopo de bloco e var de função",
            "Não existe diferença entre eles"]
      },

      {
         "pergunta": "Qual comando é utilizado para selecionar um elemento pelo id no HTML?",
         "alternativas":[
                "document.getElementid",
                "document.querySelectorAll",
                "document.getElementById",
                "document.selectId"
         ]
      },

      {
        "pergunta": "Qual é a diferença entre == e ===?",
        "alternativas":[
                "Nenhuma diferença",
                "=== compara só o valor",
                "== compara só o tipo",
                "=== compara o valor e o tipo"   
        ]
      },

      {
        "pergunta": "Qual evento detecta clique?",
        "alternativas": [
                    "onpress",
                    "onchange",
                    "onclick",
                    "onhover"
        ]
      },

      {
        "pergunta": "5- Como você soma dois números em JavaScript?",
        "alternativas":[

            "let total = a + b;",
            "let total = a & b;",
            "let total = a || b;",
            "let total = a ++ b;"
        ]    
      }

    ]
  },

{
   "id": 3,
    "titulo": "Capítulo-03: Java",
    "video": "video3.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/7fpkN1Qt7coCeb",
    "exercicios": [
        {
            "pergunta": "Qual comando é utilizado para selecionar um elemento pelo id no HTML?"
            
        }
    ]
}
];

let capituloAtual = 0;

//=========== FUNÇÃO PRINCIPAL ===========
function carregarCapitulo(index) {
  const capitulo = capitulos[index];

  document.getElementById('titulo-capitulo').innerText = capitulo.titulo;
  document.getElementById('material-iframe').src = capitulo.material;
  
  const lista = document.getElementById('lista-exercicios');
  lista.innerHTML = "";

  capitulo.exercicios.forEach((ex, i) => {
    const div = document.createElement("div");
    div.classList.add("questao");

    let alternativasHTML = "";

    ex.alternativas.forEach((alt, indexAlt) => {
      alternativasHTML += `
        <label>
          <input type="radio" name="q${i}" value="${indexAlt}">
          ${alt}
        </label><br>
      `;
    });

    div.innerHTML = `
      <p><strong>Questão ${i + 1}:</strong> ${ex.pergunta}</p>
      <div class="alternativas">${alternativasHTML}</div>
    `;

    lista.appendChild(div);
  });

  const video = document.getElementById('video-player');

    video.innerHTML = `
    <source src="${capitulo.video}" type="video/mp4">
    `;
 video.load();


}

//=========== BOTÕES DE NAVEGAÇÃO ===========
const btnAnterior = document.querySelector('.nav-btn:nth-child(1)');
const btnProximo = document.querySelector('.nav-btn:nth-child(2)');

btnAnterior.addEventListener('click', () => {
  if (capituloAtual > 0) {
    capituloAtual--;
    carregarCapitulo(capituloAtual);
  }
});

btnProximo.addEventListener('click', () => {
  if (capituloAtual < capitulos.length - 1) {
    capituloAtual++;
    carregarCapitulo(capituloAtual);
  }
});

// CARREGA PRIMEIRO AUTOMÁTICO
carregarCapitulo(capituloAtual);


// ==============================
// 1. MENU DE PERFIL (ABRIR/FECHAR)
// ==============================

const profileIcon = document.querySelector(".profile-icon");

const menu = document.createElement("div");
menu.classList.add("profile-menu");
menu.innerHTML = `
    <a href="#">Meu Perfil</a>
    <a href="#">Sair</a>
`;

profileIcon.appendChild(menu);

profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
});

// Fecha se clicar fora
document.addEventListener("click", (e) => {
    if (!profileIcon.contains(e.target)) {
        menu.classList.remove("open");
    }
});

// ==============================
// 2. CORREÇÃO DAS QUESTÕES
// ==============================

const respostasCorretas = {
    questao1: "b",
    questao2: "c",
    questao3: "a",
    questao4: "c",
    questao5: "a"
};

const btnEnviar = document.querySelector(".submit-btn");

btnEnviar.addEventListener("click", () => {

    let pontos = 0;
    const total = Object.keys(respostasCorretas).length;

    for (let questao in respostasCorretas) {
        const marcada = document.querySelector(
            `input[name="${questao}"]:checked`
        );

        const alternativas = document.querySelectorAll(
            `input[name="${questao}"]:`
        );

        alternativas.forEach(input => {
            let label = input.parentElement;

            label.style.background = "#fff";
            label.style.borderRadius = "5px";
            label.style.padding = "5px";
            label.style.display = "block";

            if (input.value === respostasCorretas[questao]) {
                label.style.border = "2px solid green";
            }
        });

        if (marcada && marcada.value === respostasCorretas[questao]) {
            pontos++;

            marcada.parentElement.style.background = "#c8f7c5";
        } 
        else if (marcada) {
            marcada.parentElement.style.background = "#f7c5c5";
        }
    }

    alert(`Você acertou ${pontos} de ${total} questões!`);
});

