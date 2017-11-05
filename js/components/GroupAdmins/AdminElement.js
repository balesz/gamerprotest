import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { Font } from 'expo'; 
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions' 


class AdminElement extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentWillMount() {
   await Font.loadAsync({
      'dpcl': require('../../fonts/DPCL.otf'), 
    });
    this.setState({ fontLoaded: true });
  }

  renderChallengeIcon(){
    if(this.props.hasChallenge){
      return (
        <Image style={styles.challengeIcon} source={require('../../../img/drawable-hdpi/vector_smart_object1_copy_4.png')} />
      )
    }
  }

  renderChallengeTextStyle(){
    if(this.props.hasChallenge){
      return (
        {
          marginLeft: 15,
          marginBottom: 10, 
          fontFamily: 'dpcl',
          fontSize: 20,
          color: '#66bc45'

        }
      )
    }else return (
      {
        marginLeft: 15,
        marginBottom: 10, 
        fontFamily: 'dpcl',
        fontSize: 20,
      }
    )
  }
  clickOnAdmin(e){
    Alert.alert(
      'Admin ' + e + " pressed", '',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      { cancelable: false }
    )
  }

  render(){
    if(this.state.fontLoaded){
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{this.clickOnAdmin(this.props.name);
            this.props.ActionProps.clickOnAdmin(this.props.name)}}>
            <View>   
              <Image style={styles.icon}source={this.props.icon} />
              <View style={styles.iconHelper}></View>
              {this.renderChallengeIcon()}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.clickOnAdmin(this.props.name);
            this.props.ActionProps.clickOnAdmin(this.props.name)}}>  
            <Text style={this.renderChallengeTextStyle()}>{this.props.name}</Text>
          </TouchableOpacity>    
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:33,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: '7.5%'       
  },
  gameInfoContainer: {
    flexDirection: 'column',
    marginLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  gameImage: {
    height: 100,
    width: 100  
  },
  gameIcon: {
    width: 18,
    height: 18
  },
  challengeIcon: {
    width: 12,
    height: 9,
    position: 'absolute',
    top: '61%',
    left: '27%',
    backgroundColor: '#66bc45'
  },
  icon: {
    width: 25,
    height: 25
  },
  iconHelper: {
    width: 25,
    height: 8,
    backgroundColor: '#fff'
  }

});

export default connect(null, mapDispatchToProps)(AdminElement);
