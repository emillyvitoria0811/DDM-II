class Animal {
    constructor (nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }

    caminha () {
        return `${this.nome} está caminhando`;
    }
}

class Cachorro extends Animal {
     late () {
        return "AUAU!!";
     } 
}

class Gato extends Animal {
    mia () {
        return "MIAAAU!!";
    }
}

//TESTE 
const cachorrinho = new Cachorro ("Bolinha", "Yorkshire");
const gatinho = new Gato ("Akila", "Sphynx");

console.log("Teste Cachorro");
console.log(`Nome: ${cachorrinho.nome}`);
console.log(`Ação: ${cachorrinho.caminha()}`);
console.log(`Som: ${cachorrinho.late()}`);

console.log("\nTeste Gato");
console.log(`Nome: ${gatinho.nome}`);
console.log(`Ação: ${gatinho.caminha()}`);
console.log(`Som: ${gatinho.mia()}`);