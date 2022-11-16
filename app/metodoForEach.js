const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis =
  document.getElementById('valor_total_livros_disponiveis')


function exibirLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = ''
  listaDeLivros.forEach(livro => {//passei o livro q esta !!!! sendo verificado
    /*let disponibilidade = verificarDisponibilidadeDoLivro(livro)*/
    /*OPERADOR TERNARIO  */
    // ============== condição maior que zero? se sim !!!!!!!!! se não !!!!!!!!!!
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
         ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
  });

}
/* OPERADOR DAS CAVERNA 
function verificarDisponibilidadeDoLivro(livro) {
  // condição se o livro for mais que Zero
  if (livro.quantidade > 0) {
    // retorna disponivel 
    return 'livro__imagens'
  } else {// se não retorna indisponivel 
    return 'livros__imagens indisponivel'
  }

}
*/