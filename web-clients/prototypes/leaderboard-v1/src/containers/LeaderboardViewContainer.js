import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { LeaderboardView } from '../components/LeaderboardView';
import { refreshLeaderboardAction } from '../actions/LeaderboardActions';

const createViewContainer = connect(
    (state) => ({
        leaderboard: state.leaderboard
    }),
    (dispatch) => bindActionCreators({
        onLeaderboardUpdate: refreshLeaderboardAction,
    }, dispatch)
);

export const LeaderboardViewContainer = createViewContainer(LeaderboardView);