import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);  // ilk değeri boş array

  const addUserHandler = (uName , uAge) => {
    setUsersList((prevUsersList) => { // yeni state değerleri ile usersList i güncelle
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];  // yeni gelenleri obje olarak ekle
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>  
    </div>
  ); 
     // AddUser componentinden onAddUser propsuyla state değerlerini al
    // UsersList componentine users propsuyla usersList arrayini gönder
}

export default App;
