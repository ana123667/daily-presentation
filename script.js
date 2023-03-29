let nomes = ['ANA BEATRIZ', 'GUSTAVO', 'GABRIEL', 'ALEXANDRE', 'TAYLOR', 'WILLIAN', 'LAURA', 'ANA PAULA', 'PEDRO'];

localStorage.setItem('nomes', JSON.stringify(nomes));

let indexAtual = 0;

function exibirNomeAtual() {
  let nomesSalvos = JSON.parse(localStorage.getItem('nomes'));
  let nomeAtual = nomesSalvos[indexAtual];
  let listaParticipantes = document.getElementById('lista-participantes');
  listaParticipantes.innerHTML = nomeAtual;
}

function proximoNome() {
  let nomesSalvos = JSON.parse(localStorage.getItem('nomes'));
  indexAtual = indexAtual + 1;
  if (indexAtual >= nomesSalvos.length) {
    indexAtual = 0;
  }
  exibirNomeAtual();
}

document.getElementById('btn-proximo').addEventListener('click', proximoNome);

// Ao carregar a página
window.onload = function () {
  let nomesSalvos = JSON.parse(localStorage.getItem('nomes'));
  if (nomesSalvos != null) {
    exibirNomeAtual();
  }
};
