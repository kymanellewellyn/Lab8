import './App.css'
import { useState, useEffect} from 'react'
function App(){
  const [dog, setDog] = useState('')
  const [cat, setCat] = useState('')

  useEffect (() => {
    console.log('working')
  }, [dog, cat]
  )

  return(
    <div>
      <h1>Dogs</h1>
      <button onClick={()=> setDog('Bulldog')}>Bulldog</button>  
      <button onClick={()=> setDog('Poodle')}>Poodle</button>  
      <button onClick={()=> setDog('Pitbull')}>Pitbull</button> 
      <button onClick={()=> setCat('Lion')}>Lion</button>
      <button onClick={()=> setCat('Tiger')}>Tiger</button>  
      <p>{dog}</p> 
      <p>{cat}</p>
    </div>
  );
};
export default App