const initState = {
  posts: [
    {
      id: "1",
      title: "help me find peach",
      content:
        "https://firebasestorage.googleapis.com/v0/b/shd-red.appspot.com/o/55555555.mp4?alt=media&token=856188bf-954c-430d-932c-ad74579517c9",
    },
    {
      id: "2",
      title: "collect all the stars",
      content:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("CRESTE PRO", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("CRESTE PRO ERR", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
