//função para descrver os produtos 

function descricaoProdutos() {

    let inProduto = document.getElementById("inProduto");
    let inValor = document.getElementById("inValor");
    let inQuantidade = document.getElementById("inQuantidade");
    let outProduto = document.getElementById("outProduto");
    let outValor = document.getElementById("outValor");
    let outQuantidade = document.getElementById("outQuantidade");
    let outTotal = document.getElementById("outTotal");

    let produto = (inProduto.value);
    let valor = (inValor.value);
    let quantidade = (inQuantidade.value);
    let total = valor * quantidade;


    outProduto.textContent = "Produto: " + produto;
    outValor.textContent = "Preço R$: " + valor;
    outQuantidade.textContent = "Quantidade: " + quantidade;
    outTotal.textContent = "Total R$: " + total.toFixed(2);
    outTotal.style.color = "green";
    outTotal.style.backgroundColor = "white";

    if (produto == "" || valor == "" || quantidade == "") {
        alert("Você esqueceu de algum item? Insira corretamente");
        inProduto.focus();
        inValor.focus();
        inQuantidade.focus();
        return;
    }


}

let btnCupon = document.getElementById("btnCupon");
btnCupon.addEventListener("click", descricaoProdutos);

//função para criar um arquivo pdf e imprimir

function imprimir() {

    let janela = window.open("", "", "width=800,heigtj=6000");

    janela.document.write("<html><head>");
    janela.document.write("<title>IMPRIMIR</title></head>");
    janela.document.write("<body>");
    janela.document.write("<h1> MERCEARIA PICCININ </h1>");
    janela.document.write("<table><tr><ol>");
    janela.document.write(outProduto.innerText + "<br>"); // Mostra os dados da tabela 
    janela.document.write(outQuantidade.innerText + "<br>"); // Mostra os dados da tabela
    janela.document.write(outValor.innerText + "<br>"); // Mostra os dados da tabela
    janela.document.write(outTotal.innerText + "<br>") // Mostra os dados da tabela
    janela.document.write("</ol></tr></table>");
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();

}






