import { useState } from 'react';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';
function App() {
  const [userInput,setUserInput]=useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    
    }
    const yearlyData = []; 
    // do something with yearlyData ...
    if(userInput){
      
      let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput['expected-return'] / 100;
      const duration = +userInput['duration'];
  
       for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
           year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
    }
    
  };

  return (
    <div>
      <Header/>

      <UserInput onCalculate={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
       {!userInput && <p style={{textAlign:'center'}}>No investment calculated yet.</p>}
    {userInput && <ResultsTable  data={yearlyData} initailInvestment={userInput['current-savings']}/>}
     
    </div>
  );
}

export default App;
