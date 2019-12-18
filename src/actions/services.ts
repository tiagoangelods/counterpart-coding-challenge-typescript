export const DO_VOTE = 'DO_VOTE';

export interface Votes {
    votes: Array<string>
}

export function doVote(votes: Votes) {
  return {
    type: DO_VOTE,
    votes
  };
}