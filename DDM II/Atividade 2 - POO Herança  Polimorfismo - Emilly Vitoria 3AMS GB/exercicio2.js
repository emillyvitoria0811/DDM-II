    class Ingresso {
        constructor (valor) {
            this.valor = valor;
        }
        
        imprimeValor () {
            console.log(`Valor do Ingresso: R$ ${this.valor.toFixed(2)}`);
        }
        
    }

    class Normal extends Ingresso {
        imprimeTipo () {
            console.log ("Ingresso normal");
        }
    }

    class VIP extends Ingresso {
        constructor (valor, adicional) {
            super(valor);
            this.adicional = adicional;
        }

        getValorVip() {
            return this.valor = this.adicional;
        }
    }

    class CamaroteInferior extends VIP {
        constructor(valor, adicional, localizacao) {
            super(valor, adicional);
            this.localizacao = localizacao;
        }

        getLocalizacao() {
            return this.localizacao;
        }

        imprimeLocalizacao() {
            console.log(`Localização do Camarote: ${this.localizacao}`);
        }
    }

    class CamaroteSuperior extends VIP {
        constructor (valor, adicional, taxaConforto) {
            super(valor,adicional);
            this.taxaConforto = taxaConforto;
        }

        getValorCamarote () {
            return this.getValorVip() + this.taxaConforto;
        }
    }


    //teste
    const ingressoComum = new Normal(50);
    ingressoComum.imprimeTipo();
    ingressoComum.imprimeValor();

    const vipSup = new CamaroteSuperior(100, 50, 30);
    console.log(`\nValor Total Camarote Superior: R$ ${vipSup.getValorCamarote().toFixed(2)}`);
