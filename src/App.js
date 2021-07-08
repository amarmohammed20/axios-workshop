import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

function App() {

  const [userData, setUserData] = useState( [] );
  const [selectedUser, setSelectedUser] = useState([]);

  const usersApiUrl = 'https://jsonplaceholder.typicode.com/users/'

  useEffect(() => {
    axios.get(usersApiUrl)
    .then(result => setUserData(result.data))
    .catch(error => console.log(error))
    //Do a catch here
  },[])

  // setSelectedUser(userData.map(name => {
  //   console.log(name)
  // }))

  return (
    <div className="App">
      <h1>Axios Workshop</h1>
      <h2>Select the user data you want from the api call</h2>
      
      <h3>
        {
          userData.map(user => {
            return (
            <div 
              className='userSection'
              key={user.id}
              >
            <p>Name - {user.name}</p>
            <p>Phone Number - {user.phone}</p>
            <p>Username - {user.username}</p>
            <p>Company Name - {user.company.name}</p>
            <p>Website - {user.website}</p>
            <p>Address - 
              {user.address.suite},  
              {user.address.street},  
              {user.address.city}, 
              {user.address.zipcode}
            </p>
            </div>
            )
          })
        }
      </h3>
    </div>
  );
}

export default App;
