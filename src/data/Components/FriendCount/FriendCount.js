import React from 'react';
import './FriendCount.css'

const FriendCount = (props) => {
    const friend= props.friend;
    const totalSalary = friend.reduce((sum, friend) => sum + parseFloat(friend.yearly_selary), 0);
    return (
        <div className="friend-count">
            <h4>Added Friend:{friend.length}</h4>
            <p>Friend's Total Salary:${totalSalary}</p>
        </div>
    );
};

export default FriendCount;