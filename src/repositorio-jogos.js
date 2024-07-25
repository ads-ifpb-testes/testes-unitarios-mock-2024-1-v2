export default class RepositorioJogos {
  constructor() {
    this.jogos = [];
  }

  salvar(jogo) {
    this.jogos.push(jogo);
  }

  existeJogo(jogo) {
    return this.jogos.some(
      (jogoCadastrado) => jogoCadastrado.titulo === jogo.titulo && jogoCadastrado.ano === jogo.ano
    );
  }

  quantidade() {
    return this.jogos.length;
  }
}
