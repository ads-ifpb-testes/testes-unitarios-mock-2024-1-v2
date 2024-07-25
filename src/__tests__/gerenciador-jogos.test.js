import { GerenciadorJogos } from "../gerenciador-jogos";
import RepositorioJogos from "../repositorio-jogos";

jest.mock("../repositorio-jogos");

describe("Gerenciador de jogos", () => {
  let gerenciador;

  beforeEach(() => {
    gerenciador = new GerenciadorJogos();
  });

  test("Deve ser possível cadastrar um jogo", () => {
    const jogo = {
      titulo: "Elden Ring",
      ano: 2022,
      genero: ["rpg"],
    };
    gerenciador.add(jogo);
    jest.spyOn(RepositorioJogos.prototype, 'quantidade').mockReturnValue(1);
    const qtde = gerenciador.getQtde();
    expect(qtde).toBe(1);
  });

  test("Não deve ser possível cadastrar um jogo sem nome", () => {
    const jogo = {
      titulo: "",
      ano: 2022,
      genero: ["rpg"],
    };
    expect(() => gerenciador.add(jogo)).toThrow(Error);
  });

  test("Não deve ser possível cadastrar dois jogos com o mesmo nome e ano", () => {
    const jogo = {
      titulo: "Donkey Kong 2",
      ano: 1995,
      genero: ["plataforma"],
    };
    jest.spyOn(RepositorioJogos.prototype, 'existeJogo').mockReturnValue(true);
    expect(() => gerenciador.add(jogo)).toThrow(Error);
  });

  test("Não deve ser possível cadastrar jogos com ano posterior ao atual", () => {
    const jogo = {
      titulo: "Final Fantasy XVII",
      ano: 2026,
      genero: ["rpg"],
    };
    expect(() => gerenciador.add(jogo)).toThrow(Error);
  });
});
