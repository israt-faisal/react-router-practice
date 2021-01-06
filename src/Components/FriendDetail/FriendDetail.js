import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() => {
        
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));

    }, [])
    return (
        <div>
            <p>this is friend detail component: {friendId}</p>
            <h3>{friend.name}</h3>
            <h4>Phone: {friend.phone}</h4>
            <h4>Email: {friend.email}</h4>
            <p>Website: {friend.website}</p>

        </div>
    );
};

export default FriendDetail;