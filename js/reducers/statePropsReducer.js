
export default (state = {}, action) => {
    switch(action.type) {
      case "GO_BACK":
        return {...state}    
      case "CHANGE_NOTIFICATION":
        return {...state, smartNotifications: action.payload}    
        case "MUTE_GROUP":
        return {...state, muteGroup: action.payload}     
      default:
        return state
    }
  } 