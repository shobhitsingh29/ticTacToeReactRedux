import ScoreBoard from "../components/scoreBoard";
import {connect} from "react-redux";
import * as stateActions from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        scores: state.state.scores
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ScoreBoardContainer = connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);

export default ScoreBoardContainer;
