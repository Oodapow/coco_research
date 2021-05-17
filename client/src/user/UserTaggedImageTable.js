import React from 'react';
import './UserTaggedImageTable.css';
import UserTaggedImageEntry from "./UserTaggedImageEntry";

const UserTaggedImageTable = (props) => {
    const userTaggedImages = props.userTaggedImages;
    return (
        <>
            <UserTaggedImageEntry/>
        </>
    )
}
export default UserTaggedImageTable;
