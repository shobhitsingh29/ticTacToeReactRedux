import React from "react";
import Header from "./Header";
import _ from "lodash";

import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";
import PropTypes from "prop-types";

class ScoreBoard extends React.PureComponent {
    constructor(props) {
        super(props);

        /* this.state = {
         itemData: {},
         tempData: {},
         };
         this.handleEdit = this.handleEdit.bind(this);
         this.handleDataChange = this.handleDataChange.bind(this);
         this.saveData = this.saveData.bind(this);
         this.closeButton = this.closeButton.bind(this);
         this.clearData = this.clearData.bind(this); */
    }

    componentWillMount() {
        //   this.props.showFilteredDetailsFunction();
    }

    componentWillReceiveProps(nextProps) {
        /* const searchString = getSearchString(nextProps);
         _.map(nextProps.items, (items, index) => {
         const id = nextProps.items[index]['id'];
         if (searchString === id) {
         this.setState({
         itemData: nextProps.items[index],
         tempData: nextProps.items[index],
         });
         }
         }); */
    }

    handleEdit() {
        //   this.props.editPopUpFunction(true);
    }

    handleDataChange(args, event) {
        /*    const value = event.target.value;
         const name = args[0]['name'];
         const newObj = {};
         newObj[name] = value;
         const newItemData = _.assign({}, this.state.tempData, newObj);
         this.setState({
         tempData: newItemData,
         }); */
    }

    clearData() {
        /*   this.setState({
         tempData: this.state.itemData,
         }); */
    }

    closeButton() {
        //  this.props.editPopUpFunction(false);
    }

    saveData() {
        /* this.setState({
         itemData: this.state.tempData,
         });
         this.props.upDateJsonDataFunction(this.state.tempData.id, _.assign({}, this.state.tempData));
         */
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

ScoreBoard.propTypes = {
    /*
     handleEdit: PropTypes.func,
     edit: PropTypes.bool,
     upDateJsonDataFunction: PropTypes.func,
     editPopUpFunction: PropTypes.func,
     showFilteredDetailsFunction: PropTypes.func, */

};
export default (ScoreBoard);
