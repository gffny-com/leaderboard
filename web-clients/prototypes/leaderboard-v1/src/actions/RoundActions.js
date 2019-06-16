import { SERVER_URL } from '../configs';

export const REFRESH_ROUND_REQUEST = '[leaderboard][action][REFRESH_ROUND_REQUEST]';
export const REFRESH_ROUND_COMPLETE = '[leaderboard][action][REFRESH_ROUND_COMPLETE]';
export const REFRESH_ROUND_COURSE_REQUEST = '[leaderboard][action][REFRESH_ROUND_COURSE_REQUEST]';
export const REFRESH_ROUND_COURSE_COMPLETE = '[leaderboard][action][REFRESH_ROUND_COURSE_COMPLETE]';

export const createRefreshRoundRequest = () => ({ type: REFRESH_ROUND_REQUEST });
export const createRefreshRoundComplete = (roundData) => ({ type: REFRESH_ROUND_COMPLETE, payload: roundData });
export const createRefreshCourseRequest = () => ({ type: REFRESH_ROUND_COURSE_REQUEST });
export const createRefreshCourseComplete = (courseData) => ({ type: REFRESH_ROUND_COURSE_COMPLETE, payload: courseData });

export const refreshRoundAction = (roundId) => {
    // create a thunk to request leaderboard data from api
    return (dispatch) => {
        dispatch(createRefreshRoundRequest());
        return fetch(`${SERVER_URL}/rounds/${roundId}`)
            .then(res => res.json())
            .then(jsonPayload => {
                dispatch(refreshRoundCourseAction(jsonPayload.course.id));
                dispatch(createRefreshRoundComplete(jsonPayload))
            });
    };
};

export const refreshRoundCourseAction = (courseId) => {
    // create a thunk to request leaderboard data from api
    return (dispatch) => {
        dispatch(createRefreshCourseRequest());
        return fetch(`${SERVER_URL}/courses/${courseId}`)
            .then(res => res.json())
            .then(jsonPayload => dispatch(createRefreshCourseComplete(jsonPayload)));
    };
};