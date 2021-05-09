import React from "react";
import classes from './MyPost.module.css';



export type MyPostType = {
    message: string
    likesCount: string
}
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