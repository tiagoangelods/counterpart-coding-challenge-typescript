import { CREATE_USER, UPDATE_USER_VOTE } from "../actions/users";

export default function(state: Array<any> = [], action: {type: any, payload: any}) {
    switch (action.type){
        case CREATE_USER: {
            const {user} = action.payload;
            return [...state, user];
        }
        case UPDATE_USER_VOTE: {
            const {id, votes} = action.payload;
            const user = state.find(user => user.id === id);
            if (user.id === id) return [...state.filter(u => u.id !== id), {...user, votes}];
            return state;
        }
        default: 
            return state;
    }
}