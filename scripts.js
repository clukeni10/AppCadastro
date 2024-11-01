function replaceIconWithImage(event) {
  const file = event.target.files[0];
  const iconContainer = document.getElementById('imageIcon');

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Limpa o conteúdo atual (ícone de câmera)
      iconContainer.innerHTML = '';

      // Cria um elemento de imagem e o insere no container
      const img = document.createElement('img');
      img.src = e.target.result;
      iconContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}

const save = document.getElementById('botao');

save.addEventListener('click', () => {
  let valor1 = [];
  // Carregar dados existentes do localStorage
  if (localStorage.hasOwnProperty("valor1")) {
    valor1 = JSON.parse(localStorage.getItem("valor1"));
  }

  const nome = document.getElementById('nome').value;
  const data = document.getElementById('data').value;
  const imageInput = document.getElementById('imageInput').files[0];

  if (imageInput) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const id = valor1.length + 1; // Incrementar ID com base na quantidade de registros
      valor1.push({ id, nome, data, imagem: e.target.result }); // Adiciona ao array
      localStorage.setItem('valor1', JSON.stringify(valor1)); // Salva o array no localStorage

      console.log('Dados salvos com sucesso!');
      window.location.href="cadastro.html"; // Mensagem de sucesso aqui
    };
    reader.readAsDataURL(imageInput); // Ler a imagem selecionada
  } else {
    alert('Por favor, selecione uma imagem!');
  }
});
