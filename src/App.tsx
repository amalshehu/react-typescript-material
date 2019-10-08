import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginForm } from './LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <LoginForm
          onSubmit={({ firstName, lastName, email }) => {
            console.log(firstName, lastName, email);
          }}
        ></LoginForm>
      </header>
    </div>
  );
};

export default App;
