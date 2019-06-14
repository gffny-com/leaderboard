import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { LeaderboardView } from '../components/LeaderboardView';
import { createHoleUpdateAction } from '../actions/ScorecardActions';

const createLeaderboardViewContainer = connect(
    (state) => ({
        course: state.course,
        playerData: state.playerData,
    }),
    (dispatch) => bindActionCreators({
        onHoleUpdate: createHoleUpdateAction,
    }, dispatch)
);

export const LeaderboardViewContainer = createLeaderboardViewContainer(LeaderboardView);