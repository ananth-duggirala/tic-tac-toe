const GameBoard = (() => {
    var gameArray = [[0,0,0], [0,0,0], [0,0,0]];
    var currentPlayerId = 1;

    const updatePlayer = () => {
        currentPlayerId = (currentPlayerId + 1)%2;
        return currentPlayerId;
    }

    const changeGameArray = (i, j, newVal) => {
        gameArray[i][j] = newVal;
    };

    return {
        gameArray,
        currentPlayerId,
        updatePlayer,
        changeGameArray
    };
})();

function PlayerFactory(name, turnNumber) {
    return {name, turnNumber};
};

function renderGameBoard(GameBoard) {
    const gameBoardDisplay = document.querySelector('#gameBoardDisplay');
    gameArray = GameBoard.gameArray;

    for (var k=1; k<3; k++){
        for (var i=0; i<3; i++){
            if (gameArray[i][0] == k && gameArray[i][1] == k && gameArray[i][2] == k){
                if (k == 1)
                    alert("X wins!");
                else
                    alert("O wins!");
            }
        }

        for (var j=0; j<3; j++){
            if (gameArray[0][j] == k && gameArray[1][j] == k && gameArray[2][j] == k){
                if (k == 1)
                    alert("X wins!");
                else
                    alert("O wins!");
            }
        }

        if (gameArray[0][0] == k && gameArray[1][1] == k && gameArray[2][2] == k){
            if (k == 1)
                alert("X wins!");
            else
                alert("O wins!");
            }

        if (gameArray[2][0] == k && gameArray[1][1] == k && gameArray[0][2] == k){
            if (k == 1)
                alert("X wins!");
            else
                alert("O wins!");
            }
    }
    

    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++){
            currElement = document.querySelector("#grid-" + i.toString() + j.toString())
            switch(gameArray[i][j]){
                case 0:
                    currElement.textContent = "-";
                    break;
                case 1:
                    currElement.textContent = "X";
                    break;
                case 2:
                    currElement.textContent = "O";
                    break;
                default:
                    break;
            }
        }
    }
};

const start_board_button = document.querySelector('#start-board-button');
start_board_button.addEventListener('click', renderGameBoard(GameBoard));

grid_00 = document.querySelector('#grid-00');
grid_00.addEventListener('click', function() {
    GameBoard.changeGameArray(0, 0, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });

grid_01 = document.querySelector('#grid-01');
grid_01.addEventListener('click', function() {
    GameBoard.changeGameArray(0, 1, GameBoard.updatePlayer() + 1);
     renderGameBoard(GameBoard);
    });


grid_02 = document.querySelector('#grid-02');
grid_02.addEventListener('click', function() {
    GameBoard.changeGameArray(0, 2, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
});

grid_10 = document.querySelector('#grid-10');
grid_10.addEventListener('click', function() {
    GameBoard.changeGameArray(1, 0, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });

grid_11 = document.querySelector('#grid-11');
grid_11.addEventListener('click', function() {
    GameBoard.changeGameArray(1, 1, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });


grid_12 = document.querySelector('#grid-12');
grid_12.addEventListener('click', function() {
    GameBoard.changeGameArray(1, 2, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });

grid_20 = document.querySelector('#grid-20');
grid_20.addEventListener('click', function() {
    GameBoard.changeGameArray(2, 0, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });

grid_21 = document.querySelector('#grid-21');
grid_21.addEventListener('click', function() {
    GameBoard.changeGameArray(2, 1, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });


grid_22 = document.querySelector('#grid-22');
grid_22.addEventListener('click', function() {
    GameBoard.changeGameArray(2, 2, GameBoard.updatePlayer() + 1);
    renderGameBoard(GameBoard);
    });