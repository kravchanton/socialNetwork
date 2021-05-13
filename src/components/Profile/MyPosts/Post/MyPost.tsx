import React from "react";
import classes from './MyPost.module.css';
import {MyPostType} from "../../../../App";




const MyPost = (props: MyPostType) => {
    return (
        <div>

            <div className={classes.content}>
                {props.message}
            </div>
            <span>Likes</span> {props.likesCount}


        </div>
    )
}
export default MyPost;