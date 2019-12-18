import { CREATE_USER, UPDATE_USER_VOTE, User } from "../actions/users";

export default function(state: Array<any> = [], action: {type: any, user: User, id: string, votes: Array<string>}) {
    switch (action.type){
        case CREATE_USER: {
            const {user} = action;
            return [...state, user];
        }
        case UPDATE_USER_VOTE: {
            const {id, votes} = action;
            const user = state.find((user: User) => user.id === id);
            if (user.id === id) return [...state.filter((u: User) => u.id !== id), {...user, votes}];
            return state;
        }
        default: 
            return state;
    }
}