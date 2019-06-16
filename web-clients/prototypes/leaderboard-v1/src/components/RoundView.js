import React from 'react';

export const RoundView = ({
    match,
    round,
    onRoundUpdate
}) => {
    if (round) {
        return <>
            <table className='gffny-scorecard'>
                <CourseTableHeadView course={round.course} />
                <PlayerListTableBodyView playerList={round.players} />
            </table>
        </>;
    } else {
        onRoundUpdate(match.params.id);
        return <>
            <table>
                <tbody><tr><td>NO ROUND DATA</td></tr></tbody>
            </table>
        </>;
    }
};

const CourseTableHeadView = ({
    course
}) => {
    if (course && course.holes) {
        return <>
            <thead>
                <tr>
                    <td></td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.number}</td>)}
                </tr>
                <tr>
                    <td>Index</td>
                    {course.holes.map((hole, index) => <td key={index} >{hole.index}</td>)}
                </tr>
                <tr>
                    <td>Par</td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.par}</td>)}
                </tr>
                <tr>
                    <td>Blue</td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.blue}</td>)}
                </tr>
                <tr>
                    <td>Gold</td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.gold}</td>)}
                </tr>
                <tr>
                    <td>White</td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.white}</td>)}
                </tr>
                <tr>
                    <td>Red</td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.red}</td>)}
                </tr>
            </thead>
        </>;
    } else {
        return <>
            <thead>
                <tr>
                    <td colSpan='18'>NO DATA</td>
                </tr>
            </thead>
        </>;
    }
}

const PlayerListTableBodyView = ({
    playerList
}) => {
    if (playerList) {
        return <>
            <tbody>
                {playerList.map((player, index) => <PlayerTableRowView player={player} key={index} />)}
            </tbody>
        </>;
    } else {
        return <>
            <tbody>
                <tr>
                    <td colSpan='18'>NO PLAYER LIST DATA</td>
                </tr>
            </tbody>
        </>;
    }

};

const PlayerTableRowView = ({
    player
}) => {
    if (player && player.rounds && player.rounds[0]) {
        let round = player.rounds[0];
        return <>
            <tr>
                <th>
                    <span className='player-name'>{player.name}</span>
                    <span> | </span>
                    <span className='player-handicap'>{player.handicap}</span>
                    <span> | </span>
                    <span className='round-tees'>{round.tees}</span>
                </th>
                {round.holes.map((hole, index) => <PlayerHoleView hole={hole} key={index} />)}
            </tr>
        </>;
    } else {
        return <>
            <tr>
                <td colSpan='18'>NO ROUND DATA</td>
            </tr>
        </>;
    }
};

const PlayerHoleView = ({
    hole
}) => {
    if (hole && hole.score) {
        return <>
            <td>
                <span className='hole-score'>{hole.score}</span>
                <span> | </span>
                <span className='hole-gross'>{hole.gross}</span>
                <span> | </span>
                <span className='hole-net'>{hole.net}</span>
            </td>
        </>;
    } else {
        return <>
            <td> / </td>
        </>;
    }
};

/**
 * MOCK ROUND DATA
 */
/*
const mockData = {
    "course": {
        "id": "1234-abcd-5678-efgh"
    },
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
                    "tees": "Blue",
                    "isComplete": false,
                    "is9Hole": true,
                    "holes": [
                        {
                            "gross": "6",
                            "net": "5",
                            "score": "2"
                        },
                        {
                            // 2
                        },
                        {
                            // 3
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
                        },
                        {
                            //6
                        },
                        {
                            //7
                        },
                        {
                            //8
                        },
                        {
                            //9
                        }
                    ]
                }
            ]
        }
    ]
};
*/