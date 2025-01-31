import { useState } from "react"
import Header from "./components/header"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment"
import { formatter } from "./util/investment"


function App() {
  const [inputs , setInputs] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
})

const handleChange = (event)=>
  {
      const {name , value} = event.target
     // console.log(`Name: ${name}, Value: ${value}`);  
      setInputs((prevInputs)=>({
          ...prevInputs,
          [name] : value ? parseFloat(value) : "",
      }))
  }

    let results = ""
    if(inputs.initialInvestment && inputs.annualInvestment && inputs.expectedReturn && inputs.duration){
      results = calculateInvestmentResults(inputs)
    }
    console.log(results);

  
  
  
  return (
    <>
      <Header />
      <UserInput inputs={inputs} handleEv={handleChange} />
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
            {results && results.map((wholeData , dataIndex)=>(
                <tr key={dataIndex}>
                  <td>{wholeData.year}</td> 
                  <td>{formatter.format(wholeData.valueEndOfYear)}</td>
                  <td>{formatter.format(wholeData.interest)}</td>
                  <td>{formatter.format(wholeData.totalInterest)}</td>
                  <td>{formatter.format(wholeData.totalInvested)}</td>



                </tr>
            ))}
        </tbody>
      </table>
 
    </>
  )
}

export default App
