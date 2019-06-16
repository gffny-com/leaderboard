import { REFRESH_LEADERBOARD_REQUEST, REFRESH_LEADERBOARD_COMPLETE } from '../actions/LeaderboardActions';
import { REFRESH_ROUND_REQUEST, REFRESH_ROUND_COMPLETE, REFRESH_ROUND_COURSE_REQUEST, REFRESH_ROUND_COURSE_COMPLETE } from '../actions/RoundActions';

import { clone } from 'lodash';

const leaderboardReducer = (state = {}, action) => {
    let newState = clone(state);
    newState = action.payload;
    return newState;
};

const roundReducer = (state = {}, action) => {
    let newState = clone(state);
    newState = action.payload;
    return newState;
}

const courseReducer = (state, action) => {
    let newState = clone(state);
    newState = action.payload;
    return newState;
}

export const ApplicationReducer = (state = {}, action) => {
    switch (action.type) {
        case REFRESH_LEADERBOARD_REQUEST:
            // show refreshing state?
            return state;
        case REFRESH_LEADERBOARD_COMPLETE:
            return {
                ...state,
                leaderboard: leaderboardReducer(state.leaderboard, action)
            }
        case REFRESH_ROUND_REQUEST:
            // show refreshing state?
            return state;
        case REFRESH_ROUND_COMPLETE:
            return {
                ...state,
                round: roundReducer(state.round, action)
            }
        case REFRESH_ROUND_COURSE_REQUEST:
            // show refreshing state?
            return state;
        case REFRESH_ROUND_COURSE_COMPLETE:
            return {
                ...state,
                round: {
                    ...state.round,
                    course: courseReducer(state.round.course, action)
                }
            }
        default:
            return state;
    }
};