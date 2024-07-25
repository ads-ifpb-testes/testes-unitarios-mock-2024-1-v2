import RepositorioJogos from "./repositorio-jogos";

export class GerenciadorJogos {
  constructor() {
    this.repositorio = new RepositorioJogos();
  }

  add(jogo) {
    if (!("titulo" in jogo) || jogo.titulo.length === 0) {
      throw Error("Não é permitido jogos sem nome");
    }
    const jogoExiste = this.repositorio.existeJogo(jogo);
    if (jogoExiste) {
      throw Error("Jogo já cadastrado");
    }
    if ("ano" in jogo && jogo.ano > new Date().getFullYear()) {
      throw Error("Não é permitido cadastrar jogo com data posterior a data atual");
    }
    this.repositorio.salvar(jogo);
  }

  getQtde() {
    return this.repositorio.quantidade();
  }
}
