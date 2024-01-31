import { useState } from 'react';
import AdaptiveCard from './AdaptiveCard';
import './App.css';
import Agent from './Json';

function App() {

  const [data, setdata] = useState(Agent)
  console.log(data);

  return (
    <>
    <h1>Adaptive Cards</h1>
    <AdaptiveCard card={data} cardData={setdata}/>
    </>
    
  );
}

export default App;
