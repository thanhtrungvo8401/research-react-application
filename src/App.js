import React, { useEffect } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';

function App() {  
  useEffect(() => {
    console.count('RENDER IN APP')
  })

  return (
    <div className="App">
      <ProfilePage />
    </div>
  );
}

export default App;