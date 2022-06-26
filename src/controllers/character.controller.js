const characterService = require('../services/character.service');

const findCharacterController = (req, res) => {
  const allCharacters = characterService.findCharacterService();
  res.send(allCharacters);
};

//400
const findCharacterByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = characterService.findCharacterByIdService(idParam);
  res.send(chosenCharacter);
};

//201 400
const createCharacterController = (req, res) => {
  const character = req.body;
  const newCharacter= characterService.createCharacterService(character);
  res.status(201).send({message:"Personagem criado com sucesso", data: newCharacter});
};

//400
const updateCharacterController = (req, res) => {
  const idParam = +req.params.id;
  const characterEdit = req.body;
  const updatedCharacter = characterService.updateCharacterService(idParam, characterEdit);
  res.send({message:"Personagem atualizado com sucesso", data: updatedCharacter});

};

const deleteCharacterController = (req, res) => {
  const idParam = req.params.id;
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
