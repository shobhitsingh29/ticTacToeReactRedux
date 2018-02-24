import React from "react";
import PropTypes from "prop-types";


import Header from "./Header";


class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.resetScore = this.resetScore.bind(this);
        this.selectEvent = this.selectEvent.bind(this);
    }

    componentDidMount() {
    }


    resetScore() {
        this.props.reset();
    }

    selectEvent(idx) {
        this.props.select(idx);
    }

    render() {


        const controlSet = this.props.game.isDone ? (
            <div className='reset' onClick={this.resetScore}>Reset</div>
        ) : (<div />);

        return (
            <div>
                <Header path="./scoreBoard"></Header>
                <div className='controls'>
                    <div className='message'>
                        <div className='c_message'>{this.props.game.message}</div>
                        {controlSet}
                    </div>
                </div>
                <div className='board'>
                    {this.props.game.board.map((cell, idx) =>
                        <div key={idx} className='gridCell' onClick={this.selectEvent.bind(this, idx)}>
                            <div>{cell}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Home.propTypes = {};
export default (Home);
