function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        // ... vaz uma copia da array e vai modificar o valor do preço do livro
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto
}
