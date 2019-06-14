import { HOLE_UPDATED } from '../actions/ScorecardActions';
import { clone } from 'lodash';

const scoreReducer = (state = mockPlayerData, action) => {
    switch (action.type) {
        case HOLE_UPDATED:
            return playerDataReducer(state, action);
        default:
            return state;
    };
};

const courseReducer = (state = mockCourseData, action) => {
    return state;
}

const playerDataReducer = (state = mockPlayerData, action) => {
    // state at this point is an array of player's data 
    // { player: { id: ... }, score: [1,2,3,4]
    // action could contain multiple score updates
    return action.payload.map((holeScore) => {
        // { playerId:..., holeNumber: ..., score: ... }
        let newState = clone(state);
        let playerIndex = newState.findIndex(pd => pd.player.id === holeScore.playerId);
        // call new reducer that takes the 
        newState[playerIndex].score[holeScore.holeNumber - 1] = holeScore.score;
        console.log(`newState[${playerIndex}].score[${holeScore.holeNumber - 1}]: ${newState[playerIndex].score[holeScore.holeNumber - 1]}`);
        return newState;
    });
};

// const newPlayerDataReducer = (state = mockPlayerData, action) => {
//     // state at this point is an array of player's data 
//     // { player: { id: ... }, score: [1,2,3,4]
//     // action could contain multiple score updates
//     return action.payload.map((holeScore) => {
//         // { playerId:..., holeNumber: ..., score: ... }
//         let playerIndex = state.findIndex(pd => pd.player.id === holeScore.playerId);
//         // call new reducer that takes the 
//         state[playerIndex]: reducePlayerScore(state[playerIndex].score [holeScore.holeNumber - 1] = holeScore.score;
//         console.log(`newState[${playerIndex}].score[${holeScore.holeNumber - 1}]: ${newState[playerIndex].score[holeScore.holeNumber - 1]}`);
//         return newState;
//     });
// };

export const scorecardReducer = (state = {}, action) => {
    return {
        ...state,
        course: courseReducer(state.course, action),
        playerData: scoreReducer(state.playerData, action),
    };
};

export const leaderboardReducer = (state, action) => {
    return state;
};

/*
 * 
 *

{
    "id": "scorecardId",
    "player": {
        "id": "player-1234",
        "displayName": "John D. Gaffney",
        "handicap": 4
    },
    "score": [
        4,
        4,
        5,
        4,
        3,
        4,
        5,
        4,
        3
    ]
}
*/


/**
 * MOCK DATA!
 */

const mockCourseData = {
    "id": "1234-abcd-5678-efgh",
    "name": "Pebble Beach",
    "holes": [
        {
            "number": 1,
            "index": 8,
            "par": 4,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 2,
            "index": 10,
            "par": 5,
            "blue": 511,
            "gold": 460,
            "white": 428,
            "red": 360
        },
        {
            "number": 3,
            "index": 12,
            "par": 4,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 4,
            "index": 16,
            "par": 4,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 5,
            "index": 14,
            "par": 3,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 6,
            "index": 2,
            "par": 5,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 7,
            "index": 18,
            "par": 3,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 8,
            "index": 6,
            "par": 4,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        },
        {
            "number": 9,
            "index": 5,
            "par": 4,
            "blue": 377,
            "gold": 346,
            "white": 332,
            "red": 309
        }
    ]
}

const mockPlayerData =
    [
        {
            "player": {
                "id": "player-1234",
                "displayName": "John D. Gaffney",
                "handicap": 4
            },
            "score": [
                4,
                4,
                5,
                4,
                3,
                4,
                5,
                4,
                3
            ]
        }
    ]