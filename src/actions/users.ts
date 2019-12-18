export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER_VOTE = 'UPDATE_USER_VOTE';

export interface User {
  id: string;
  firstName: string;
  middleInitial?: string;
  lastName: string;
  email: string;
}

export interface UserVote {
  id: string;
  votes: Array<any>;
}

export function createUser(user: User) {
  return {
    type: typeof CREATE_USER,
    payload: user
  };
}

export function updateUserVote(userVote: UserVote) {
  return {
    type: typeof UPDATE_USER_VOTE,
    payload: userVote
  };
}
