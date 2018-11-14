const ToDo = function () {
    var notas = [];
    return {
        adicionar: (valor) => {
            notas.push(valor);
        },
        tamanho: () => {
            return notas.length;
        },
        mostrar: (posicao) => {
            return notas[posicao];
        },
        remover: (pos) => {
            notas.splice((pos), 1);
        },
        vetor: () => {
            return notas;
        },
        editar: (pos, valor) => {
            notas[pos] = valor;
        }
    }

}

