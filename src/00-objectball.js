// Base data
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// Functions
function numPointsScored(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (playerName in game[team].players) {
      return game[team].players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (playerName in game[team].players) {
      return game[team].players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  let game = gameObject();
  let numbers = [];
  for (let team in game) {
    if (game[team].teamName === teamName) {
      for (let player in game[team].players) {
        numbers.push(game[team].players[player].number);
      }
    }
  }
  return numbers;
}

function playerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (playerName in game[team].players) {
      return game[team].players[playerName];
    }
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;

  for (let team in game) {
    for (let player in game[team].players) {
      let stats = game[team].players[player];
      if (stats.shoe > biggestShoe) {
        biggestShoe = stats.shoe;
        rebounds = stats.rebounds;
      }
    }
  }
  return rebounds;
}

// Bonus functions
function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let stats = game[team].players[player];
      if (stats.points > maxPoints) {
        maxPoints = stats.points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}

function winningTeam() {
  let game = gameObject();
  let scores = { home: 0, away: 0 };

  for (let side in game) {
    for (let player in game[side].players) {
      scores[side] += game[side].players[player].points;
    }
  }
  return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  let game = gameObject();
  let longest = "";

  for (let team in game) {
    for (let player in game[team].players) {
      if (player.length > longest.length) {
        longest = player;
      }
    }
  }
  return longest;
}

function doesLongNameStealATon() {
  let longName = playerWithLongestName();
  let game = gameObject();
  let maxSteals = 0;
  let topPlayer = "";

  for (let team in game) {
    for (let player in game[team].players) {
      let steals = game[team].players[player].steals;
      if (steals > maxSteals) {
        maxSteals = steals;
        topPlayer = player;
      }
    }
  }
  return longName === topPlayer;
}

// Test logs
console.log(numPointsScored("Ben Gordon")); // 33
console.log(shoeSize("Mason Plumlee")); // 19
console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // [4,0,2,8,33]
console.log(playerStats("Alan Anderson"));
console.log(bigShoeRebounds()); // rebounds of biggest shoe player
console.log(mostPointsScored()); // player with most points
console.log(winningTeam()); // team with highest points
console.log(playerWithLongestName()); // longest player name
console.log(doesLongNameStealATon()); // true/false
