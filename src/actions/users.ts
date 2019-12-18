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
  id?: string;
  votes: Array<string>;
}

export function createUser(user: User) {
  return {
    type: CREATE_USER,
    user
  };
}

export function updateUserVote({id, votes}: UserVote) {
  return {
    type: UPDATE_USER_VOTE,
    id,
    votes
  };
}
