let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI() {
  const res = await fetch(endPointDaAPI)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  //imprime no console em forma de tabela 
  console.table(livrosComDesconto)
  exibirLivrosNaTela(livrosComDesconto)

}

 


