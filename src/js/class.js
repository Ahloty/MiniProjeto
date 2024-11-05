class Agendamento{
    constructor(nomeDono,nomeAnimal, raca, grauRisco){
        this.nomeDono = nomeDono;
        this.nomeAnimal = nomeAnimal;
        this.raca = raca;
        this.grauRisco = grauRisco;
    }

    exibirAgendamento(){
        return `Dono: ${this.nomeDono} Nome do Pet: ${this.nomeAnimal} Raça: ${this.raca} Grau de risco: ${this.grauRisco}`
    }

}

export {Agendamento};