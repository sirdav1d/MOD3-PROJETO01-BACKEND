const characterService = require('../services/character.service');

const findCharacterController = (req, res) => {
  const allCharacters = characterService.findCharacterService();
  res.send(allCharacters);
};

//400
const findCharacterByIdController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Digite um ID válido' });
  }
  const chosenCharacter = characterService.findCharacterByIdService(idParam);

  if (!chosenCharacter) {
    return res.status(404).send({ message: 'Personagem não encontrado' });
  }
  res.send(chosenCharacter);
};

//201 400
const createCharacterController = (req, res) => {
  const character = req.body;
  if (
    !character ||
    !character.nome ||
    !character.descricao ||
    !character.foto
  ) {
    return res.status(400).send({ message: 'Envie o formulário completo' });
  }
  const newCharacter = characterService.createCharacterService(character);
  res
    .status(201)
    .send({ message: 'Personagem criado com sucesso', data: newCharacter });
};

//400
const updateCharacterController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Digite um ID válido' });
  }

  const characterEdit = req.body;

  if (
    !characterEdit ||
    !characterEdit.nome ||
    !characterEdit.descricao ||
    !characterEdit.foto
  ) {
    return res.status(400).send({ message: 'Envie o formulário completo' });
  }

  const updatedCharacter = characterService.updateCharacterService(
    idParam,
    characterEdit,
  );
  res.send({
    message: 'Personagem atualizado com sucesso',
    data: updatedCharacter,
  });
};

const deleteCharacterController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Digite um ID válido' });
  }
  characterService.deleteCharacterService(idParam);

  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findCharacterController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
