export const addUpvote = (thumbsUpId) => {
  return {
    type: "ADD_UPVOTE",
    payload: thumbsUpId,
  };
};

export const addDownvote = (thumbsDownId) => {
  return {
    type: "ADD_DOWNVOTE",
    payload: thumbsDownId,
  };
};

export const favoriteMem = (favoriteMemId) => {
  return {
    type: "ADD_REMOVE_FAVORITE",
    payload: favoriteMemId,
  };
};

export const addMem = (addMemId) => {
  return {
    type: "ADD_MEM",
    payload: addMemId,
  };
};
