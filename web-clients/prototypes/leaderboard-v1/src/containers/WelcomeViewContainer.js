import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { WelcomeView } from '../components/WelcomeView';

const createViewContainer = connect(
    (state) => ({
        // add state
    }),
    (dispatch) => bindActionCreators({
        // add actions
    }, dispatch)
);

export const WelcomeViewContainer = createViewContainer(WelcomeView);