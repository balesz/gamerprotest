
export default (state = {}, action) => {
    switch(action.type) {
      case "CLICK_ON_MEMBER":
        return {...state}      
      default:
        return state
    }
  }