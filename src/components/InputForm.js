import React, { useState, useRef } from "react";
import "./InputForm.css";
import Modal from "./validationWindow/Modal";
const InputForm = (props) => {
  const inputRefName = useRef();
  const inputRefDate = useRef();
  const inputRefMonth = useRef();

  const [error, setError] = useState();
  const [list, setList] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = inputRefName.current.value;
    const bdayDate = inputRefDate.current.value;
    const bdayMonth = inputRefMonth.current.value;

    if (
      name.trim().length === 0 ||
      bdayDate.trim().length === 0 ||
      bdayMonth.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Fill In All The Details",
      });
    } else if (bdayMonth === bdayMonth.toLowerCase()) {
      setError({
        title: "Invalid Month",
        message: `Enter The Birthday Month With Capital letter to Start With e.g ${bdayMonth
          .charAt(0)
          .toUpperCase()}${bdayMonth.slice(1)} not ${bdayMonth}`,
      });
    } else {
      //this Stores The values to the Birthday Displayer
      const data = { name, bdayDate, bdayMonth }; //this just to print out the values on the form to confirm

      setList((output) => [...output, data]);
      console.log();

      // method below is not recomended
      inputRefName.current.value = "";
      inputRefDate.current.value = "";
      inputRefMonth.current.value = "";
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          whenPressOk={errorHandler}
        />
      )}

      <div className="login-box">
        <h2>Enter Birthday Details</h2>
        <form onSubmit={formSubmitHandler}>
          <div className="user-box">
            <input type="text" name="" required="" ref={inputRefName} />
            <label>Full Name</label>
          </div>

          <div className="user-box">
            <input type="text" name="" required="" ref={inputRefMonth} />
            <label>Birth Month</label>
          </div>

          <div className="user-box">
            <input type="text" name="" required="" ref={inputRefDate} />
            <label>Birth Date</label>
          </div>

          <button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <div className="text2">
            
            {list.map((a, keys) => (
              <div className="list" key={keys}>
                
                Your Birth Date Has Been Added 👍
              
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
