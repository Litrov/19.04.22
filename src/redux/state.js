export let state = {
    DialogsPage: {
        dialogs: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Pent'},
            {id: 3, name: 'Oliver'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hello'},
        ]
    },
    PostsPage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hi', likesCount: 11},
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message:postMessage,
        likesCount: 0
    };
    state.DialogsPage.push(newPost);
}

export let addPostX = (postMessage) => {
    let newPost = {
        id: state.PostsPage.posts.length+1,
        message:postMessage,
        likesCount: 0
    };
    state.PostsPage.posts.push(newPost);
}
export default state;