import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ScorecardView } from '../components/ScorecardView';
import { createHoleUpdateAction } from '../actions/ScorecardActions';

const createScorecardViewContainer = connect(
    (state) => ({
        course: state.course,
        playerData: state.playerData,
    }),
    (dispatch) => bindActionCreators({
        onHoleUpdate: createHoleUpdateAction,
    }, dispatch)
);

export const ScorecardViewContainer = createScorecardViewContainer(ScorecardView);