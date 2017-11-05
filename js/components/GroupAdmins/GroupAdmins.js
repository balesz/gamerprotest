import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import AdminElement from './AdminElement';
import { Font } from 'expo'; 
import {connect} from 'react-redux';



class GroupAdmins extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentWillMount() {
   await Font.loadAsync({
      'dpcl': require('../../fonts/DPCL.otf'), 
    });
    this.setState({ fontLoaded: true });
  }
  
  renderAdmins(){
    var key = 0;
    var adminsArr = this.props.admins.map((e)=>{
      key++;
      return (
        <AdminElement key={key} name={e.name} icon={e.icon} hasChallenge={e.hasChallenge}  /> 
      )
    });
    return adminsArr;
  }
            
  render(){
    if(this.state.fontLoaded){
      return (
          <View style={styles.container}>
              <Text style={styles.header}>Group admin(s)</Text>
              {this.renderAdmins()}
          </View>    
      );
    }else return <View></View>
   }
}


function mapStateToProps(state) {
  return { admins: state.StateProps.admins };
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
  }

});

export default connect(mapStateToProps)(GroupAdmins);
