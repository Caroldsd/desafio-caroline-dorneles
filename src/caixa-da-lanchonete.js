class CaixaDaLanchonete {

    cardapio() {
        let pedido = {};
        let estadoPedido;
        
        const cardapio = {
            'cafe': ['Café', 3.00],
            'chantily': ['Chantily  (extra do Café)', 1.15],
            'suco': ['Suco', 6.20],
            'sanduiche': ['Sanduíche', 6.50],
            'queijo': ['Queijo (extra do Sanduíche)', 2.00],
            'salgado': ['Salgado', 7.25],
            'combo1': ['1 Suco e 1 Sanduíche ', 9.50],
            'combo2': ['1 Café e 1 Sanduíche', 7.50]
        };
        
        const calculateColumnWidths = () => {
            const itemWidth = Math.max(...Object.keys(cardapio).map(item => item.length));
            const descricaoWidth = Math.max(...Object.values(cardapio).map(item => item[0].length));
            const valorWidth = 'Valor'.length + 1; // Considerando "R$"
            return {
                itemWidth: Math.max(itemWidth, 5) + 2,
                descricaoWidth: Math.max(descricaoWidth, 10) + 2,
                valorWidth: Math.max(valorWidth, 6),
            };
        };

        const listaCardapio = () => {
            const { itemWidth, descricaoWidth, valorWidth } = calculateColumnWidths();
            console.log('Bem-vindo ao cafe-cafe');
            console.log(`| Item${' '.repeat(itemWidth - 4)} | Descrição${' '.repeat(descricaoWidth - 9)} | Valor${' '.repeat(valorWidth - 5)} |`);
            console.log(`| ${'-'.repeat(itemWidth)} | ${'-'.repeat(descricaoWidth)} | ${'-'.repeat(valorWidth)} |`);
        
            // forEach para exibir o cardapio
            Object.keys(cardapio).forEach(item => {
                const valorFormatted = `R$${cardapio[item][1].toFixed(2)}`.padEnd(valorWidth);
                console.log(`| ${item.padEnd(itemWidth)} | ${cardapio[item][0].padEnd(descricaoWidth)} | ${valorFormatted} |`);
            });
        };
        
        const addItem = (item) => {
            if (!pedido[item]) {
                pedido[item] = {
                    descricao: cardapio[item][0],
                    preco: cardapio[item][1],
                    quantidade: 1
                };
            } else {
                pedido[item].quantidade++;
            }
        };
        
        while(true) {
            const item = readline('Escolha um item do cardápio (ou digite "sair" para finalizar): ');
        
            if(item === 'sair') {
                break;
            }
        
            else if(cardapio.hasOwnProperty(item)) {
                if (item === 'cafe' || item === 'suco' || item === 'sanduiche' || item === 'salgado' || item === 'combo1' || item === 'combo2') {
                    addItem(item);
                    break;
                } 
            } 

            else if(cardapio.hasOwnProperty(item)) {
                if (item === 'chantily') {
                    if (cardapio['cafe'][2] > 0) { // Verificar se o café foi adicionado antes
                        addItem(item);
                        break;
                    } else {
                        estadoPedido = console.log('Item extra não pode ser pedido sem o principal.');
                        break;
                    }
                }
            } 

            else if(cardapio.hasOwnProperty(item)) {
                if (item === 'queijo') {
                    if (cardapio['sanduiche'][2] > 0) {
                        addItem(item);
                        break;
                    } else {
                        estadoPedido = console.log('Item extra não pode ser pedido sem o principal.');
                        break;
                    }
                } 
            }

            else if(cardapio.hasOwnProperty(item)) {
                if (item == null) {
                    estadoPedido = console.log('Não há itens no carrinho de compra!');
                    break;
                }
            }

            else if(cardapio.hasOwnProperty(item)) {
                if (item == 0) {
                    estadoPedido = console.log('Quantidade inválida!');
                    break;
                }
            } else {
                estadoPedido = console.log("Item inválido!");
                break;
            }
            console.log(pedido)
        }

        //this.descontosETaxas(valorTotalPedido);
        //this.calcularValorDaCompra(metodoDePagamento, pedido);

        console.log("Pedido realizado:");
        Object.keys(pedido).forEach(item => {
            console.log(`${pedido[item]} - R$: ${cardapio[item][1].toFixed(2)} - Quantidade: ${cardapio[item][2]}`);
        });
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        let valorTotalPedido = 0;
        Object.keys(itens).forEach(item => {
            valorTotalPedido += itens[item].preco * itens[item].quantidade;
        });
        if(valorTotalPedido > 0) {
            estadoPedido = "R$ ", descontosETaxas(valorTotalPedido);
        }
        return estadoPedido;
    }

    /*calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }*/

    descontosETaxas(metodoDePagamento, valorTotalPedido) {
        metodoDePagamento = console.log('Digite a forma de pagamento: ')
        if(metodoDePagamento == "dinheiro") {
            valorTotalPedido = valorTotalPedido * 0.95 
        }
        else if(metodoDePagamento == "credito") {
            valorTotalPedido = valorTotalPedido * 1.03;
        } else {
            return "Forma de pagamento inválida!";
        }
        return valorTotalPedido;
    };
}

export { CaixaDaLanchonete };
