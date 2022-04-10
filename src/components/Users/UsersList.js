import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersLists = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => ( // users dizisindeki her user objesi için li oluştur
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};  

export default UsersLists;