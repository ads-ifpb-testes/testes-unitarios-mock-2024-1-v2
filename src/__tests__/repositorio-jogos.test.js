import RepositorioJogos from "../repositorio-jogos";

describe('Repositório de Jogos', () => {

	let repositorio;

	beforeEach(() => {
		repositorio = new RepositorioJogos();
	});

	test('Deve salvar um jogo', () => {
		repositorio.salvar({
			titulo: 'Contra',
			ano: 1990,
			genero: ['Plataforma']
		});
		expect(repositorio.quantidade()).toBe(1);
	 });

	 test('Deve informar que um jogo já existe', () => {
		const jogo = {
			titulo: 'Zelda - Ocarina of Time',
			ano: 1998,
			genero: ['RPG', 'Aventura']
		};
		repositorio.salvar(jogo);
		expect(repositorio.existeJogo(jogo)).toBe(true);
	 });


 })