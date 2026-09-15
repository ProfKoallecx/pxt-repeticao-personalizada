/**
 * Blocos personalizados
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
        /**
         * Repete o código do laço variando o índice de um valor inicial até um valor limite,
         * usando o passo (incremento ou decremento) informado.
         * Se "de" for menor ou igual a "até", o índice conta para cima; caso contrário, conta para baixo
         * (nesse caso o "passo" normalmente deve ser negativo, ex: -1).
         * @param first primeiro valor do índice, eg: 0
         * @param limit valor limite do índice, eg: 4
         * @param step quanto somar ao índice a cada repetição, eg: 1
         */
    //% block="para $index | de $first | até $limit | passo $step"
    //% handlerStatement=1
    //% draggableParameters
    export function forWithStep(first: number, limit: number, step: number, body: (index: number) => void): void {
                if (first <= limit) {
                                for (let index = first; index <= limit; index += step) {
                                                    body(index)
                                }
                } else {
                                for (let index = first; index >= limit; index += step) {
                                                    body(index)
                                }
                }
    }
}
