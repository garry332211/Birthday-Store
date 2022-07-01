import React,{useState} from 'react'
import "./InputForm.css"
const InputForm = () => {

const [name, setName] = useState("");
const [month, setMonth] = useState("");
const [date, setDate] = useState("");

const fulLNameHandler = (event) =>{
        setName(event.target.value)
        console.log(event.target.value)
}
const birthMonthHandler = (event) =>{
        setMonth(event.target.value)
        console.log(event.target.value)
}
const dateHandler = (event) =>{
        setDate(event.target.value)
        console.log(event.target.value)
}
const formSubmitHandler = (event) =>{
    event.preventDefault();
    if(name.trim().length === 0 && month.trim().length === 0 && date.trim().length === 0){
        console.log("Enter somethign")
    }
    else{
        console.log(name, month, date)
    }
}

  return (
 
<div className="login-box">
  <h2>Enter Birthday Details</h2>
  <form onSubmit={formSubmitHandler}>
    <div className="user-box">
      <input type="text" name="" required="" onChange={fulLNameHandler}/>
      <label>Full Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" onChange={birthMonthHandler}/>
      <label>Birth Month</label>
    </div>
    <div className="user-box">
      <input type="date" name="" required="" onChange={dateHandler}/>
      <label>Birth Date</label>
    </div>
    <button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>
   
  )
}

export default InputForm