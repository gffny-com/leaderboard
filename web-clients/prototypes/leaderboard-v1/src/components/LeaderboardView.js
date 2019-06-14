import React from 'react';

let mockLeaderboard = {
    "roundHeaders": ["R1", "R2", "R3", "R4"],
    "players": [
        {
            "name": "John Gaffney",
            "handicap": 24,
            "rounds": [{
                "round": 1,
                "gross": 101,
                "net": 77,
                "score": 30,
                "holes": [{
                    "gross": "6",
                    "net": "5",
                    "score": "2"
                }, {
                    "gross": "6",
                    "net": "5",
                    "score": "2"
                }, {
                    "gross": "6",
                    "net": "5",
                    "score": "2"
                }]
            }]
        }
    ]
};

export const LeaderboardView = ({
    leaderboard = mockLeaderboard
}) => {
    return <>
        <table class='gffny-leaderboard'>
            <thead>
                <tr>
                    <th></th>
                    {leaderboard.roundHeaders.map((header) => <th>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {leaderboard.players.map((player) => <LeaderboardRowView player={player} />)}
            </tbody>
        </table>
    </>;
};

const LeaderboardRowView = ({
    player
}) => {
    return <>
        <tr>
            <th>{player.name}</th>
            {player.rounds.map((round) => <LeaderboardRowRoundView round={round} />)}
        </tr>
    </>
};

const LeaderboardRowRoundView = ({
    round
}) => {
    return <>
        <td>
            <span>{round.gross}</span>
            <span> | </span>
            <span>{round.score}</span>
        </td>
    </>
};

/**
 * MOCK LEADERBOARD
 */
/*
{
    "roundHeaders": ["R1", "R2", "R3", "R4"],
    "players": [
        {
            "name": "John Gaffney",
            "handicap": 24,
            "rounds": [{
                "round": 1,
                "gross": 101,
                "net": 77,
                "score": 30,
                "holes": [{
                    "gross": "6",
                    "net": "5",
                    "score": "2"
                }, {
                    "gross": "6",
                    "net": "5",
                    "score": "2"
                },{
                    "gross": "6",
                    "net": "5",
                    "score": "2"
                }]
            }]
        }
    ]
}
*/