const DB = require("./DB.js");
const defaultCharacters = {
  king: {
    label: "King",
    points: 100
  },
  queen: {
    label: "Queen",
    points: 80
  },
  minister: {
    label: "Minister",
    points: 60
  },
  commander: {
    label: "Commander",
    points: 40
  },
  soldier: {
    label: "Soldier",
    points: 20
  },
  thief: {
    label: "Thief",
    points: 0
  }
};
const defaultPlayer = {
  displayName: null,
  points: 0,
  currentGameId: null,
  socketId: null
};
const defaultGame = {
  characters: [],
  characterSeq: [],
  shuffled: [],
  players: [],
  hostPlayerId: [],
  createdAt: null,
  updatedAt: null,
  totalPlayedTime: 0
};
const players = new DB();
const games = new DB();

function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateID() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}
function createGame(hostId, characters = null) {
  let newGameId = generateID();
  let newGame = Object.assign(defaultGame, {
    id: newGameId,
    hostPlayerId: hostId,
    characters: characters ? characters : defaultCharacters
  });
  games.set(newGameId, newGame);
  return newGame;
}
