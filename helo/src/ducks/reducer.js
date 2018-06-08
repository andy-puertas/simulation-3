const initialState = {
    userId: 0,
    username: '',
    profilePic: ''
}

const GET_USER = 'GET_USER';

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case GET_USER:
            return Object.assign({}, state, { 
                userId: action.payload.id,
                username: action.payload.username,
                profilePic: action.payload.profilePic} );
        
        default:
            return state;    
    }
}

export function getUser(userId, username, profilePic) {
    return {
      type: GET_USER,
      payload: {
        userId,
        username,
        profilePic
      }
    };
  }