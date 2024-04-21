import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState(''); 
  const handleInputChange = (e) => { 
    setData(e.target.value); 
  }

  return (
    <div className="App">
      <input type='text' onChange={handleInputChange} placeholder='enter text'></input>
      <button onClick={
        async () => { 
          try { 
            const response = await axios.post("http://localhost:8080/", {str:data}); 
            console.log(response); 
          } catch(err) { 
            console.log(err); 
          }
        }
      }>send data</button>     
    </div>
  );
}

export default App;
