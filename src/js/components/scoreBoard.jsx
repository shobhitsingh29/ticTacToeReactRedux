import React from "react";
import Header from "./Header";

import PropTypes from "prop-types";

class ScoreBoard extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header path="./home"></Header>
                <div className='scoreboard'>

                    <div className='scoreTitle'>
                        Player 1 (X) Wins
                    </div>
                    <div className='scoreTitle'>
                        Draw
                    </div>
                    <div className='scoreTitle'>
                        Player 2 (O) Wins
                    </div>
                    <div className='score'>
                        {this.props.scores.player1}
                    </div>
                    <div className='score'>
                        {this.props.scores.draw}
                    </div>
                    <div className='score'>
                        {this.props.scores.player2}
                    </div>
                </div>
            </div>
        );
    }
}

ScoreBoard.propTypes = {};
export default (ScoreBoard);
