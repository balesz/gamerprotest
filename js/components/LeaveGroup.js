import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions' 

class LeaveGroup extends React.Component {
    
    state = {
        fontLoaded: false,
    };

    async componentWillMount() {
        await Font.loadAsync({
            'dpcl': require('../fonts/DPCL.otf'),
            });
            this.setState({ fontLoaded: true });
    }
      
    leaveGroup(){
        Alert.alert(
            'leaveGroup pressed', '',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            { cancelable: false }
        )
    }
    
    render() {
        if(this.state.fontLoaded){
            return (
                <View>
                    <TouchableOpacity onPress={()=>{this.leaveGroup();
                                                    this.props.ActionProps.leaveGroup()}}>
                        <Text style={styles.text}>Leave group</Text>
                    </TouchableOpacity>    
                </View>    
            );  
        }else return <View></View>    
    }
}    

const styles = StyleSheet.create({
    text: {
        color: '#f44336',
        fontFamily: 'dpcl',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: '7.5%',
        fontSize: 20
    }
  });
 

function mapDispatchToProps(dispatch) {
    return {
        ActionProps: bindActionCreators(actions, dispatch),
    };
}  

export default connect(null, mapDispatchToProps)(LeaveGroup);