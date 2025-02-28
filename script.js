const players = [
  { name: "Lionel Messi", goals: 821, assists: 358, cl: 4, bd: 8, league: 11 },
  { name: "Cristiano Ronaldo", goals: 873, assists: 241, cl: 5, bd: 5, league: 7 },
  { name: "Robert Lewandowski", goals: 640, assists: 157, cl: 1, bd: 0, league: 11 },
  { name: "Neymar Jr", goals: 436, assists: 238, cl: 1, bd: 0, league: 8 },
  { name: "Luis Suárez", goals: 539, assists: 198, cl: 1, bd: 0, league: 7 },
  { name: "Karim Benzema", goals: 447, assists: 193, cl: 5, bd: 1, league: 5 },
  { name: "Andrés Iniesta", goals: 83, assists: 157, cl: 4, bd: 0, league: 9 },
  { name: "Xavi Hernández", goals: 103, assists: 205, cl: 4, bd: 0, league: 8 },
  { name: "Sergio Agüero", goals: 427, assists: 118, cl: 0, bd: 0, league: 6 },
  { name: "Wayne Rooney", goals: 313, assists: 152, cl: 1, bd: 0, league: 5 },
  { name: "Thierry Henry", goals: 360, assists: 173, cl: 1, bd: 0, league: 5 },
  { name: "Zlatan Ibrahimović", goals: 511, assists: 199, cl: 0, bd: 0, league: 13 },
  { name: "Thomas Müller", goals: 235, assists: 254, cl: 2, bd: 0, league: 12 },
  { name: "Kylian Mbappé", goals: 301, assists: 138, cl: 0, bd: 0, league: 7 },
  { name: "Erling Haaland", goals: 235, assists: 57, cl: 0, bd: 0, league: 3 },
  { name: "Mohamed Salah", goals: 274, assists: 118, cl: 1, bd: 0, league: 3 },
  { name: "Kevin De Bruyne", goals: 103, assists: 257, cl: 1, bd: 0, league: 6 },
  { name: "Ronaldinho", goals: 214, assists: 137, cl: 1, bd: 1, league: 3 },
  { name: "Arjen Robben", goals: 247, assists: 146, cl: 1, bd: 0, league: 8 },
  { name: "Franck Ribéry", goals: 161, assists: 237, cl: 1, bd: 0, league: 9 },
  { name: "Eden Hazard", goals: 167, assists: 157, cl: 1, bd: 0, league: 6 },
  { name: "Sergio Ramos", goals: 134, assists: 51, cl: 4, bd: 0, league: 5 },
  { name: "Gianluigi Buffon", goals: 0, assists: 0, cl: 0, bd: 0, league: 11 },
  { name: "Iker Casillas", goals: 0, assists: 0, cl: 3, bd: 0, league: 5 },
  { name: "Raúl González", goals: 323, assists: 119, cl: 3, bd: 0, league: 6 },
  { name: "David Villa", goals: 356, assists: 95, cl: 1, bd: 0, league: 3 },
  { name: "Didier Drogba", goals: 297, assists: 113, cl: 1, bd: 0, league: 4 },
  { name: "Gerard Piqué", goals: 57, assists: 19, cl: 4, bd: 0, league: 8 },
  { name: "Carles Puyol", goals: 26, assists: 13, cl: 3, bd: 0, league: 6 },
  { name: "Paolo Maldini", goals: 41, assists: 38, cl: 5, bd: 0, league: 7 },
  { name: "Javier Zanetti", goals: 47, assists: 73, cl: 1, bd: 0, league: 5 },
  { name: "Philipp Lahm", goals: 21, assists: 79, cl: 1, bd: 0, league: 8 },
  { name: "Ronaldo Nazário", goals: 352, assists: 98, cl: 0, bd: 2, league: 3 },
  { name: "Rivaldo", goals: 275, assists: 94, cl: 1, bd: 1, league: 2 },
  { name: "Zinedine Zidane", goals: 125, assists: 137, cl: 1, bd: 1, league: 3 },
  { name: "Clarence Seedorf", goals: 116, assists: 85, cl: 4, bd: 0, league: 5 },
  { name: "Steven Gerrard", goals: 186, assists: 154, cl: 1, bd: 0, league: 0 },
  { name: "Frank Lampard", goals: 274, assists: 161, cl: 1, bd: 0, league: 3 },
  { name: "Paul Scholes", goals: 155, assists: 76, cl: 2, bd: 0, league: 11 },
  { name: "Patrick Vieira", goals: 51, assists: 59, cl: 0, bd: 0, league: 6 },
  { name: "Roy Keane", goals: 72, assists: 47, cl: 1, bd: 0, league: 7 },
  { name: "Andrea Pirlo", goals: 73, assists: 134, cl: 2, bd: 0, league: 7 },
  { name: "Xabi Alonso", goals: 58, assists: 90, cl: 2, bd: 0, league: 5 },
  { name: "Fernando Torres", goals: 262, assists: 75, cl: 1, bd: 0, league: 1 },
  { name: "Robin van Persie", goals: 273, assists: 79, cl: 0, bd: 0, league: 1 },
  { name: "Ruud van Nistelrooy", goals: 349, assists: 47, cl: 0, bd: 0, league: 4 },
  { name: "Gareth Bale", goals: 187, assists: 139, cl: 5, bd: 0, league: 3 },
  { name: "Toni Kroos", goals: 68, assists: 150, cl: 5, bd: 0, league: 8 },
  { name: "Luka Modrić", goals: 85, assists: 135, cl: 5, bd: 1, league: 3 },
  { name: "Harry Kane", goals: 353, assists: 95, cl: 0, bd: 0, league: 1 },
  { name: "Sadio Mané", goals: 228, assists: 105, cl: 1, bd: 0, league: 2 },
  { name: "Antoine Griezmann", goals: 293, assists: 137, cl: 0, bd: 0, league: 1 },
  { name: "Sergio Busquets", goals: 22, assists: 46, cl: 3, bd: 0, league: 9 },
  { name: "Dani Alves", goals: 67, assists: 213, cl: 3, bd: 0, league: 10 },
  { name: "Marcelo", goals: 58, assists: 112, cl: 5, bd: 0, league: 6 },
  { name: "David De Gea", goals: 0, assists: 0, cl: 0, bd: 0, league: 2 },
  { name: "Manuel Neuer", goals: 0, assists: 5, cl: 2, bd: 0, league: 11 },
  { name: "Thibaut Courtois", goals: 0, assists: 0, cl: 1, bd: 0, league: 3 },
  { name: "Roberto Firmino", goals: 153, assists: 109, cl: 1, bd: 0, league: 1 },
  { name: "Pierre-Emerick Aubameyang", goals: 311, assists: 91, cl: 0, bd: 0, league: 2 },
  { name: "Marco Reus", goals: 171, assists: 131, cl: 0, bd: 0, league: 0 },
  { name: "Radamel Falcao", goals: 332, assists: 49, cl: 0, bd: 0, league: 4 },
  { name: "Edinson Cavani", goals: 403, assists: 91, cl: 0, bd: 0, league: 6 },
  { name: "Angel Di María", goals: 180, assists: 242, cl: 1, bd: 0, league: 7 },
  { name: "David Silva", goals: 151, assists: 180, cl: 0, bd: 0, league: 5 },
  { name: "Cesc Fàbregas", goals: 124, assists: 250, cl: 0, bd: 0, league: 5 },
  { name: "Mesut Özil", goals: 114, assists: 246, cl: 0, bd: 0, league: 4 },
  { name: "Sergio Agüero", goals: 427, assists: 118, cl: 0, bd: 0, league: 6 },
  { name: "David Beckham", goals: 127, assists: 203, cl: 1, bd: 0, league: 10 },
  { name: "Paul Pogba", goals: 93, assists: 114, cl: 0, bd: 0, league: 5 },
  { name: "Zlatan Ibrahimović", goals: 511, assists: 199, cl: 0, bd: 0, league: 13 },
  { name: "Lautaro Martínez", goals: 152, assists: 47, cl: 0, bd: 0, league: 2 },
  { name: "Son Heung-min", goals: 212, assists: 107, cl: 0, bd: 0, league: 0 },
  { name: "Virgil van Dijk", goals: 57, assists: 17, cl: 1, bd: 0, league: 2 },
  { name: "Jan Oblak", goals: 0, assists: 0, cl: 0, bd: 0, league: 1 },
  { name: "Alisson Becker", goals: 1, assists: 2, cl: 1, bd: 0, league: 2 },
  { name: "N'Golo Kanté", goals: 24, assists: 31, cl: 1, bd: 0, league: 3 },
  { name: "Joshua Kimmich", goals: 41, assists: 108, cl: 1, bd: 0, league: 8 },
  { name: "Vinícius Júnior", goals: 100, assists: 81, cl: 2, bd: 0, league: 3 },
  { name: "Raheem Sterling", goals: 196, assists: 114, cl: 0, bd: 0, league: 5 },
  { name: "Leroy Sané", goals: 106, assists: 107, cl: 0, bd: 0, league: 6 },
  { name: "Phil Foden", goals: 101, assists: 56, cl: 1, bd: 0, league: 6 },
  { name: "Jude Bellingham", goals: 69, assists: 62, cl: 0, bd: 0, league: 3 },
  { name: "Jadon Sancho", goals: 84, assists: 95, cl: 0, bd: 0, league: 3 },
  { name: "Mason Mount", goals: 72, assists: 69, cl: 1, bd: 0, league: 1 },
  { name: "Kai Havertz", goals: 116, assists: 71, cl: 1, bd: 0, league: 2 },
  { name: "Trent Alexander-Arnold", goals: 20, assists: 83, cl: 1, bd: 0, league: 1 },
  { name: "Andrew Robertson", goals: 12, assists: 82, cl: 1, bd: 0, league: 1 },
  { name: "Rodri", goals: 30, assists: 35, cl: 1, bd: 0, league: 3 },
  { name: "Bernardo Silva", goals: 93, assists: 109, cl: 1, bd: 0, league: 8 },
  { name: "João Cancelo", goals: 36, assists: 64, cl: 0, bd: 0, league: 6 },
  { name: "Achraf Hakimi", goals: 49, assists: 84, cl: 0, bd: 0, league: 5 },
  { name: "Alphonso Davies", goals: 21, assists: 39, cl: 1, bd: 0, league: 6 },
  { name: "Federico Valverde", goals: 31, assists: 34, cl: 2, bd: 0, league: 3 },
  { name: "Bukayo Saka", goals: 70, assists: 60, cl: 0, bd: 0, league: 0 },
  { name: "Bruno Fernandes", goals: 145, assists: 121, cl: 0, bd: 0, league: 0 },
  { name: "Pedri", goals: 25, assists: 18, cl: 0, bd: 0, league: 1 },
  { name: "Ansu Fati", goals: 29, assists: 10, cl: 0, bd: 0, league: 2 },
  { name: "Rodrygo", goals: 58, assists: 44, cl: 2, bd: 0, league: 3 },
  { name: "Eduardo Camavinga", goals: 10, assists: 15, cl: 2, bd: 0, league: 2 },
  { name: "Aurélien Tchouaméni", goals: 16, assists: 15, cl: 1, bd: 0, league: 2 },
  { name: "Alexander Isak", goals: 102, assists: 23, cl: 0, bd: 0, league: 0 },
  { name: "Declan Rice", goals: 27, assists: 36, cl: 0, bd: 0, league: 0 },
  { name: "Reece James", goals: 14, assists: 24, cl: 1, bd: 0, league: 1 }
];

// Select a random given player
let givenPlayer = players[Math.floor(Math.random() * players.length)];

// Display the given player's stats correctly
document.getElementById("given-name").innerText = givenPlayer.name;
document.getElementById("given-stats-line1").innerText = 
    `Goals: ${givenPlayer.goals} | Assists: ${givenPlayer.assists} | Champions League: ${givenPlayer.cl}`;
document.getElementById("given-stats-line2").innerText = 
    `Ballon d'Ors: ${givenPlayer.bd} | League Titles: ${givenPlayer.league}`;

// Get exactly 5 players excluding the given player
let remainingPlayers = players.filter(p => p.name !== givenPlayer.name);
while (remainingPlayers.length < 5) {
    remainingPlayers.push(players[Math.floor(Math.random() * players.length)]); // Ensure 5 players
}
remainingPlayers = remainingPlayers.sort(() => 0.5 - Math.random()).slice(0, 5);

let currentIndex = 0;
let currentPlayer = null;

function showNextPlayer() {
    if (currentIndex >= remainingPlayers.length) {
        document.getElementById("player-name").innerText = "All players used!";
        document.getElementById("next-player").style.display = "none";
        return;
    }

    currentPlayer = remainingPlayers[currentIndex];
    document.getElementById("player-name").innerText = currentPlayer.name;

    currentIndex++;
}

// Function to select a stat and place it in the correct row
function selectRow(stat) {
    if (!currentPlayer) return;

    if (stat === "goals") document.getElementById("new-goals").innerText = currentPlayer.goals;
    if (stat === "assists") document.getElementById("new-assists").innerText = currentPlayer.assists;
    if (stat === "cl") document.getElementById("new-cl").innerText = currentPlayer.cl;
    if (stat === "bd") document.getElementById("new-bd").innerText = currentPlayer.bd;
    if (stat === "league") document.getElementById("new-league").innerText = currentPlayer.league;

    showNextPlayer();
}

// Start with the first player
showNextPlayer();
