import React, {useState} from 'react';
import './User.css';
import UserTaggedImageTable from "./UserTaggedImageTable";
const User = () => {

    return (
        <>
            <div className='user-container'>
                <UserTaggedImageTable/>
            </div>
        </>
    )
}
export default User;
