            class Imovel {
                constructor (endereco, preco) {
                    this.endereco = endereco;
                    this.preco = preco;
                }
            }

            class Novo extends Imovel {
            constructor (endereco, preco, adicional) {
                super (endereco, preco);
                this.adicional = adicional;
            }

            getAdicional () {
                return this.adicional;
            }

            imprimeAdicional () {
            console.log(`Adicional do imóvel novo: R$ ${this.adicional.toFixed(2)}`);
            }

            getPrecoFinal () {
            return this.preco + this.adicional;
            }
            }

            class Velho extends Imovel {
                constructor (endereco, preco, desconto) {
                    super (endereco, preco);
                    this.desconto = desconto;
                }

                getDesconto () {
                    return this.desconto;
                }
            
                imprimeDesconto () {
                console.log(`Adicional do imóvel novo: R$ ${this.desconto.toFixed(2)}`);
                }
            
                getPrecoFinal () {
                return this.preco + this.desconto;
                }    
            }

            Para resolver o Exercício 3 e realizar o teste no console, vamos seguir a estrutura de classes e depois criar um pequeno script que instancia esses objetos.

            Aqui está o código completo:
            
            JavaScript
            
            // --- EXERCÍCIO 3: CLASSES ---
            
            class Imovel {
                constructor(endereco, preco) {
                    this.endereco = endereco;
                    this.preco = preco;
                }
            }
            
            class Novo extends Imovel {
                constructor(endereco, preco, adicional) {
                    super(endereco, preco);
                    this.adicional = adicional;
                }
            
                // Método de acesso (Getter)
                getAdicional() {
                    return this.adicional;
                }
            
                // Método de impressão
                imprimeAdicional() {
                    console.log(`Valor adicional: R$ ${this.adicional.toFixed(2)}`);
                }
            
                getPrecoFinal() {
                    return this.preco + this.adicional;
                }
            }
            
            class Velho extends Imovel {
                constructor(endereco, preco, desconto) {
                    super(endereco, preco);
                    this.desconto = desconto;
                }
            
                // Método de acesso (Getter)
                getDesconto() {
                    return this.desconto;
                }
            
                // Método de impressão
                imprimeDesconto() {
                    console.log(`Valor do desconto: R$ ${this.desconto.toFixed(2)}`);
                }
            
                getPrecoFinal() {
                    return this.preco - this.desconto;
                }
            }
            
            //teste
            console.log("=== TESTE DE IMÓVEIS ===");
            
            //imóvel novo
            const apNovo = new Novo("R. Yolanda Mohalyi, 800", 500000, 75000);
            console.log(`Imóvel Novo em: ${apNovo.endereco}`);
            apNovo.imprimeAdicional();
            console.log(`Preço Final: R$ ${apNovo.getPrecoFinal().toFixed(2)}`);
            
            console.log("--------------------------");
            
            //imóvel velho
            const casaVelha = new Velho("R. Boa Vista, 492", 300000, 40000);
            console.log(`Imóvel Velho em: ${casaVelha.endereco}`);
            casaVelha.imprimeDesconto();
            console.log(`Preço Final: R$ ${casaVelha.getPrecoFinal().toFixed(2)}`);
