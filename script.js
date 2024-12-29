// Definindo os blocos de números
const blocos = [
    [6, 13, 34, 45, 47, 51, 57],
    [2, 3, 13, 23, 25, 31, 43],
    [1, 3, 21, 39, 44, 51, 56],
    [3, 13, 19, 31, 32, 49, 60],
    [11, 19, 26, 36, 46, 48, 59],
    [3, 9, 10, 16, 32, 35, 51],
    [3, 6, 18, 25, 41, 50, 54],
    [1, 18, 24, 29, 35, 41, 49],
    [4, 15, 39, 41, 46, 55, 58],
    [21, 23, 24, 29, 35, 45, 49],
    [1, 10, 16, 21, 30, 31, 54],
    [2, 18, 19, 34, 35, 36, 60],
    [3, 18, 28, 36, 38, 49, 56],
    [6, 13, 19, 25, 29, 58, 59],
    [9, 23, 38, 43, 53, 59, 60],
    [7, 25, 30, 31, 41, 45, 55],
    [2, 8, 14, 21, 29, 40, 45],
    [14, 18, 20, 26, 28, 36, 47],
    [13, 19, 21, 34, 49, 50, 56],
    [4, 23, 44, 47, 53, 54, 56],
    [4, 10, 31, 50, 53, 55],
    [3, 11, 13, 15, 19, 23],
    [1, 2, 11, 12, 24, 25],
    [7, 11, 25, 45, 58, 60],
    [1, 3, 4, 37, 43, 44],
    [1, 14, 23, 46, 50, 56],
    [1, 4, 6, 16, 20, 42],
    [1, 8, 9, 17, 19, 41],
    [1, 6, 8, 10, 46, 51],
    [1, 3, 7, 9, 17, 37],
    [1, 2, 3, 7, 9, 29],
    [5, 6, 13, 19, 20, 21],
    [2, 5, 6, 31, 37, 38],
    [4, 8, 12, 25, 37, 43],
    [23, 25, 36, 40, 57, 60],
    [1, 2, 4, 18, 33, 59],
    [1, 8, 12, 15, 25, 27],
    [2, 12, 15, 24, 30, 31],
    [3, 4, 6, 8, 10, 11],
    [7, 12, 16, 20, 25, 27],
    [2, 5, 12, 32, 48, 55],
    [3, 9, 13, 17, 45, 52],
    [7, 17, 25, 37, 43, 58],
    [3, 4, 7, 46, 51, 59],
    [11, 14, 19, 25, 29, 37],
    [30, 31, 34, 43, 50, 60],
    [3, 10, 34, 35, 46, 56],
    [2, 25, 27, 33, 35, 42],
    [16, 24, 37, 39, 58, 59],
    [6, 7, 27, 44, 45, 47],
    [19, 34, 43, 53, 54, 57],
    [1, 13, 14, 27, 53, 54],
    [10, 16, 23, 34, 44, 47],
    [2, 18, 28, 36, 46, 48],
    [5, 16, 18, 26, 39, 47],
    [6, 7, 9, 15, 25, 31],
    [2, 4, 18, 35, 36, 50],
    [11, 15, 30, 31, 46, 52],
    [12, 20, 39, 54, 57, 59],
    [23, 35, 4, 41, 52, 58],
    
  ];
  
  // Criando os campos de entrada
  const inputFields = document.getElementById("input-fields");
  for (let i = 0; i < 6; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "0";
    inputFields.appendChild(input);
  }
  
  function verificarNumeros() {
    const inputs = Array.from(inputFields.querySelectorAll("input"));
    const numerosUsuario = inputs.map(input => parseInt(input.value) || 0);
    const errorMessage = document.getElementById("error-message");
    const resultsContainer = document.getElementById("results");
    const successMessage = document.getElementById("success-message");
  
    // Limpa mensagens anteriores
    errorMessage.textContent = "";
    resultsContainer.innerHTML = "";
    successMessage.textContent = "";
    successMessage.style.display = "none";
  
    // Verifica se todos os campos estão preenchidos
    if (numerosUsuario.some(num => num === 0)) {
      errorMessage.textContent = "Por favor, preencha todos os 6 números.";
      return;
    }
  
    // Calcula os acertos
    let acertouTudo = false;
    const acertos = blocos.map((bloco, index) => {
      const acertos = bloco.filter(num => numerosUsuario.includes(num)).length;
      if (acertos === 6) {
        acertouTudo = true;
      }
      return { jogo: index + 1, acertos };
    });
  
    // Exibe os resultados
    acertos.forEach(({ jogo, acertos }) => {
      const resultDiv = document.createElement("div");
      resultDiv.className = "result";
      resultDiv.textContent = `JOGO ${jogo}: ${acertos} acertos`;
      resultsContainer.appendChild(resultDiv);
    });
  
    // Exibe mensagem de sucesso se acertar todos os números
    if (acertouTudo) {
      successMessage.textContent = "Parabéns! Você acertou todos os 6 números em um dos jogos!";
      successMessage.style.display = "block";
      successMessage.className = "success";
    }
  }
  
