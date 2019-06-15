import { SERVER_URL } from '../configs';

export const REFRESH_LEADERBOARD_REQUEST = '[leaderboard][action][REFRESH_LEADERBOARD_REQUEST]';
export const REFRESH_LEADERBOARD_COMPLETE = ' [leaderboard][action][REFRESH_LEADERBOARD_COMPLETE]';

export const createRefreshLeaderboardRequest = () => ({ type: REFRESH_LEADERBOARD_REQUEST });
export const createRefreshLeaderboardComplete = (leaderboardData) => ({ type: REFRESH_LEADERBOARD_COMPLETE, payload: leaderboardData });

export const refreshLeaderboardAction = (leaderboardId) => {
    // create a thunk to request leaderboard data from api
    console.log(`refreshLeaderboardAction: ${leaderboardId}`);
    return (dispatch) => {
        dispatch(createRefreshLeaderboardRequest());
        return fetch(`${SERVER_URL}/leaderboard/${leaderboardId}`)
            .then(res => res.json())
            .then(jsonPayload => dispatch(createRefreshLeaderboardComplete(jsonPayload)));
    };
};