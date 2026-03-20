class Animal {
    caminhar() {
        console.log("O animal está caminhando");
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("AUAU!");
    }
}

class Gato extends Animal {
    miar() {
        console.log("MIAAAU!");
    }
}

class Ingresso {
    constructor(valor = 100.0) {
        this.valorBase = valor;
    }

    imprimirValor(adicional = 0) {
        console.log(`Valor do Ingresso: R$${(this.valorBase + adicional).toFixed(2)}`);
    }
}

class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }

    calcularPrecoFinal(opcao) {
        return opcao === '1' ? this.preco * 1.1 : this.preco * 0.9;
    }
}

function main() {
    //teste animais
    console.log("Exercício A: Animais");
    const meuCachorro = new Cachorro();
    meuCachorro.latir();
    meuCachorro.caminhar();

    const meuGato = new Gato();
    meuGato.miar();
    meuGato.caminhar();

    //teste ingressos
    console.log("Exercício B: Ingressos");
    const ingresso = new Ingresso(100.0);
    let opcaoIngresso = prompt("Digite 1 para Normal ou 2 para VIP:");

    if (opcaoIngresso === '1') {
        console.log("Ingresso Normal.");
        ingresso.imprimirValor();
    } else if (opcaoIngresso === '2') {
        console.log("Ingresso VIP selecionado.");
        let opcaoCamarote = prompt("Digite 1 para Camarote Superior ou 2 para Inferior:");
        
        let adicional = (opcaoCamarote === '1') ? 50.0 : 20.0;
        let tipoCamarote = (opcaoCamarote === '1') ? "superior" : "inferior";
        
        console.log(`O VIP é camarote ${tipoCamarote}.`);
        ingresso.imprimirValor(adicional);
    }

    // teste imóveis
    console.log("Exercício C: Imóveis");
    const imovel = new Imovel("Rua Exemplo, 123", 250000.0);
    let statusImovel = prompt("Digite 1 para Imovel Novo ou 2 para Velho:");

    const valorFinal = imovel.calcularPrecoFinal(statusImovel);
    console.log(`Valor final do imóvel: R$${valorFinal.toFixed(2)}`);
}

main();
