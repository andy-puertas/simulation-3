const initialState = {
    userId: 0,
    username: '',
    profilePic: ''
}

const GET_USER = 'GET_USER';


export default function reducer(state=initialState, action) {
    console.log(action.payload)
    switch(action.type) {
        case GET_USER:
            return Object.assign( {}, state, { 
                userId: action.payload.userId.id,
                username: action.payload.userId.username,
                profilePic: action.payload.userId.profilePic} );
        
        default:
            return state;    
    }
}

export function getUser(userId, username, profilePic) {
    console.log(userId, username, profilePic)
    return {
      type: GET_USER,
      payload: {
        userId,
        username,
        profilePic
      }
    }
  };