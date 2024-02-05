import Data from "@/Shared/Data";
import React, { useState } from "react";

function SelectRating() {
  const [selectedRating, setSelectedRating] = useState([]);

  const onSelectRating = (isChecked, value) => {
    if (isChecked) {
      setSelectedRating([...selectedRating, value]);
    } else {
      selectedRating(selectedRating.filter((n) => n !== value));
    }
  };

  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select Rating</h2>

      <div>
        {Data.ratingList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between"
          >
            <label>{item.icon}</label>
            <input
              type="checkbox"
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectRating;
