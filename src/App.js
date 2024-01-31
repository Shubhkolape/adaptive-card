import { useState } from 'react';
import './App.css';
import MyAdaptiveCard from './MyAdaptiveCard';
import Agent from './Json';

function App() {

  const [data, setdata] = useState(Agent)

  return (
    <>
    <h1>Adaptive Cards</h1>
    <MyAdaptiveCard data={data} setdata={setdata}/>
    </>
    
  );
}

export default App;
