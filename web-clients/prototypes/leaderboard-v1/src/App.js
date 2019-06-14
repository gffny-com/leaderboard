import React from 'react';
import './App.css';
import { ScorecardViewContainer } from './containers/ScorecardViewContainer';

import { HOLE_6_PLAYER_1234_SCORE_UPDATE, HOLE_5_PLAYER_1234_SCORE_UPDATE } from './actions/ScorecardActions';

import { Provider } from 'react-redux';

import { scorecardStore } from './stores/ScorecardStore';

scorecardStore.dispatch({ type: 'INIT' });

function App() {
  return (
    <div className="App">
      <Provider store={scorecardStore}>
        <ScorecardViewContainer />
      </Provider>
    </div>
  );
}

setTimeout(() => scorecardStore.dispatch(HOLE_6_PLAYER_1234_SCORE_UPDATE), 2000);

//setTimeout(() => scorecardStore.dispatch(HOLE_5_PLAYER_1234_SCORE_UPDATE), 2000);

export default App;
