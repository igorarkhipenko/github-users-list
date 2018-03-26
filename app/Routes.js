import React, { Component } from 'react';
import {
  Scene,
  Reducer,
  Router,
} from 'react-native-router-flux';
import { connect } from 'react-redux';

import UsersList from './containers/UsersList.container';
import FollowersList from './containers/FollowersList.container';

import { styles } from './styles/root.style';

@connect()
export default class Routes extends Component {
  constructor(props) {
    super(props);

    this.createReducer = this.createReducer.bind(this);
  }

  createReducer(params) {
    const defaultReducer = Reducer(params);

    return (state, action) => {
      this.props.dispatch(action);

      return defaultReducer(state, action);
    };
  }

  render() {
    return (
      <Router createReducer={this.createReducer}>
        <Scene 
          key="root"
          style={styles.fullFlex}
        >
          <Scene 
            initial
            key="usersList"
            component={UsersList}
            title="Users list"
          />
          <Scene 
            key="followersList"
            component={FollowersList}
          />
        </Scene>
      </Router>
    );
  }
}
