// Exemplo de uso do bloco personalizado "para ... de ... até ... passo ..."

custom.forWithStep(0, 4, 1, function (index) {
    basic.showNumber(index)
    basic.pause(200)
})

custom.forWithStep(90, 0, -1, function (index) {
    basic.showNumber(index)
})
