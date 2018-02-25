import * as actionTypes from "../actiontypes/actionTypes";

import _ from "lodash";

const initialState = {
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
    isDone: false,
    scores: {
        player1: 0,
        player2: 0,
        draw: 0
    },
    message: "X moves next"
};

const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESET:

            const current_score = _.assign({}, state.scores);
            return _.assign({}, initialState, {
                scores: current_score
            });

        case actionTypes.SELECT:
            const selection = action.idx;
            const inValidMove = state.board[selection].length > 0 || state.isDone;
            let newBoard = state.board.map((val, key) => {
                if (val.length > 0) {
                    return val;
                }
                return action.idx === key ? state.currentPlayer : val;
            });
            newBoard = inValidMove ? state.board : newBoard;
            const winningCheck = combos.some((val) => val.every((index) => newBoard[index] === state.currentPlayer));
            const drawCheck = (newBoard.reduce((a, b) => a + b, "")).length === 9;
            const newScore = _.assign({}, state.scores);
            if (winningCheck && !inValidMove) {
                if (state.currentPlayer === "X") {
                    newScore["player1"] += 1;
                } else {
                    newScore["player2"] += 1;
                }
            } else if (drawCheck && !inValidMove) {
                newScore.draw += 1;
            }
            const currPlayer = inValidMove || winningCheck || drawCheck ? state.currentPlayer : (state.currentPlayer === "X" ? "O" : "X");
            const currMessage = winningCheck ? `${currPlayer} won the game!` : (drawCheck ? "Its a draw!" : `${currPlayer} moves next`);
            return {
                board: newBoard,
                currentPlayer: currPlayer,
                isDone: (winningCheck || drawCheck),
                scores: newScore,
                message: currMessage
            };

        default:
            return _.assign({}, state);
    }
}

