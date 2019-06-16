import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { LeaderboardViewContainer } from './containers/LeaderboardViewContainer';
import { ScorecardViewContainer } from './containers/ScorecardViewContainer';
import { RoundViewContainer } from './containers/RoundViewContainer';
import { WelcomeViewContainer } from './containers/WelcomeViewContainer';
import { ApplicationReducer } from './reducers/ApplicationReducer';
import { IS_PRODUCTION } from './configs';

const middleware = IS_PRODUCTION
  ? applyMiddleware(thunk)
  : composeWithDevTools(applyMiddleware(thunk));

export const ApplicationStore = createStore(ApplicationReducer, middleware);
ApplicationStore.dispatch({ type: 'INIT' });

function App() {
  return (
    <div className='App'>
      <Provider store={ApplicationStore}>
        <Router>
          <Route path='/' component={WelcomeViewContainer} />
          <Route path='/leaderboard/:id' component={LeaderboardViewContainer} />
          <Route path='/round/:id' component={RoundViewContainer} />
          <Route path='/round/play' component={ScorecardViewContainer} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
