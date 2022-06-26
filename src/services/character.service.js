const characters = [
  {
    id: 1,
    nome: 'Morty Smith',
    descricao:
      'Morty é emocional, ingênuo, obediente e facilmente manipulado, especialmente por Rick, que também o usa como assistente de suas invenções.',
    foto: './assets/images/morty400x400',
  },
  {
    id: 2,
    nome: 'Rick Sanchez',
    descricao:
      'Rick atualmente reside em seu quarto na casa dos Smiths. Na garagem, ele trabalha em suas invenções e fórmulas científicas e as examina, viajando para outras dimensões, construindo vários robôs e dispositivos e causando caos em diferentes partes do universo',
    foto: './assets/images/rick400x400',
  },
  {
    id: 3,
    nome: 'Summer Smith',
    descricao:
      'Summer é uma adolescente convencional e muitas vezes superficial de 17 anos, obcecada em melhorar seu status entre os colegas. Conhecida por sua personalidade inteligente e bem-humorada e por sua alta destreza, a personagem foi bem recebido. ',
    foto: './assets/images/rick400x400',
  },
];

function randomId() {
  const min = Math.ceil(4);
  const max = Math.floor(999999999);
  return Math.floor(Math.random() * (max - min));
}

const findCharacterService = () => {
  return characters;
};

const findCharacterByIdService = (id) => {
  const response = characters.find((character) => character.id === id);
  return response;
};

const createCharacterService = (newCharacter) => {
  const newId = randomId();
  newCharacter.id = newId;
  characters.push(newCharacter);
  return newCharacter;
};

const updateCharacterService = (id, characterEdited) => {
  characterEdited['id'] = id;
  const characterIndex = characters.findIndex((character) => character.id === id);
  characters[characterIndex] = characterEdited;
  return characterEdited;
};

const deleteCharacterService = (id) => {
  characters.forEach((character, index) => {
    if (character.id === id) {
      characters.splice(index, 1);
    }
  });
};

module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
