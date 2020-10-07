import React, { useEffect, useState } from 'react';
import user from './data/data.json';
import './App.css';
import Profile from './data/Components/Profile/Profile';
import FriendCount from './data/Components/FriendCount/FriendCount';

function App() {
  const [profile, setProfile] = useState([]);
  const [friend, setFriend] = useState([]);
  useEffect(() =>{
   setProfile(user);
  }, [])
  const addMeButton = (added) => {
    const newFriend = [...friend, added];
    setFriend(newFriend);
  }
  return (
    <div className="App">
      <ul>
        {profile.map(user =>
          <Profile profile={user} addMeButton={addMeButton}></Profile>
        )}
      </ul>
      <FriendCount friend={friend}></FriendCount>
    </div>
  );
}

export default App;
