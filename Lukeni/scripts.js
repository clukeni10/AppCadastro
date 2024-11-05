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

  save.addEventListener('click', () =>{

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const imageInput = document.getElementById('imageInput');


    let nomes = JSON.parse(localStorage.getItem('nomes')) || [];
    nomes.push(nome);
    localStorage.setItem('nomes', JSON.stringify(nomes));
    let datas = JSON.parse(localStorage.getItem('datas')) || [];
    datas.push(data);
    localStorage.setItem('datas', JSON.stringify(datas));

    const file = imageInput.files[0];
    if (!file) {
      alert('Por favor, selecione uma imagem!');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
          let images = JSON.parse(localStorage.getItem('images')) || [];
          images.push(e.target.result);
          localStorage.setItem('images', JSON.stringify(images));
    };
    reader.readAsDataURL(file); 
  });

    console.log('Dados salvos com sucesso!');
