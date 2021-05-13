import React from "react";
import classes from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";
import {PostsDataType} from "../../App";

export const Profile = (props: PostsDataType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>)
}
export default Profile;