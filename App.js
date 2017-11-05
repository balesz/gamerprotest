import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Provider } from 'react-redux';
import store from './js/store';
import { Tabcomponent } from './js/components/Tabcomponent';
import  NavigationHeader  from './js/components/NavigationHeader';
import  GameHeader  from './js/components/GameHeader';   
import  GroupAdmins  from './js/components/GroupAdmins/GroupAdmins';
import  GroupMembers from './js/components/GroupMembers/GroupMembers';
import  Notifications  from './js/components/Notifications';
import  LeaveGroup from './js/components/LeaveGroup';      


export default class App extends React.Component { 
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ScrollView>
              <NavigationHeader />
              <Tabcomponent />
              <GameHeader />
              <Tabcomponent />
              <GroupAdmins />
              <Tabcomponent />
              <GroupMembers />
              <Tabcomponent />
              <Notifications />
              <Tabcomponent />
              <LeaveGroup />
              <Tabcomponent />
          </ScrollView>
        </View>  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%'
  },
});
