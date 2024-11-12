function pagina() {
    window.location.href = "index.html";
}
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}
function deletar(id) {
    let valor1 = JSON.parse(localStorage.getItem("valor1") || "[]");
    valor1 = valor1.filter(item => item.id !== id);
    localStorage.setItem("valor1", JSON.stringify(valor1));
    exibirDados(valor1);
}
function exibirDados(valor1) {
    const contiudo = document.getElementById("contiudo");
    if (contiudo) {
        contiudo.innerHTML = ''; // Limpa o conteúdo anterior
        valor1.forEach(item => {
            const idade = calcularIdade(item.data);
            contiudo.insertAdjacentHTML('beforeend', `
                <div class='item'>
                    <div id='im'> ${item.imagem ? `<img src='${item.imagem}' style='width: 100px;'>` : ""}</div>
                    <div class='item' style='font-weight:bold'>${item.nome}</div>
                    <div class='nom'>${idade}</div>
                </div>
                <div id='itemlado'>
                    <div class='itemlado' onclick='mudar(${JSON.stringify(item)})'>
                        <section><img src='/img/lapis.png' width='25'></section>
                    </div>
                    <div class='itemlado' onclick='deletar(${item.id})'>
                        <img src='/img/marca-x.png' width='25'>
                    </div>
                </div>
                <hr>
            `);
        });
        // Limpa os campos de entrada após exibir os dados
    }
}
function mudar(item) {
    const nomeInput = document.getElementById("Modalnome");
    const dataInput = document.getElementById("Modaldata");
    const usuInput = document.getElementById("Modalid_usu");
    if (nomeInput && dataInput && usuInput) {
        nomeInput.value = item.nome;
        dataInput.value = item.data;
        usuInput.value = item.id.toString();
    }
    document.getElementById("myModal").style.display = "block";
}
function fecharModal() {
    document.getElementById("myModal").style.display = "none";
}
function troca() {
    const input_actual = document.getElementById("Modalnome");
    const input_data_actual = document.getElementById("Modaldata");
    const input_nova_imagem = document.getElementById("Modalficheiro");
    const input_id = document.getElementById("Modalid_usu");
    const nome_actual = input_actual.value;
    const data_actual = input_data_actual.value;
    const nova_imagem = input_nova_imagem.files?.[0];
    const id = parseInt(input_id.value);
    if (!nome_actual || !data_actual) {
        alert("Um dos campos está vazio");
        return;
    }
    let valor1 = JSON.parse(localStorage.getItem("valor1") || "[]");
    const index = valor1.findIndex(item => item.id === id);
    if (index !== -1) {
        const atualizarItem = () => {
            valor1[index] = {
                ...valor1[index],
                nome: nome_actual,
                data: data_actual,
                imagem: nova_imagem ? URL.createObjectURL(nova_imagem) : valor1[index].imagem
            };
            localStorage.setItem("valor1", JSON.stringify(valor1));
            exibirDados(valor1);
        };
        if (nova_imagem) {
            const reader = new FileReader();
            reader.onloadend = function () {
                valor1[index].imagem = reader.result;
                atualizarItem();
            };
            reader.readAsDataURL(nova_imagem);
        }
        else {
            atualizarItem();
        }
    }
    window.location.href = "cadastro.html";
}
window.onload = function () {
    const valor1 = JSON.parse(localStorage.getItem("valor1") || "[]");
    exibirDados(valor1);
};
