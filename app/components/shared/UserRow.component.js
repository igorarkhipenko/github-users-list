import React, { Component } from 'react';
import { Icon, Thumbnail, Text, Body, Right, ListItem } from 'native-base';

import { styles } from '../../styles/root.style';

const THUMBNAIL_SIZE = 100;

export default class UserRow extends Component {
  handlePress = () => {
    if (!isFollower) {
      this.props.onUserPress(this.props.user);
    }
  };

  render() {
    const { user, isFollower } = props;
    const { login, avatarUrl } = user;

    return (
      <ListItem
        first={props.first}
        last={props.last}
        style={styles.userRowContainer}
        onPress={this.handlePress}
      >
        <Thumbnail 
          square 
          size={THUMBNAIL_SIZE} 
          source={{ uri: avatarUrl }} 
        />
        <Body>
          <Text style={styles.userRowHeader}>
            {login}
          </Text>
        </Body>
        {!isFollower && (
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        )}
      </ListItem>
    );
  }
}
