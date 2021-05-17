import React, {useState} from 'react';
import './User.css';
import UserTaggedImageTable from "./UserTaggedImageTable";

const imageUrl = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*";

const userData = {
    userName: "Estella",
    userImage: imageUrl,
    userTaggedImages: (() => {
        var i;
        var arr = [];
        for (i = 0; i < 30; i++) {
            arr.push(
                {
                    src: imageUrl,
                    name: "Image "+i,
                    regions: []
                }
            )
        }
        return arr;
    })()
}


const User = () => {
    return (
        <>
            <>
                {userData.userName}
                <img src={userData.userImage}/>
            </>
            <div className='user-container'>
                <UserTaggedImageTable userTaggedImages={userData.userTaggedImages}/>
            </div>
        </>
    )
}
export default User;
