// PEGA OS DADOS  E ELEMENTOS
const nomeDonodono = document.querySelector('#nomeDono');
const nomeAnimal = document.querySelector('#nomeAnimal');
const raca = document.querySelector('#raca');
const grauRisco = document.querySelector('#grau');
const span = document.querySelectorAll('.span');
const btnAtiva = document.getElementById('addAgendamento');
const modal = document.querySelector('dialog');

console.log(btnAtiva)
// EVENTOS
btnAtiva.addEventListener('click', () => {
    modal.showModal();
})



