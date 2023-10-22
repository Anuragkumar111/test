import React from 'react';

const LoginForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  handleLogin,
}) => {
  return (
    <div className='loginPage'>
      <p id='heading'>Welcome to KhataNex</p>
      <form className='loginForm' onSubmit={handleLogin}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='number'
          id='number'
          placeholder='Phone Number'
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type='submit' aria-label='login'>
          Log in
        </button>
      </form>
      <p id='register'>
        New Member ? <i>Register Now</i>
      </p>
    </div>
  );
};

export default LoginForm;
