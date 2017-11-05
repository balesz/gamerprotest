import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions' 


class NavigationHeader extends React.Component {

    state = {
        fontLoaded: false,
    };

    async componentWillMount() {
       await Font.loadAsync({
          'dpcl': require('../fonts/DPCL.otf'),
        });
        this.setState({ fontLoaded: true });
      }

    goBack(){
        Alert.alert(
            'goback', '',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            { cancelable: false }
          )
    };

    render(){  
        if(this.state.fontLoaded){
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>{this.props.ActionProps.goBack();
                       this.goBack()}}>
                        <Image source={require('../../img/drawable-hdpi/back_icon.png')} style={styles.backImage}/>
                    </TouchableOpacity>     
                    <Text style={styles.text}>Info</Text>    
                    <View style={styles.textAlign}></View> 
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:69, 
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backImage: {
    marginTop: 33,
    marginLeft: 15,
    width: 9,
    height: 15 
  },
  text: {
    marginTop: 33,
    marginRight: 5,
    fontFamily: 'dpcl',
    fontSize: 22.5
  },
  textAlign: {
    marginRight: '5%'
  }


});

export default connect(null, mapDispatchToProps)(NavigationHeader);
