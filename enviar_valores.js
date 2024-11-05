// Função para substituir o ícone de imagem pelo arquivo selecionado
function replaceIconWithImage(event) {
    const file = event.target.files?.[0]; // O arquivo selecionado no input
    const iconContainer = document.getElementById('imageIcon'); // Container onde a imagem será exibida
    if (file) {
        const reader = new FileReader(); // Cria um objeto FileReader
        reader.onload = function (e) {
            // Limpa o conteúdo atual (ícone de câmera)
            iconContainer.innerHTML = '';
            // Cria um elemento de imagem e o insere no container
            const img = document.createElement('img');
            img.src = e.target?.result; // Define a URL da imagem como o conteúdo do FileReader
            iconContainer.appendChild(img); // Adiciona a imagem ao container
        };
        reader.readAsDataURL(file); // Converte o arquivo em uma URL base64
    }
}
const save = document.getElementById('botao'); // Tipo do botão de salvar
save.addEventListener('click', () => {
    let valor1 = []; // Define o array de registros com o tipo 'Registro'
    // Carregar dados existentes do localStorage
    if (localStorage.hasOwnProperty("valor1")) {
        valor1 = JSON.parse(localStorage.getItem("valor1")); // Faz o parse de valor1
    }
    const nome = document.getElementById('nome').value; // Campo 'nome'
    const data = document.getElementById('data').value; // Campo 'data'
    const imageInput = document.getElementById('imageInput').files?.[0]; // Arquivo de imagem
    // Validação dos campos
    if (!nome || !data) {
        alert('Por favor, preencha todos os campos!');
        return; // Impede o salvamento
    }
    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const id = valor1.length + 1; // ID incremental
            const novoRegistro = {
                id,
                nome,
                data,
                imagem: e.target?.result, // Convertendo para string
            };
            valor1.push(novoRegistro); // Adiciona o novo registro
            localStorage.setItem('valor1', JSON.stringify(valor1)); // Salva no localStorage
            console.log('Dados salvos com sucesso!');
            window.location.href = "cadastro.html"; // Redireciona para a página de cadastro
        };
        reader.readAsDataURL(imageInput);
    }
    else {
        alert('Por favor, selecione uma imagem!');
    }
});
