import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions' 


class GameHeader extends React.Component {
    state = {
        fontLoaded: false,
    };
    async componentWillMount() {
       await Font.loadAsync({
          'dpcl': require('../fonts/DPCL.otf'),
        });
        this.setState({ fontLoaded: true });
    }
    renderPlatformIcon(){
        if (this.props.platform == 'ps4'){
            return <Image source={require('../img/drawable-hdpi/ps_icon.png')} style={styles.gameIconPS}/>
        }else if (this.props.platform == 'xboxone'){
            return <Image source={require('../img/drawable-hdpi/x1_icon.png')} style={styles.gameIconX1}/>
        }
    }

    invite(){
        Alert.alert(
            'Invite pressed', '',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            { cancelable: false }
          )
    }
    render(){
        if(this.state.fontLoaded){
            return (
                <View style={styles.container}>
                    <Image source={this.props.imageSource} style={styles.gameImage}/>
                    <View style={styles.gameInfoContainer}>
                        <Text style={styles.gameText}>{this.props.game}</Text>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.gamersText}>Gamers: {this.props.memberCount}</Text> 
                            {this.renderPlatformIcon()}
                            <TouchableOpacity onPress={()=>{this.props.ActionProps.invite();
                                                            this.invite()}}>
                                <View style={styles.inviteContainer}>
                                    <Image source={require('../img/drawable-hdpi/share_icon.png')} style={styles.inviteIcon}/>
                                    <Text style={styles.inviteText}>Invite to game with link</Text>
                                </View>    
                            </TouchableOpacity>      
                        </View>
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
    return {  
              platform: state.StateProps.platform,
              memberCount: state.StateProps.memberCount,
              game: state.StateProps.game,
              imageSource: state.StateProps.imageSource
    };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:140,
    flexDirection: 'row',
    alignItems: 'center' 
  },
  gameInfoContainer: {
    flexDirection: 'column',
    marginLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 100
  },
  gameImage: {
    height: 100,
    width: 100,
    marginLeft: '7.5%'  
  },
  gameText:{
    fontFamily: 'dpcl',
    fontSize: 25,
  },
  gamersText:{
    fontFamily: 'dpcl',
    fontSize: 15,
  },
  gameIconPS: {
    width: 23, 
    height: 18
  },
  gameIconX1: {
    width: 18, 
    height: 17
  },
  inviteIcon: {
    width: 15,
    height: 22
  },
  inviteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 73
  },
  inviteText: {
    marginBottom: 1,
    marginLeft: 7,
    fontFamily: 'dpcl',
    fontSize: 15
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameHeader);

