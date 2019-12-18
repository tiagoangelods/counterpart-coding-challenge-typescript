export const DO_VOTE = 'DO_VOTE';

interface Votes {
    votes: Array<string>
}

export function doVote(votes: Votes) {
  return {
    type: typeof DO_VOTE,
    payload: votes
  };
}