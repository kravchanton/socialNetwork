import React from "react";
import classes from './MyPosts.module.css';
import MyPost from "./Post/MyPost";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            My post
            <div className={classes.item}>New post</div>
            <div>
                <div>
                    <textarea>  </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <MyPost message='Hi, how are you?' likesCount='4'/>
                <MyPost message='Its my first post' likesCount='2'/>


            </div>
        </div>
    )
}
export default MyPosts;