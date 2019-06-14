export const HOLE_UPDATED = 'HOLE_UPDATED';

// each player in a hole will get a score?! but also individual holes can be update?!
/*
    holeScoreData = [
        {
            playerId: xyz,
            holeNumber: #,
            score: # 
        }
    ]
*/
export const createHoleUpdateAction = (holeScoreData) => ({ type: HOLE_UPDATED, payload: holeScoreData });

export const HOLE_5_PLAYER_1234_SCORE_UPDATE = createHoleUpdateAction([{
    playerId: "player-1234",
    holeNumber: 5,
    score: 4
}]);

export const HOLE_6_PLAYER_1234_SCORE_UPDATE = createHoleUpdateAction([{
    playerId: "player-1234",
    holeNumber: 6,
    score: 3
}]);