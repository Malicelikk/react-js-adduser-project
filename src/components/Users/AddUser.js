import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

// function AddUser(props) {};

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState(''); // inputlara girilen değerleri statede tut
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(); // initial değer tanımlamadık yani undefined


    const addUserHandler = (event) => { // formda submit butonu tıklanınca
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name or age..'
            });
            return;
        }
        if (+enteredAge < 1){ // enteredAge i number a çevirip kontrol yap
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age..'
            });
            return;
        }

        console.log(enteredUsername, enteredAge);

        props.onAddUser(enteredUsername,enteredAge);  // yeni state değerlerini onAddUser propsuyla gönder

        setEnteredUsername(''); // input valuelerini sıfırla
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {  // username input value değiştiğinde
        setEnteredUsername(event.target.value);  // state in değerini input value süne eşitle
    };

    const ageChangeHandler = (event) => {   // age input value değiştiğinde
        setEnteredAge(event.target.value); // state in değerini input value süne eşitle
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );
};

export default AddUser;