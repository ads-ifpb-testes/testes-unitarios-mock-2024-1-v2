export class GerenciadorJogos {
  constructor() {
    this.jogos = [];
  }

  add(jogo) {
    if (!("titulo" in jogo) || jogo.titulo.length === 0) {
      throw Error("Não é permitido jogos sem nome");
    }
    const jogoExiste = this.jogos.some(
      (jogoCadastrado) => jogoCadastrado.titulo === jogo.titulo && jogoCadastrado.ano === jogo.ano
    );
	if (jogoExiste) {
		throw Error("Jogo já cadastrado");
	}
	if ("ano" in jogo && jogo.ano > new Date().getFullYear()) {
		throw Error("Não é permitido cadastrar jogo com data posterior a data atual");
	}
    this.jogos.push(jogo);
  }

  getQtde() {
    return this.jogos.length;
  }
}
