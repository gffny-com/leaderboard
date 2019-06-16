import React from 'react';
import { normalizeRoundData } from '../utils';

export const LeaderboardView = ({
    match,
    leaderboard,
    onLeaderboardUpdate
}) => {
    if (leaderboard) {
        return <>
            <table className='gffny-leaderboard'>
                <thead>
                    <tr>
                        <th></th>
                        {leaderboard.roundHeaders.map((header, index) => <th key={index}>{header}</th>)}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.players.map((player, index) => <LeaderboardRowView player={player} key={index} />)}
                </tbody>
            </table>
        </>;
    } else {
        onLeaderboardUpdate(match.params.id);
        return <>
            <span>NO DATA</span>
        </>;
    }
};

const LeaderboardRowView = ({
    player
}) => {
    let total = {
        gross: 0,
        net: 0,
        score: 0
    };
    return <>
        <tr key={player.name}>
            <th>{player.name}</th>
            {player.rounds.map((round, index) => {
                let normalizeRound = normalizeRoundData(round);
                total.gross += normalizeRound.gross;
                total.net += normalizeRound.net;
                total.score += normalizeRound.score;
                return <LeaderboardRowRoundView round={round} key={index} />
            })}
            <LeaderboardRowRoundView round={total} isTotal={true} />
        </tr>
    </>
};

const LeaderboardRowRoundView = ({
    round,
    isTotal
}) => {
    if (Object.keys(round).length === 0 || !round.score || !round.gross) {
        return <>
            <td>/</td>
        </>;
    }
    return <>
        {isTotal && <td className='total'>
            <span>{round.gross}</span>
            <span> | </span>
            <span>{round.score}</span>
        </td>}
        {!isTotal && <td >
            <span>{round.gross}</span>
            <span> | </span>
            <span>{round.score}</span>
        </td>}
    </>;
};

/**
 * MOCK LEADERBOARD
 */
/*
{
  "roundHeaders": [
    "R1",
    "R2",
    "R3",
    "R4"
  ],
  "players": [
    {
      "name": "John Gaffney",
      "handicap": 24,
      "rounds": [
        {
          "round": 1,
          "gross": 101,
          "net": 77,
          "score": 30,
          "holes": [
            {
              "gross": "6",
              "net": "5",
              "score": "2"
            },
            {
              "gross": "6",
              "net": "5",
              "score": "2"
            },
            {
              "gross": "6",
              "net": "5",
              "score": "2"
            }
          ]
        }
      ]
    }
  ]
}
*/