const botoes = document.querySelectorAll
    ('.btn')

// botoes.addEventListener('click', filtrarLivros)
botoes.forEach(btn => btn.addEventListener('click',
    filtrarLivros))

function filtrarLivros() {
    //(this.id) - vai dizer em qual botão estou clicando
    const elementbtn = document.getElementById(this.id)
    //se eu sei qual é o botão então eu posso criar uma const  categoia do botão
    const categoria = elementbtn.value
    //  filtro nos array livros 
    //livrosFitrados = livros.filter(livro => livro.categoria == categoria)   
    livrosFitrados = categoria == 'disponivel' ?
        filtrarPorDisponibilidade() :
        filtrarPorCategoria(categoria)
    console.table(livrosFitrados)
    //usar funçao de mostra na tela 
    exibirLivrosNaTela(livrosFitrados)
    if (categoria == 'disponivel') {
        const valorTotal =
            calcularValorTotalDeLivrosDisponiveis(livrosFitrados)
        exibirVlorDisponivelNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirVlorDisponivelNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML =
        `  
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}