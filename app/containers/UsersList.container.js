import React, { Component } from 'react';
import { ListView } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';

import {
  getUsersList,
} from '../redux/modules/main.module';

import UserRow from '../components/shared/UserRow.component';
import withSpinner from '../components/shared/withSpinner.component';

import { styles } from '../styles/root.style';

const ListViewWithSpinner = withSpinner(ListView);

@connect(
  state => ({
    usersList: state.main.usersList,
    usersPageNumber: state.main.usersPageNumber,
  }),
  dispatch => bindActionCreators({ getUsersList }, dispatch)
)
export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isLoading: true,
      isDataReceived: false,
    };

    this.handleUserPress = this.handleUserPress.bind(this);
    this.handleEndReached = this.handleEndReached.bind(this);
  } 

  componentDidMount() {
    this.props.getUsersList()
      .then(() => this.setState({ 
        isLoading: false, 
        isDataReceived: true 
      }));
  }

  handleEndReached() {
    const { usersPageNumber } = this.props;
    const { isDataReceived } = this.state;

    if (isDataReceived) {
      this.props.getUsersList(usersPageNumber);
    }
  }

  handleUserPress(user) {
    Actions.followersList({ 
      user,
      title: user.login,
    });
  }

  render() {
    const { usersList = [] } = this.props;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    return (
      <ListViewWithSpinner 
        isLoading={this.state.isLoading}
        dataSource={ds.cloneWithRows(usersList)}
        style={styles.fullFlex}
        onEndReached={this.handleEndReached}
        renderRow={user => (
          <UserRow 
            user={user}
            key={user.id}
            first={index = 0}
            last={index = usersList.length - 1}
            onUserPress={this.handleUserPress}
          />
        )}
      />
    );
  }
}
