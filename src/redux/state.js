let rerenderEntireTree = (state) => {
  console.log(state);
}


const state = {
  profilePage: {
    posts: [
      { id: 1, message: "hello" },
      { id: 2, message: "hello" },
      { id: 3, message: "hello" },
      { id: 4, message: "hello" },
      { id: 5, message: "hello" },
    ],
    postText: ''
  },
  dialogsPage: {
    dialogsUsers: [
      { id: 1, name: "Dima" },
      { id: 2, name: "Mariya" },
      { id: 3, name: "Lena" },
      { id: 4, name: "Vlad" },
      { id: 5, name: "Vasya" },
    ],
    dialogsMessage: [
      { id: 1, message: "hello" },
      { id: 2, message: "hi" },
      { id: 3, message: "bye" },
      { id: 4, message: "ciao" },
      { id: 5, message: "good" },
    ]
  }
}

export let addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1, 
    message: state.profilePage.postText
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.postText = '';
  rerenderEntireTree(state)
}

export let setPostText = (postText) => {
  state.profilePage.postText = postText;
  rerenderEntireTree(state)
}

export let subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;