class heroiClasse {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        if (this.classe == "mago") {
            console.log(`o jogador ${this.nome} de idade ${this.idade} anos com a classe ${this.classe} atacou usando magia`);
        } else if (this.classe == "guerreiro") {
            console.log(`o jogador ${this.nome} de idade ${this.idade} anos com a classe ${this.classe} atacou usando espada`);
        } else if (this.classe == "monge") {
            console.log(`o jogador ${this.nome} de idade ${this.idade} anos com a classe ${this.classe} atacou usando artes marciais`);
        } else if (this.classe == "ninja") {
            console.log(`o jogador ${this.nome} de idade ${this.idade} anos com a classe ${this.classe} atacou usando espada`);
        }
    }
}

let heroi = new heroiClasse("joao-s0uz", "20", "monge");

heroi.atacar();