const header = document.querySelector(".header");
const button = document.querySelector("#toggle-button");

button.addEventListener("click", () => {
  header.classList.toggle("open");
});

// grafico de despesas
document.addEventListener("DOMContentLoaded", function () {
  // Dados de exemplo para as receitas mensais
  var dadosReceitas = {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
    ],
    datasets: [
      {
        label: "Receitas Mensais",
        data: [150, 350, 500, 1000, 750, 1150, 850],
        backgroundColor: "rgba(138, 43, 226, 0.5)", // Cor roxa com transparência
        hoverBackgroundColor: "rgba(138, 43, 226, 1)", // Cor roxa quando passa por cima
        borderRadius: 8, // Adiciona border-radius
        borderWidth: 0, // Sem borda
      },
    ],
  };

  var configuracoes = {
    type: "bar",
    data: dadosReceitas,
    options: {
      scales: {
        y: {
          beginAtZero: false, // Se definido como true, o eixo y começará em zero
          ticks: {
            stepSize: 250, // Define a distância entre os valores
            max: 2000, // Valor máximo no eixo y
            min: 0, // Valor mínimo no eixo y
          },
        },
      },
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
      },
    },
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById("receitasChart").getContext("2d");

  // Cria o gráfico usando o tema 'modern' do Chart.js
  Chart.defaults.font.size = 14; // Ajusta o tamanho da fonte
  var meuGrafico = new Chart(ctx, configuracoes);
});
