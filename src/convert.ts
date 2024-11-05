function replaceIconWithImage(event: Event): void{
    const file = (event.target as HTMLInputElement).files?.[0];
    const iconContainer = document.getElementById('imageIcon') as HTMLElement;

    if (file){
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>){
            iconContainer.innerHTML = '';

            const img = document.createElement('img');
            if (typeof e.target?.result === 'string'){
                img.src = e.target?.result;
                iconContainer.appendChild(img);
            }
        };
        reader.readAsDataURL(file);
    }
}



function saveButton(): any{
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const nome = nomeInput.value;

    const dataInput = document.getElementById('data') as HTMLInputElement;
    const data = dataInput.value;

    const imageInput = document.getElementById('imageInput') as HTMLInputElement;

   
    let nomes: string[] = JSON.parse(localStorage.getItem('nomes') as string) || [];
    nomes.push(nome);
    localStorage.setItem('nomes', JSON.stringify(nomes));

    let datas: string[] = JSON.parse(localStorage.getItem('datas') as string) || [];
    datas.push(data);
    localStorage.setItem('datas', JSON.stringify(datas));

    const file = imageInput.files?.[0];

    if (!file){
        alert('Por favor, selecione uma imagem!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e: ProgressEvent<FileReader>){
        let images: string[] = JSON.parse(localStorage.getItem('images') as string) || [];
        if (typeof e.target?.result === 'string') { // Verifica se result é uma string
            images.push(e.target.result);
            localStorage.setItem('images', JSON.stringify(images));
        }

    };
    reader.readAsDataURL(file);

    console.log('Dados salvos com successo');
};






const imageInputElement = document.getElementById('imageInput') as HTMLInputElement;
imageInputElement.addEventListener('change', replaceIconWithImage);