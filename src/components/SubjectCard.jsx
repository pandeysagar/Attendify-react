import React, { useState } from "react";
import { RadioGroup } from "react";
import { ReversedRadioButton } from "react";
import "./SubjectCard.css";
function SubjectCard(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const [showComponent, setShowComponent] = useState(true);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDeleteClick = () => {
    setShowComponent(false);
  };

  if(showComponent){

  return (
    <div className="subjects">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">
            <p>{props.slot}</p>
          </p>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            Present
          </label> <br></br>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            Absent
          </label>
          <br></br>
          <a href="#" class="btn button" onClick={handleDeleteClick}>
            Mark attendance
          </a>
        </div>
      </div>

    </div>
  );
}
}

export default SubjectCard;
