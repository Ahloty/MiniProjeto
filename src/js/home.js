import { Agendamento } from "./class.js";

const inforCliente = {
    nomeDono: document.querySelector('#nomeDono'),
    nomeAnimal: document.querySelector('#nomeAnimal'),
    raca: document.querySelector('#raca'),
    grauRisco: document.querySelector('#grau')
}
const btnAtiva = document.getElementById('addAgendamento');
const modal = document.querySelector('dialog');
const adicionar = document.querySelector('#confirmar');
const cancelar = document.querySelector('#cancela');
const addLista = document.querySelector('#lista');

// EVENTOS
btnAtiva.addEventListener('click', () => {
    modal.showModal();
})

adicionar.addEventListener('click', () => {
    const agenda = new Agendamento(
        inforCliente.nomeDono.value,
        inforCliente.nomeAnimal.value,
        inforCliente.raca.value,
        inforCliente.grauRisco.value
    )

    adicionarAgendamentoNaLista(agenda);
    modal.close();
})

cancelar.addEventListener('click', () => {
    modal.close()
})

// Função para adicionar agendamento na lista
function adicionarAgendamentoNaLista(agenda) {
    const li = document.createElement('li');
    li.textContent = agenda.exibirAgendamento()
    addLista.appendChild(li);
}