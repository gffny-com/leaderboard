import React from 'react';
import { map } from 'lodash/fp';

// https://github.com/lodash/lodash/wiki/FP-Guide

export const mapIds = map(x => x.id);

export const nextId = items =>
  Math.max(...mapIds(items), 0) + 1;

export const copy = list => list.slice();

export const createStore = (reducerFn) => {

  let currentState = {};
  const subscribeFns = [];

  return {
    getState: () => currentState,
    dispatch: (action) => {
      const newState = reducerFn(currentState, action);
      if (newState !== currentState) {
        subscribeFns.forEach(fn => fn());
      }
      currentState = newState;
    },
    subscribe: (cb) => {
      subscribeFns.push(cb);
      return () => {
        subscribeFns.splice(subscribeFns.indexOf(cb), 1);
      };
    },
  };

};

export const bindActionCreators = (actions, dispatch) => {
  return Object.keys(actions).reduce((boundActions, actionKey) => {
    boundActions[actionKey] = (...params) => dispatch(actions[actionKey](...params));
    return boundActions;
  }, {});
};

export const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {

  return PresentationalComponent => {

    return class ContainerComponent extends React.Component {

      constructor(props) {
        super(props);
        this.dispatchProps = mapDispatchToPropsFn(props.store.dispatch);
      }

      componentDidMount() {
        this.storeUnsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.storeUnsubscribe();
      }

      render() {
        const stateProps = mapStateToPropsFn(this.props.store.getState());
        return <PresentationalComponent {...this.dispatchProps} {...stateProps} />;
      }
    }
  };
};

