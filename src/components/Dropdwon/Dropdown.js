import React from "react";
import "./Dropdown.css"
const Dropdown = (props) => {

const filterSelector =(event) =>{
  props.whenFilterChange(event.target.value);
}

  return (
    <div>
       <div className="box">
        <select onChange={filterSelector} value={props.selectedFilter}>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>
        </div>
   
    </div>
  );
};

export default Dropdown;
