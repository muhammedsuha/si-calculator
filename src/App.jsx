import TextField from '@mui/material/TextField';
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
 const[priciple,setPriciple]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[interest,setInterest]=useState(0)
const[ispricipleInputValid,setIspricipleInputValid]=useState(false)

const[isYearInputValid,setIsYearInputValid]=useState(false)
const[isRateInputValid,setIsRateInputValid]=useState(false)

const handlevalidation=(tag)=>{
  const{name,value}=tag
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  ///matching true or false checking
if(!!value.match(/^\d*.?\d+$/)){
//valid
if(name=="priciple"){
  setPriciple(value)
  setIspricipleInputValid(false)}
  else if(name=="year"){
    setYear(value)
    setIsYearInputValid(false)
  }else{
    setRate(value)
    setIsRateInputValid(false)
  }
}else{
  if(name=="priciple"){
    setPriciple(value)
    setIspricipleInputValid(true)
  }else if(name=="year"){
    setYear(value)
    setIsYearInputValid(true)
  }else{
    setRate(value)
  setIsRateInputValid(true)
}
}}
const handlecalculate=(e)=>{
  e.preventDefault()
  setInterest((priciple*rate*year)/100)
}
const handlereset=()=>{
  setPriciple("")
  setRate("")
  setInterest("")
  setYear("")
  setIspricipleInputValid(false)
setIsYearInputValid(false)
setIsRateInputValid(false)
}
console.log(priciple);


  return (


    <>


   <div style={{minHeight:'100vh',width:'100%'}} className="d-flex justify-content-center align-items-center bg-primary">
    <div className="box bg-info p-5 rounded">
      <h2 >simple calculator</h2>
      <p className="text-center">calculate your simple interest with us</p>
      <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
        <h1 className='text-danger'>&#8377; {interest}</h1>
      </div>
      <div className="mt-5">
        <form className='border rounded p-3 d-flex flex-column p-3'>
<TextField id="priciple"name='priciple'value={priciple} label="priciple Amount" variant="outlined"onChange={e=>handlevalidation(e.target)}
 />
{ispricipleInputValid&& <div className="mt-3 text-danger fw-bolder">*Invalid input</div>}
<TextField id="year"name='year'value={year} label="year" variant="filled" onChange={e=>handlevalidation(e.target)} />
{isYearInputValid&&<div className="mt-3 text-danger fw-bolder">*Invalid input</div>}

<TextField id="rate"name='rate'value={rate} label="Rate of interest" variant="standard"onChange={e=>handlevalidation(e.target)}  />
{isRateInputValid&&<div className="mt-3 text-danger fw-bolder">*Invalid input</div>}

        </form>
      </div>
      <div className="mt-5 justify-content-between">
  
<Button variant="contained"type="submit"onClick={handlecalculate}>calculate</Button>
<Button variant="outlined"onClick={handlereset}>reset</Button>
      </div>
    </div></div>


    </>
  )
}

export default App
