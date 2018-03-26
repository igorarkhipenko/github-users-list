import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Thumbnail, Text, Left, Body, Right, ListItem } from 'native-base';

import { styles } from '../../styles/root.style';

export default UserRow = (props) => {
  const { user, isFollower } = props;
  const { login, avatarUrl } = user;

  return (
    <ListItem
      first={props.first}
      last={props.last}
      style={styles.userRowContainer}
      onPress={() => !isFollower && props.onUserPress(props.user)}
    >
      <Thumbnail 
        square 
        size={100} 
        source={{ uri: avatarUrl }} 
      />
      <Body>
        <Text style={styles.userRowHeader}>
          {login}
        </Text>
      </Body>
      {!isFollower && (<Right>
        <Icon name="arrow-forward" />
      </Right>)}
    </ListItem>
  );
} 
