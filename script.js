const players = [ 
    { name: "Sergio Ramos", goals: 100, assists: 40, cl: 4, bd: 0, league: 5 },
    { name: "Virgil van Dijk", goals: 50, assists: 20, cl: 1, bd: 0, league: 1 },
    { name: "Gerard Piqué", goals: 50, assists: 25, cl: 4, bd: 0, league: 8 },
    { name: "Dani Alves", goals: 40, assists: 100, cl: 3, bd: 0, league: 6 },
    { name: "Thiago Silva", goals: 50, assists: 15, cl: 2, bd: 0, league: 7 },
    { name: "John Terry", goals: 41, assists: 13, cl: 1, bd: 0, league: 5 },
    { name: "Philipp Lahm", goals: 22, assists: 50, cl: 1, bd: 0, league: 8 },
    { name: "Bixente Lizarazu", goals: 10, assists: 30, cl: 1, bd: 0, league: 5 },
    { name: "Carlos Alberto", goals: 30, assists: 25, cl: 0, bd: 0, league: 5 },
    { name: "Franz Beckenbauer", goals: 60, assists: 35, cl: 3, bd: 2, league: 4 },
    { name: "Paolo Maldini", goals: 40, assists: 10, cl: 5, bd: 0, league: 7 },
    { name: "Alessandro Nesta", goals: 40, assists: 15, cl: 2, bd: 0, league: 7 },
    { name: "Rio Ferdinand", goals: 20, assists: 10, cl: 1, bd: 0, league: 6 },
    { name: "Ashley Cole", goals: 15, assists: 35, cl: 1, bd: 0, league: 3 },
    { name: "David Alaba", goals: 30, assists: 40, cl: 2, bd: 0, league: 8 },
    { name: "Jordi Alba", goals: 20, assists: 40, cl: 4, bd: 0, league: 7 },
    { name: "Marcelo", goals: 30, assists: 70, cl: 4, bd: 0, league: 6 },
    { name: "Cafu", goals: 30, assists: 50, cl: 0, bd: 0, league: 7 },
    { name: "Antonio Rudiger", goals: 15, assists: 5, cl: 1, bd: 0, league: 3 },
    { name: "Raphaël Varane", goals: 20, assists: 10, cl: 4, bd: 0, league: 6 },
    { name: "Jan Vertonghen", goals: 15, assists: 10, cl: 0, bd: 0, league: 3 },
    { name: "Khalid Boulahrouz", goals: 10, assists: 5, cl: 0, bd: 0, league: 1 },
    { name: "Jose Enrique", goals: 10, assists: 15, cl: 0, bd: 0, league: 4 },
    { name: "Vincent Kompany", goals: 20, assists: 10, cl: 1, bd: 0, league: 4 },
    { name: "Gerard Piqué", goals: 50, assists: 25, cl: 4, bd: 0, league: 8 },
    { name: "Benjamin Pavard", goals: 15, assists: 10, cl: 1, bd: 0, league: 5 },
    { name: "Kurt Zouma", goals: 15, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "David Luiz", goals: 20, assists: 30, cl: 1, bd: 0, league: 3 },
    { name: "John O'Shea", goals: 15, assists: 10, cl: 0, bd: 0, league: 5 },
    { name: "Gary Neville", goals: 7, assists: 40, cl: 0, bd: 0, league: 8 }, 
    { name: "Michael Dawson", goals: 15, assists: 5, cl: 0, bd: 0, league: 4 },
    { name: "Aaron Wan-Bissaka", goals: 5, assists: 20, cl: 0, bd: 0, league: 3 },
    { name: "José Fonte", goals: 20, assists: 5, cl: 1, bd: 0, league: 2 },
    { name: "Santiago Arias", goals: 10, assists: 5, cl: 0, bd: 0, league: 2 },
    { name: "Matthijs de Ligt", goals: 15, assists: 5, cl: 1, bd: 0, league: 4 },
    { name: "Joel Matip", goals: 10, assists: 5, cl: 1, bd: 0, league: 5 },
    { name: "Eder Militao", goals: 10, assists: 5, cl: 1, bd: 0, league: 4 },
    { name: "Emerson Royal", goals: 10, assists: 10, cl: 0, bd: 0, league: 3 },
    { name: "Toby Alderweireld", goals: 20, assists: 10, cl: 0, bd: 0, league: 4 },
    { name: "Diego Carlos", goals: 10, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "Fikayo Tomori", goals: 5, assists: 5, cl: 1, bd: 0, league: 1 },
    { name: "Aaron Cresswell", goals: 15, assists: 30, cl: 0, bd: 0, league: 5 },
    { name: "Shkodran Mustafi", goals: 10, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "Chancel Mbemba", goals: 5, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "Ricardo Pereira", goals: 10, assists: 30, cl: 0, bd: 0, league: 4 },
    { name: "Sven Botman", goals: 5, assists: 5, cl: 0, bd: 0, league: 2 },
    { name: "Ben White", goals: 5, assists: 5, cl: 0, bd: 0, league: 2 },
    { name: "Nico Schlotterbeck", goals: 5, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "Maxence Lacroix", goals: 5, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "Matthieu Gendry", goals: 5, assists: 5, cl: 0, bd: 0, league: 3 },
    { name: "João Cancelo", goals: 20, assists: 50, cl: 1, bd: 0, league: 4 },
    { name: "Tariq Lamptey", goals: 5, assists: 10, cl: 0, bd: 0, league: 3 },
    { name: "Aleksandar Kolarov", goals: 25, assists: 50, cl: 1, bd: 0, league: 4 },
  

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
