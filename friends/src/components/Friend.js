import React from 'react';

const Friend = props => {
    return <div className='friend' key={props.key}>
        <h4>NAME: {props.friend.name}</h4>
        <p>AGE: {props.friend.age}</p>
        <p>EMAIL: {props.friend.email}</p>
    </div>
}

export default Friend;