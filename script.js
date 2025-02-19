const players = [
    { name: "Messi", goals: 700, assists: 300, cl: 4, bd: 7, league: 10 },
    { name: "Ronaldo", goals: 800, assists: 250, cl: 5, bd: 5, league: 7 },
    { name: "Neymar", goals: 400, assists: 200, cl: 1, bd: 0, league: 6 },
    { name: "Mbappe", goals: 250, assists: 150, cl: 1, bd: 0, league: 5 },
    { name: "Zidane", goals: 125, assists: 100, cl: 3, bd: 1, league: 6 },
    { name: "Ronaldinho", goals: 200, assists: 150, cl: 1, bd: 2, league: 5 }
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
