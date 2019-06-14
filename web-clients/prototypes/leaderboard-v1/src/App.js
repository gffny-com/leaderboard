import React from 'react';
import './App.css';
import { LeaderboardViewContainer } from './containers/LeaderboardViewContainer';
import { ScorecardViewContainer } from './containers/ScorecardViewContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

// create the application store
import { leaderboardReducer } from './reducers/LeaderboardReducer';
import { createStore } from './utils';
export const leaderboardStore = createStore(leaderboardReducer);
leaderboardStore.dispatch({ type: 'INIT' });

function App() {
  return (
    <div className='App'>
      <Provider store={leaderboardStore}>
        <Router>
          <Route path='/leaderboard/:id' component={LeaderboardViewContainer} />
          <Route path='/round/:id' component={ScorecardViewContainer} />
          <Route path='/round/play' component={ScorecardViewContainer} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
