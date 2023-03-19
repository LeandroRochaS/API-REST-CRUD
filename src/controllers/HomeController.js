import Aluno from '../models/aluno';

class HomerController {
  async index(res, req) {
    const novoAluno = await Aluno.create({
      nome: 'Josefá',
      email: 'fafa@gmail.com',
      idade: 22,
      peso: 100,
      altura: 1.90,
    })
    req.json(novoAluno);

  };
}

export default new HomerController();
