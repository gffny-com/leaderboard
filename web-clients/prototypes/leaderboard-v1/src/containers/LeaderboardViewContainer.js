import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { LeaderboardView } from '../components/LeaderboardView';
import { refreshLeaderboardAction } from '../actions/LeaderboardActions';

const createLeaderboardViewContainer = connect(
    (state) => ({
        leaderboard: state.leaderboard
    }),
    (dispatch) => bindActionCreators({
        onLeaderboardUpdate: refreshLeaderboardAction,
    }, dispatch)
);

export const LeaderboardViewContainer = createLeaderboardViewContainer(LeaderboardView);