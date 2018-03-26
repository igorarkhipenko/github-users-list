import React, { Component } from 'react';
import { ListView } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import {
  getFollowersList,
} from '../redux/modules/main.module';

import UserRow from '../components/shared/UserRow.component';
import withSpinner from '../components/shared/withSpinner.component';

import { styles } from '../styles/root.style';

const ListViewWithSpinner = withSpinner(ListView);

@connect(
  state => ({
    followersList: state.main.followersList,
  }),
  dispatch => bindActionCreators({ getFollowersList }, dispatch)
)
export default class FollowersList extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isLoading: true,
    };
  } 

  componentDidMount() {
    const { followersUrl } = this.props.user;

    this.props.getFollowersList(followersUrl)
      .then(() => this.setState({ isLoading: false }));
  }

  render() {
    const { followersList = [] } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <ListViewWithSpinner 
        isLoading={this.state.isLoading}
        dataSource={ds.cloneWithRows(followersList)}
        style={styles.fullFlex}
        onEndReached={this.handleEndReached}
        renderRow={user => (
          <UserRow 
            user={user}
            key={user.id}
            isFollower={true}
            first={index = 0}
            last={index = followersList.length - 1}
            onUserPress={this.handleUserPress}
          />
        )}
      />
    );
  }
}
