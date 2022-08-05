import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import InputField from './components/inputField';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import CreateEmployee from './pages/createEmployee';

function App() {
  const [userName, setUserName] = useState('type usernam');
  const [displayName, setDisplayName] = useState('');


  useEffect( () => {
    setUserName(''); 
  }, [displayName]);
useEffect( () => {
  setUserName('Neelima')

}, []);


  
  const onUserNameChange = (value) => {
    setUserName(value)
  };

  const onButtonClick = () => {
    setDisplayName(userName)
  };
  
  return (
    <div className="App">
      <Button label="Click Me" handleClick={() => onButtonClick()}/>
      <InputField label='User name' val={ userName } onChange ={onUserNameChange}/>
      {/* {userName} */}
      {/* <TextField label={userName}/>  */}
      <TextField label={displayName}/>
      <CreateEmployee/>
      {/* {displayName} */}
    </div>
  );
}

export default App;
