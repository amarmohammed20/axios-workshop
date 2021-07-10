import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  const usersApiUrl = 'https://jsonplaceholder.typicode.com/users/';

  useEffect(() => {
    axios.get(usersApiUrl)
    .then(result => setUserData(result.data))
    .catch(error => console.log(error))
  },[])

  useEffect(() => {
    if(selectedValue) {
      const selection = userData.filter(user => user.name === selectedValue)
      setSelectedUser(selection);
    } else {
      setSelectedUser(userData)
    }
  }, [selectedValue, userData])

  const onChangeHandler = (e) => {
    setSelectedValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Axios Workshop</h1>
      <h2>Using React we will render the api data filtered on what you select</h2>
      <label>Choose the user you would like to view detials on:
        <select class="user-selection" name="ice-cream" onChange={onChangeHandler}>
          <option value="">Select One …</option>
          {
            userData.map(user => {
              return <option key={user.id} value={user.name}>{user.name}</option>
            })
          }
        </select>
      </label>
      <section>
        {
          selectedUser.map(user => {
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
      </section>
    </div>
  );
}

export default App;
