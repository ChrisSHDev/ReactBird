import { GET_BGIMG } from '../constants';

const initialState = {
    bgsource : null
};

export default ( state = initialState, action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {  
        case GET_BGIMG :
            console.log('reducer-wokring');
            return {
                ...state,
                bgsource: action.payload
            }
        default:
            return state
    }
}
