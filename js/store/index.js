import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';


const store = createStore(
  rootReducer,
  {
    StateProps:{
      admins: [        
        {
          name: "GP admin",
          icon: require('../img/drawable-hdpi/avatar_copy.png'), 
          hasChallenge: false
        },
        {
          name: "username",
          icon: require('../img/drawable-hdpi/gamer_avatar_copy_12_copy.png'),
          hasChallenge: true
        }
      ],
      game: "FIFA 18",
      imageSource: require('../img/drawable-hdpi/ast_layer_3_copy_3.png'),
      memberCount: 48,
      members: [
          {
            name: "username",
            icon: require('../img/drawable-hdpi/gamer_avatar_copy_17.png'),
            hasChallenge: false
          },
          {
            name: "username",
            icon: require('../img/drawable-hdpi/gamer_avatar_copy_16.png'),
            hasChallenge: true
          },
          {
            name: "username",
              icon: require('../img/drawable-hdpi/gamer_avatar_copy_14.png'),
              hasChallenge: false
          },
          {
            name: "username",
            icon: require('../img/drawable-hdpi/gamer_avatar_copy_12_copy.png'),
            hasChallenge: true
          },
          {
            name: "username",
            icon: require('../img/drawable-hdpi/gamer_avatar_copy_18.png'),
            hasChallenge: false
          },
          {
            name: "username",
            icon: require('../img/drawable-hdpi/gamer_avatar_copy_18.png'),
            hasChallenge: false
          }
      ],
      muteGroup: false,
      platform: "ps4",
      smartNotifications: false  
    },
    Member:{
      key: "asd",
      hasChallenge: true,
      imageSource: "image",
      username: "dracarys" 
    }
  },
  compose(
    applyMiddleware(logger),
  )
);


export default store;