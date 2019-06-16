import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { RoundView } from '../components/RoundView';
import { refreshRoundAction } from '../actions/RoundActions';

const createViewContainer = connect(
    (state) => ({
        round: state.round
    }),
    (dispatch) => bindActionCreators({
        // add actions
        onRoundUpdate: refreshRoundAction
    }, dispatch)
);

export const RoundViewContainer = createViewContainer(RoundView);