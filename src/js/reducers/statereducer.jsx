import * as actionTypes from "../actiontypes/actionTypes";

import _ from "lodash";

const initialState = {
  board: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "X",
  is_done: false,
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


export default function stateReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESET:

      const current_score = _.assign({}, state.scores);
     return  _.assign({}, initialState, {
        scores: current_score
      });

    case actionTypes.SELECT:
      const selection = action.idx;
      const no_move = state.board[selection].length > 0 || state.is_done;
      let new_board = state.board.map((element, i) => {
        if (element.length > 0) {
          return element;
        }
        return action.idx === i ? state.currentPlayer : element;
      });
      new_board = no_move ? state.board : new_board;
      const win_check = combos.some((c) => c.every((i) => new_board[i] === state.currentPlayer));
      const draw_check = (new_board.reduce((a, b) => a + b, "")).length === 9;
      const new_score = _.assign({}, state.scores);
      if (win_check && !no_move) {
        if (state.currentPlayer === "X") {
          new_score["player1"] += 1;
        } else {
          new_score["player2"] += 1;
        }
      } else if (draw_check && !no_move) {
        new_score.draw += 1;
      }
      const c_player = no_move || win_check || draw_check ? state.currentPlayer : (state.currentPlayer === "X" ? "O" : "X");
      const c_message = win_check ? `${c_player} won the game!` : (draw_check ? "Its a draw!" : `${c_player} moves next`);
      return {
        board: new_board,
        currentPlayer: c_player,
        is_done: (win_check || draw_check),
        scores: new_score,
        message: c_message
      };

    default:
      return _.assign({}, state);
  }
}

