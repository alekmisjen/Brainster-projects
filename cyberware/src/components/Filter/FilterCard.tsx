import React, { useState } from "react";
import { Job } from "../../types/types";
import { Button } from "../Button/Button";

export const FilterCard: React.FC<Job> = ({
  date,
  title,
  desc,
  employmentType = [],
  salary,
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelectType = (type: string) => {
    setSelectedType((prevSelectedType) =>
      prevSelectedType === type ? null : type
    );
  };

  const titleParts = title.split(" ");
  const firstWord = titleParts[0];
  const remainingTitle = titleParts.slice(1).join(" ");
  return (
    <div className="card mb-3 mx-auto">
      <div className="card-header text-white">
        <button className="">{date}</button>
      </div>
      <div className="card-body">
        <h2 className="text-white">
          <span className="color-primary">{firstWord}</span> {remainingTitle}
        </h2>
        <p className="card-text">{desc}</p>
        <p className="text-white">
          <strong>Salary:</strong> ${salary}
        </p>
        <div
          className="d-flex justify-content-evenly"
          role="group"
          aria-label="Employment Types"
        >
          {employmentType.map((type) => (
            <button
              key={type}
              className={`button ${
                selectedType === type ? "button" : "button-transparent"
              }`}
              onClick={() => handleSelectType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Button
            label="Apply"
            style={{
              width: "75%",
            }}
          />
        </div>
      </div>
    </div>
  );
};
