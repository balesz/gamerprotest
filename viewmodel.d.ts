import * as RN from "react-native"

type Platform = "ps4" | "xboxone"

export namespace Group {

  namespace Info {

    type Props = ActionProps & StateProps

    interface ActionProps {
      addMember()
      clickOnAdmin(key: string)
      clickOnMember(key: string)
      goBack()
      invite()
      leaveGroup()
      muteGroup(value: boolean)
      smartNotifications(value: boolean)
      showAllMember()
    }

    interface StateProps {
      admins: Member[]
      game: string
      imageSource: RN.ImageURISource
      memberCount: number
      members: Member[]
      muteGroup: boolean
      platform: Platform
      smartNotifications: boolean
    }

    interface Member {
      key: string
      hasChallenge: boolean
      imageSource: RN.ImageURISource
      username: string
    }
  }
}