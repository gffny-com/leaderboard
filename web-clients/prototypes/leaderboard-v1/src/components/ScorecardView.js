import React from 'react';

export const ScorecardView = ({
    course,
    playerData
}) => {
    return <>
        <table class='gffny-scorecard'>
            <thead>
                <tr>
                    <td></td>
                    {course.holes.map((hole, index) => <td key={index}>{hole.number}</td>)}
                </tr>
            </thead>
            <tbody>
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
                {playerData.map((data) => <>
                    <tr key={data.player.id}>
                        <td key={data.player.id}>{data.player.displayName}</td>
                        {data.score.map((holeScore, index) => <td key={index}>{holeScore}</td>)}
                    </tr>
                    <tr>
                        <td>To Par</td>
                        {data.score.map((holeScore, index) => {
                            let toPar = holeScore - course.holes[index].par;
                            let scoreType = toPar < 0 ? 'good' : toPar > 0 ? 'bad' : 'ok';
                            return <td key={index} data-score-type={scoreType}>{toPar}</td>
                        })}
                    </tr>
                </>
                )}
            </tbody>
        </table>
    </>;
}
