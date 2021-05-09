import React from "react";
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
            My post
            <div className={classes.item}>New post</div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    )
}
export default MyPosts;