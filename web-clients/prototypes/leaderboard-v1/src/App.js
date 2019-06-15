import React from 'react';
import './App.css';
import { LeaderboardViewContainer } from './containers/LeaderboardViewContainer';
import { ScorecardViewContainer } from './containers/ScorecardViewContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

// create the application store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { leaderboardReducer } from './reducers/LeaderboardReducer';
import { IS_PRODUCTION } from './configs';

const middleware = IS_PRODUCTION
  ? applyMiddleware(thunk)
  : composeWithDevTools(applyMiddleware(thunk));


export const leaderboardStore = createStore(leaderboardReducer, middleware);
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
