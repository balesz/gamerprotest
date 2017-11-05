export const addMember = () => {
    return {
      type: "ADD_MEMBER"
    }
  }
  
  export const clickOnAdmin = (admin) => {
    return {
      type: "CLICK_ON_ADMIN",
      payload: admin
    }
  }
  
  export const clickOnMember = (member) => {
    return {
      type: "CLICK_ON_MEMBER",
      payload: member
    }
  }
  
  export const goBack = () => {
    return {
      type: "GO_BACK"
    }
  }
  
  export const invite = ()=>{
    return {
      type: "INVITE"
    }
  }
  
  export const leaveGroup = () => {
    return {
      type: "LEAVE_GROUP"
    }
  }
  
  export const muteGroup = (bool) => {
    return {
      type: "MUTE_GROUP",
      payload: bool
    }
  }
  
  export const smartNotifications = (bool)=>{
    return {
      type: "CHANGE_NOTIFICATION",
      payload: bool
    }
  }
  
  export const showAllMember = ()=>{
    return {
      type: "SHOW_ALL_MEMBER"
    }
  }
  