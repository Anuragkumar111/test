import './App.css';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='app'>
        <Header />
        <LoginForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleLogin={handleLogin}
        />
      </div>
    </>
  );
}

export default App;
