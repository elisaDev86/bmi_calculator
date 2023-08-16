import { useState } from 'react';

import './index.css';

function App() {

const [weight, setWeight] = useState (0);
const [height, setHeight] = useState (0);
const [bmi, setBmi] = useState ('');
const [message, setMessage] = useState ('');


let calcBmi = (event) => {
  event.preventDefault()

  if (weight === 0 || height === 0){
    alert('Enter a valid weight and height')
  } else{
    let bmi =(weight/ (height * height) * 703)
    setBmi(bmi.toFixed(1))

    //LOGIC FOR MESSAGE
    if (bmi < 25){
      setMessage('You are a healthy weight')
    } else if (bmi >= 25 && bmi < 30){
      setMessage('You are a healthy weight')
    } else{
      setMessage('You are overweight')
    }
  }
}

//SHOW IMAGE BASED CALCULATION
let imgSrc = '';

if (bmi < 1){
  imgSrc = null
} else if (bmi < 25){
  imgSrc = require('../src/asset/healtly.jpg')
} else if (bmi >= 25 && bmi <30){
  imgSrc = require('../src/asset/normalweight.jpeg')
} else{
  imgSrc = require('../src/asset/overweight.jpeg')
}
  
  
  


//LOGIC FOR RELOAD
let reload = () => {
  window.location.reload()
}

  return (
    <div className="app">
      {/*START CONTAINER*/}
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        {/*START FORM*/}
        <form onSubmit={calcBmi}>
          {/*WEIGHT CONTAINER START*/}
         <div>
            <label>Weight (lsb)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}></input>
         </div>
         {/*WEIGHT CONTAINER END*/}

         {/*HEIGHT CONTAINER START*/}
         <div>
            <label>Height (in)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}></input>
         </div>
         {/*HEIGHT CONTAINER END*/}

         {/*BUTTON CONTAINER START*/}
         <div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
         </div>
          {/*BUTTON CONTAINER END*/}

          {/*questo div contiene la variabile che stamperà il risultato aggiornato*/}
          <div className="center">
            <h3>Your BMI is:  </h3>
            <p>{message}</p>
          </div>

          {/*questo div contiene la variabile che stamperà l'immagine aggiornata*/}
          <div className="img-container">
            <img src={imgSrc} alt=''/>
          </div>

        </form>
        {/*END FORM*/}
      </div>
      {/*END CONTAINER*/}
      
    </div>
  );
}

export default App;
