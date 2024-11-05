function replaceIconWithImage(event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    var iconContainer = document.getElementById('imageIcon');
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a, _b;
            iconContainer.innerHTML = '';
            var img = document.createElement('img');
            if (typeof ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) === 'string') {
                img.src = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
                iconContainer.appendChild(img);
            }
        };
        reader.readAsDataURL(file);
    }
}
function saveButton() {
    var _a;
    var nomeInput = document.getElementById('nome');
    var nome = nomeInput.value;
    var dataInput = document.getElementById('data');
    var data = dataInput.value;
    var imageInput = document.getElementById('imageInput');
    var nomes = JSON.parse(localStorage.getItem('nomes')) || [];
    nomes.push(nome);
    localStorage.setItem('nomes', JSON.stringify(nomes));
    var datas = JSON.parse(localStorage.getItem('datas')) || [];
    datas.push(data);
    localStorage.setItem('datas', JSON.stringify(datas));
    var file = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (!file) {
        alert('Por favor, selecione uma imagem!');
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var images = JSON.parse(localStorage.getItem('images')) || [];
        if (typeof ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) === 'string') { // Verifica se result é uma string
            images.push(e.target.result);
            localStorage.setItem('images', JSON.stringify(images));
        }
    };
    reader.readAsDataURL(file);
    console.log('Dados salvos com successo');
}
;
var imageInputElement = document.getElementById('imageInput');
imageInputElement.addEventListener('change', replaceIconWithImage);
