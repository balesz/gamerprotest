import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import MemberElement from './MemberElement';
import { Font } from 'expo'; 
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions' 


class GroupMembers extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentWillMount() {
   await Font.loadAsync({
      'dpcl': require('../../fonts/DPCL.otf'), 
    });
    this.setState({ fontLoaded: true });
  }
    
  renderMembers(){
    var key = 0;
    var membersArr = this.props.members.map((e)=>{
      key++;
      return (
        <MemberElement key={key} name={e.name} icon={e.icon} hasChallenge={e.hasChallenge}  /> 
      )
    });
    return membersArr;
  }

  addMember(){
    Alert.alert(
        'Member add pressed', '',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        { cancelable: false }
      )
  }

  
  showAllMember(){
    Alert.alert(
        'Show all member pressed', '',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        { cancelable: false }
      )
  }
            
  render(){
    if(this.state.fontLoaded){
      return (
          <View style={styles.container}> 
            <Text style={styles.header}>Group members</Text>     
            <View style={styles.addGamerContainer}>
              <TouchableOpacity onPress={()=>this.addMember()}>     
                <Image style={styles.addGamerIcon}source={require('../../../img/drawable-hdpi/rectangle_2_copy.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.addMember()}>       
                <Text style={styles.addGamerText}>add gamer</Text>
              </TouchableOpacity>  
            </View>
            {this.renderMembers()}
            <View style={styles.addGamerContainer}>
              <TouchableOpacity onPress={()=>this.showAllMember()}>        
                <Text style={styles.showAllText}>show all</Text>
              </TouchableOpacity>  
            </View>
          </View>    

      );
    }else return <View></View> 
   }
}
function mapDispatchToProps(dispatch) {
  return {
      ActionProps: bindActionCreators(actions, dispatch),
  };
}  

function mapStateToProps(state) {
  return { members: state.StateProps.members };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20
  },
  header: {
    marginLeft: '7.5%',  
    fontFamily: 'dpcl',
    fontSize: 15,
    marginBottom: 5
  },
  addGamerContainer:{
    backgroundColor: '#fff',
    height:33,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: '7.5%'       
  },
  addGamerIcon: {
    width: 16,
    height: 16,
    margin: 4.5,
    marginBottom: 12.5
  },
  addGamerText: {
    marginLeft: 15,
    marginBottom: 10,
    fontFamily: 'dpcl',
    fontSize: 20
  },
  showAllText: {
    marginLeft: 40,
    marginBottom: 7,
    fontFamily: 'dpcl',
    fontSize: 20
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMembers);
