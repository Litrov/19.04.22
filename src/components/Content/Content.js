import classes from './Content.module.css';
import React from "react";
import MyPosts from "./My posts/MyPosts";
import state, {addPost, addPostX} from "../../redux/state";
import {rerenderEntireTree} from "../../render";

function Content() {
    let newPostElement = React.createRef();
    let add = () => {
        let text = newPostElement.current.value;
        addPostX(text);
        rerenderEntireTree();
        newPostElement.current.value = ''
    }

    return (
        <div className={classes.content}>
            <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'/>
            <h2>My Post</h2>
            <MyPosts/>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={add}>Add post</button>
            </div>
            {state.PostsPage.posts.map( m=> <MyPosts message={m.message}/>)}


        </div>
    );
}


export default Content;
