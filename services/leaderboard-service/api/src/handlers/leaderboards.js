'use strict';

const createMockPlayer = () => {
    const mockPlayer = {
        id: 'abcd-1234-efgh-5679',
        name: 'John Gaffney',
        handicap: 24,
    };
    return mockPlayer;
};

const sendJSONRes = (status, body) => {
    let response = {
        statusCode: status,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    };
    return response;
};

const getLeaderboard = async event => {
    const mockLeaderboard = {};
    mockLeaderboard.id = event.pathParameters.id;
    mockLeaderboard.roundHeaders = ['R1', 'R2', 'R3', 'R4'];
    mockLeaderboard.players = [];
    mockLeaderboard.players[0] = createMockPlayer();
    return sendJSONRes(200, mockLeaderboard);
};

module.exports = {
    getLeaderboard,
};
