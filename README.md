# Repetição Personalizada (for com passo) para micro:bit

Extensão para o MakeCode do micro:bit que adiciona o bloco personalizado
**"para $index de $first até $limit passo $step"**, um laço de repetição (for)
que conta um índice de um valor inicial até um valor limite, somando o passo
(incremento) informado a cada repetição. Se o valor inicial for menor ou
igual ao limite, o índice conta para cima; caso contrário, conta para baixo
(nesse caso use um passo negativo, por exemplo `-1`).

## Como usar

```blocks
custom.forWithStep(0, 4, 1, function (index) {
    basic.showNumber(index)
    basic.pause(200)
})
```

## Adicionar esta extensão no MakeCode

1. Abra [https://makecode.microbit.org/](https://makecode.microbit.org/) e o seu projeto.
2. Clique no ícone de engrenagem (⚙) e depois em **Extensões**.
3. Cole o link deste repositório no campo de busca, por exemplo:
   `https://github.com/ProfKoallecx/pxt-repeticao-personalizada`
4. Pressione Enter e clique no cartão da extensão para adicioná-la ao projeto.

O bloco aparecerá na categoria **Custom** (roxa/verde), pronto para usar.

## Editar este projeto

Para editar esta extensão diretamente no MakeCode:

1. Abra [https://makecode.microbit.org/](https://makecode.microbit.org/).
2. Clique em **Importar** e depois em **Importar URL**.
3. Cole `https://github.com/ProfKoallecx/pxt-repeticao-personalizada` e clique em importar.

## Licença

MIT

## Suporte

* para PXT/microbit

#### Metadata (usado para busca, renderização)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
