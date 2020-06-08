import React from 'react';
import './App.css';
import Hello from './Hello';


function App({name,age}) {
    return <div>Hello from the App.js. My name {name}, aged {age}   
      <br/>
 <Hello firstname = {name}> </Hello>
 </div>
}

export default App;
