const ToDo = function () {

    var notas = [];
    return {
        /*
        _parse(d) {
            return JSON.parse(d);
          }
        
          _stringify(d) {
            return JSON.stringify(d);
          }
        */


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

