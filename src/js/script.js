function inicia(){
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
}

class Agendamento{
    constructor(nomeDono, nomeAnimal, raca, grauRisco){
        this.nomeDono = nomeDono;
        this.nomeAnimal = nomeAnimal;
        this.raca = raca;
        this.grauRisco = grauRisco;
    }

    exibirAgendamento(){
        span[0].innerHTML = this.nomeDono;
        span[1].innerHTML = this.nomeAnimal;
        span[2].innerHTML = this.raca;
        span[3].innerHTML = this.grau;
    }

}

