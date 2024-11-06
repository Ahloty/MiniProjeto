import { Agendamento } from "./class.js";

const inforCliente = {
    nomeDono: document.querySelector('#nomeDono'),
    nomeAnimal: document.querySelector('#nomeAnimal'),
    raca: document.querySelector('#raca'),
    grauRisco: document.querySelector('#grau')
}
const btnAtiva = document.getElementById('addCadastro');
const modal = document.querySelector('dialog');
const adicionar = document.querySelector('#confirmar');
const cancelar = document.querySelector('#cancela');
const addLista = document.querySelector('#lista');

// EVENTOS
// Função para abrir modal
btnAtiva.addEventListener('click', () => {
    modal.showModal();
})

adicionar.addEventListener('click', () => {
    const nomeDono = inforCliente.nomeDono.value;
    const nomeAnimal = inforCliente.nomeAnimal.value;
    const raca = inforCliente.raca.value;
    const grauRisco = Number(inforCliente.grauRisco.value);

    const validarResultado = validarInput(nomeDono, nomeAnimal, raca, grauRisco);
    if (validarResultado) {
        alert(validarResultado.message);
        return;
    }

    const agenda = new Agendamento(nomeDono, nomeAnimal, raca, grauRisco);
    adicionarCadastroNaLista(agenda);
    modal.close();
})

// Função para fechar o modal
cancelar.addEventListener('click', () => {
    modal.close();
})

// Função para adicionar agendamento na lista
function adicionarCadastroNaLista(agenda) {
    const li = document.createElement('li');
    li.textContent = agenda.exibirCadastro();

    // BUTTON E FUNÇÃO DE EXCLUIR AGENDAMENTO
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    btnDelete.style.padding = '0.2dvw'
    btnDelete.style.marginLeft = `0.2dvw`
    btnDelete.style.fontSize = ''
    btnDelete.addEventListener('click', () => {
        li.remove();
    });

    // BUTTON E FUNÇÃO DE EDITAR O AGENDAMENTO
    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>';
    btnEdit.style.padding = '0.2dvw'
    btnEdit.style.marginLeft = `0.2dvw`
    btnEdit.addEventListener('click', () => {
        inforCliente.nomeDono.value = agenda.nomeDono;
        inforCliente.nomeAnimal.value = agenda.nomeAnimal;
        inforCliente.raca.value = agenda.raca;
        inforCliente.grauRisco.value = agenda.grauRisco;

        modal.showModal();
        li.remove(); // Remover o li e adicionar ao final com novos dados
    });

    li.appendChild(btnEdit);
    li.appendChild(btnDelete);
    addLista.appendChild(li);
}

// Função de validação
function validarInput(nomeDono, nomeAnimal, raca, grauRisco) {
    if (typeof nomeDono !== 'string' || nomeDono.trim() === '' ||
        typeof nomeAnimal !== 'string' || nomeAnimal.trim() === '' ||
        typeof raca !== 'string' || raca.trim() === '') {
        return { error: true, message: 'Os campos Nome do Dono, Nome do Animal e Raça devem ser preenchidos corretamente.' };
    }
    if (typeof grauRisco !== 'number' || isNaN(grauRisco) || grauRisco <= 0 || grauRisco > 5) {
        return { error: true, message: 'O campo Grau de Risco deve ser um número entre 1 e 5.' };
    }
}