import {
    SET_CURRENT_USER
} from '../constants';

const initialState = {
    isAuthenticated: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        
        case SET_CURRENT_USER:
                if(action.payload == 'undefined'){
                    console.log('working');
                    action.payload = false;
                } 
            return{
                ...state,
				isAuthenticated: action.payload,
                user: action.payload
            }
        default:
            return state;
    }
}
