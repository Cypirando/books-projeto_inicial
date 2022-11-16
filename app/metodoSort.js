/*
//exemplo
let precos = [29.80,11, 10 ,1, 111]

let precosOrdenados = precos.sort(function(a,b){
    return a-b
})
// arrowFunction 
let precosOrdenados = precos.sort((a,b) => {
    return a-b
})
console.log(precosOrdenados)
*/ 
let btnOrdenaPorPreco = document.getElementById
('btnOrdenarPorPreco')
btnOrdenaPorPreco.addEventListener('click',
ordenaLivrosPorPrecos)

function ordenaLivrosPorPrecos(){
                                //do maior para o menor( b - a )
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}
