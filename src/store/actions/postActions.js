export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make call n DB
    const firestore = getFirestore();
    firestore.collection("posts").add({
      ...post,
      authorFirstName: "Fares",
      authorLastName: "Saleh",
      authorId: "123",
      created_at: new Date(),
    });
    dispatch({ type: "CREATE_POST", post: post });
  };
};
