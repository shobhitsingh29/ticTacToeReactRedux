import Home from "../components/home";
import * as stateActions from "../actions/actions";
import { connect } from "react-redux";

// import { getRenderingData } from '../common/reselect/selector';

const mapStateToProps = (state)=> {
  return {
    game: state.state

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    select: (index) => dispatch(stateActions.selectFunction(index)),
    reset: () => dispatch(stateActions.resetFunction()) /*
        showSearchedDetailsFunction: (searchedData) => dispatch(stateActions.showSearchedDetailsFunction(searchedData)),
        clearSearchTextFunction: () => dispatch(stateActions.clearSearchTextFunction()),
        handleSearchText: (searchText) => dispatch(stateActions.searchTextFunction(searchText)), */
  };
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
