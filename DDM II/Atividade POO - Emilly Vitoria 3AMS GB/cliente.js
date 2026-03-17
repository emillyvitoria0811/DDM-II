    class Cliente {
        #limiteOperacao = 5000;
        #totalVendas = 0;
        #limiteCredito;

        constructor(nome, endereco, sexo, idade, limiteCredito) {
            this.nome = nome;
            this.endereco = endereco;
            this.sexo = sexo;
            this.idade = idade;
            this.#limiteCredito = limiteCredito;
        }

        mostrarDados() {
            console.log(`Nome: ${this.nome}`);
            console.log(`Endereço: ${this.endereco}`);
            console.log(`Sexo: ${this.sexo}`);
            console.log(`Idade: ${this.idade}`);
            console.log(`Limite de Crédito: R$ ${this.#limiteCredito}`);
        }

        vendaOK(valorVenda) {
            if (valorVenda <= this.#limiteOperacao) {
                return true;
            } else {
                console.log("Venda está acima do limite de operação!!");
                return false;
            }
        }

        limiteOK(valorVenda) {
            if (valorVenda <= this.#limiteCredito) {
                console.log("Saldo OK!!");
                return true;
            } else {
                console.log("Você estourou o seu limite de crédito!!");
                return false;
            }
        }

        vender(valorVenda) {
            if (this.vendaOK(valorVenda) && this.limiteOK(valorVenda)) {
                this.#totalVendas+=valorVenda;
                console.log(`Venda de R$ ${valorVenda} realizada com sucesso!!`);
            } else {
                console.log("Venda não efetivada!!");
            }
        }

        mostrarTotalVendas() {
            console.log(`Total de vendas acumulado: R$ ${this.#totalVendas}`);
        }
    }

    //teste
    const teste = new Cliente("Emilly", "Rua Yolanda Mohalyi", "F", 17, 1500);
    teste.vender(800); 
    teste.mostrarDados();

