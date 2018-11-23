const botao_add = document.getElementById('botao_adicionar')
const botao_dim = document.getElementById('botao_diminuir')

let lista = new ToDo();


let atualizar = (itens) => {
    let valor_pos = 0;
    let valor_neg = 0;
    let p = document.getElementById('lista');
    let span_pos = document.getElementById('span_pos');
    let span_neg = document.getElementById('span_neg');
    let saldo = document.getElementById('saldo');
    let filhos = p.childNodes;
    //limpa todos os itens exibidos
    for (i = filhos.length - 1; i >= 0; i--) {
        if (filhos[i].tagName == 'LI') {
            p.removeChild(filhos[i]);
        }
    }
    //mostra todos os itens criados
    itens.forEach((i, idx) => {
        
        let li = document.createElement('li');
        let btnExcluir = document.createElement('input');
        let btnEditar = document.createElement('input');

        btnExcluir.type = 'button';
        btnExcluir.value = 'Excluir';
        btnExcluir.onclick = () => {
            lista.remover(idx);
            console.log(lista.vetor);
            atualizar(lista.vetor());

        }

        btnEditar.type = 'button';
        btnEditar.value = 'Editar';
        btnEditar.onclick = () => {
            do{
                var selection = parseInt(window.prompt("Digite um valor", ""), 10);
            }while(isNaN(selection);
            lista.editar(idx,selection);
            atualizar(lista.vetor());

        }

        li.innerHTML = i;
        li.appendChild(btnExcluir);
        li.appendChild(btnEditar);
        p.appendChild(li);
        if(i > 0 ){
            valor_pos += i;
        }else{
            valor_neg += i;
        }

    });
    span_pos.innerHTML = "R$" + valor_pos +"( "+ (valor_pos/(valor_pos-valor_neg)*100).toFixed(2) +"% )";
    span_neg.innerHTML = "R$" + valor_neg +"( "+ (valor_neg/(valor_neg-valor_pos)*100).toFixed(2) +"% )";
    saldo.innerHTML = "Saldo : R$" + (valor_pos+valor_neg);
}

botao_add.addEventListener('click', (e) => {
    do{
        var selection = parseInt(window.prompt("Digite um valor", ""), 10);
    }while(isNaN(selection) || selection < 0);

    lista.adicionar(selection);
    atualizar(lista.vetor());

});

botao_dim.addEventListener('click', (e) => {
    do{
        var selection = parseInt(window.prompt("Digite um valor", ""), 10);
    }while(isNaN(selection) || selection > 0);

    lista.adicionar(selection);
    atualizar(lista.vetor());

});
