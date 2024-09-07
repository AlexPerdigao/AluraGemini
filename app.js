function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    if (!campoPesquisa) {
        section.innerHTML = '<h3>Nada foi encontrado!</h3>';
        return;
    }

    let resultados = '';
    let nome = '';
    let modalidade = '';

    campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        modalidade = dado.modalidade.toLowerCase();
        if (
            nome.includes(campoPesquisa) ||
            modalidade.includes(campoPesquisa)
        ) {
            resultados += `
            <div class="item-resultado">
              <h2>
                 <a href="#" target="_blank">${dado.nome}</a>
              </h2>
                 <p class="descricao-meta">${dado.descricao}</p>
                 <p class="modalidade"> Modalidade: ${dado.modalidade}</p>
                 <p class="data-nascimento"> Data de Nascimento: ${dado.dataNascimento}</p>
                 <a
                  href="${dado.wikipedia}"_blank"
                        >Mais informações</a>
            </div>`;
        }
    }
    if (!resultados) {
        resultados =
            '<h3>Nada foi encontrado, digite o nome do skatista ou a modalidade!</h3>';
    }
    section.innerHTML = resultados;
}
