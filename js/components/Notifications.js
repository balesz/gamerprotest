import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Font } from 'expo'; 
import Switch from 'react-native-material-switch';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions' 


class Notifications extends React.Component {

  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    await Font.loadAsync({
        'dpcl': require('../fonts/DPCL.otf'),
      });
      this.setState({ fontLoaded: true });
  }

  render() {
    if(this.state.fontLoaded){
      return (
        <View style={styles.container}>
          <View style={styles.notificationContainer}>   
              <Text style={styles.headerText}>Smart notifications</Text>
              <Switch 
                active={this.props.smartNotifications}
                buttonRadius={7}
                switchHeight={10}
                switchWidth={26} 
                onActivate={() => {this.props.ActionProps.smartNotifications(true)}}
                onDeactivate={() => {this.props.ActionProps.smartNotifications(false)}}
                activeBackgroundColor='#8CDBE4'
                inactiveBackgroundColor='#E0E0E0'
                activeButtonColor='#19b7ca'
                activeButtonPressedColor='#19b7ca'
                inactiveButtonColor='#c2c2c2'
                inactiveButtonPressedColor='#c2c2c2'
              />  
          </View> 
          <View style={styles.subTextContainer}>     
              <Text style={styles.subText}>{this.props.smartNotifications ? "You will receive a single notification for continious messages" : "You will not receive any notifications for messages"}</Text>
          </View>
          <View style={styles.notificationContainer}>   
              <Text style={{fontFamily: 'dpcl', fontSize: 20 }}>Mute group</Text>
              <Switch 
                active={this.props.muteGroup}
                buttonRadius={7}
                switchHeight={10}
                switchWidth={26} 
                onActivate={() => {this.props.ActionProps.muteGroup(true)}}
                onDeactivate={() => {this.props.ActionProps.muteGroup(false)}}
                activeBackgroundColor='#8CDBE4'
                inactiveBackgroundColor='#E0E0E0'
                activeButtonColor='#19b7ca'
                activeButtonPressedColor='#19b7ca'
                inactiveButtonColor='#c2c2c2'
                inactiveButtonPressedColor='#c2c2c2'
              />  
          </View>
          <View style={styles.subTextContainer}>   
              <Text style={styles.subText}>{this.props.muteGroup ? "You will receive a single notification for continious messages" : "You will not receive any notifications for messages"}</Text>
          </View> 

        </View>  
      )
    }else return <View></View>
  }
}

function mapDispatchToProps(dispatch) {
  return {
      ActionProps: bindActionCreators(actions, dispatch),
  };
}  

function mapStateToProps(state) {
  return { 
          smartNotifications: state.StateProps.smartNotifications,
          muteGroup: state.StateProps.muteGroup
         };
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
    marginTop: 20
  },
  headerText: {
    fontFamily: 'dpcl',
    fontSize: 20
  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '7.5%'
  },
  subText: {
    fontFamily: 'dpcl',
    color: '#767676',
    fontSize: 12.5
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

