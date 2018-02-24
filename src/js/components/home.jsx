import React from "react";

import Header from "./Header";
import PropTypes from "prop-types";


class Home extends React.PureComponent {
  constructor (props) {
    super(props);
      this.resetScore = this.resetScore.bind(this);
      this.selectEvent = this.selectEvent.bind(this);
    /*
        this.state = {
            data: [],
            redirectn: false,
        };
        this.handleSearchText = this.handleSearchText.bind(this);
        this.searchData = this.searchData.bind(this);
        this.clearData = this.clearData.bind(this);
        this.searchData = this.searchData.bind(this); */
  }

  componentDidMount () {
    //  this.props.showDetailsFunction();
  }

  componentWillReceiveProps (newProps) {

    /*   if (newProps.match.path.match('home')) {
            this.setState({
                data: newProps.items,
            });

        } else {
            this.setState({
                data: newProps.filteredItems,
            });

        }

        if (newProps.searchText === '') {
            this.setState({
                redirectn: false,
            });
        } else {
            this.setState({
                redirectn: true,
            });
        } */
  }

  resetScore () {
      this.props.reset();
  }


    selectEvent (idx) {
      this.props.select(idx);
    //  this.props.showSearchedDetailsFunction(this.props.filteredItm);
  }

  render () {


       const controlSet = this.props.game.is_done ? (
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
            <div key={idx} className='gridCell' onClick={this.selectEvent.bind(this,idx)}><div>{cell}</div></div>
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  /*  searchText: PropTypes.string,
    filteredItems: PropTypes.array,
    filterData: PropTypes.array,
    showDetailsFunction: PropTypes.func,
    clearSearchTextFunction: PropTypes.func,
    showSearchedDetailsFunction: PropTypes.func,
    handleSearchText: PropTypes.func,
    match: PropTypes.object, */

};
export default (Home);
