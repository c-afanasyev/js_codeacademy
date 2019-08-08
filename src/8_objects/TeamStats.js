const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Jim',
            lastName: 'Woo',
            age: 25
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Abcd',
            teamPoints: 22,
            opponentPoints: 22
        },
        {
            opponent: 'Efg',
            teamPoints: 33,
            opponentPoints: 33
        }
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName,
            lastName,
            age
        };

        this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent,
            teamPoints,
            opponentPoints
        };

        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('1', 33, 22);
team.addGame('2', 44, 33);
team.addGame('3', 55, 44);

console.log(team);

//not valid - console.log(team.games());

//    valid - console.log(team.games);

//    valid - console.log(team['games']);

//    valid - console.log(team.games);


