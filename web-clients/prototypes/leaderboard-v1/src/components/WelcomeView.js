import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomeView = ({
    match,
}) => {
    return <>
        <h1>WELCOME!</h1>
        <div>
            <Link to='/leaderboard/abcd-1234-efgh-5678'>Leaderboard</Link>
            <br />
            <Link to='/round/abcd-1234-efgh-5678'>Round</Link>
        </div>
    </>;
};