function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
        ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "Nenhum campeão foi encontrado"
        return 
    }    

    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
          `;
        }

        console.log(dado.titulo.includes(campoPesquisa))
        // Constrói o HTML para cada item de resultado

    }

    if (!resultados) {
        resultados = "Nenhum campeão foi encontrado"

    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}