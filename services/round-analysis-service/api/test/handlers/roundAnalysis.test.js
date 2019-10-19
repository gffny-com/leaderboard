const { getRoundAnalysis } = require('../../src/handlers/roundAnalysis');

describe('round analysis handler test suite', () => {
    it('returns a round when passed a valid id', async () => {
        const response = getRoundAnalysis({
            pathParameters: {
                id: '12345',
            },
        });
        expect(response).toBeTruthy();
        expect(response.statusCode).toEqual(200);
    });

    it('returns an invalid request if an id is not passed', async () => {
        const response = getRoundAnalysis({
            pathParameters: {},
        });
        expect(response).toBeTruthy();
        expect(response.statusCode).toEqual(400);
    });
});
