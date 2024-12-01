import React, { useState } from "react";

import { Job } from "../../types/types";

import data from "../../db.json";
import { FilterCard } from "./FilterCard";
import { getMonthYear, getSalaryRange } from "../../helpers/filters";

export const Filter: React.FC = () => {
  const jobs: Job[] = data.job;

  const [filteredTitle, setFilteredTitle] = useState<string>("");
  const [filteredSalary, setFilteredSalary] = useState<string>("");
  const [filteredDate, setFilteredDate] = useState<string>("");

  // Filtered Job List
  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = filteredTitle
      ? job.title.toLowerCase().includes(filteredTitle.toLowerCase())
      : true;
    const matchesSalary = filteredSalary
      ? getSalaryRange(parseInt(job.salary)) === filteredSalary
      : true;
    const matchesDate = filteredDate
      ? getMonthYear(job.date) === filteredDate
      : true;

    return matchesTitle && matchesSalary && matchesDate;
  });

  // Extract unique options for dropdowns
  const uniqueTitles = Array.from(new Set(jobs.map((job) => job.title)));
  const uniqueSalaries = Array.from(
    new Set(jobs.map((job) => getSalaryRange(parseInt(job.salary))))
  );
  const uniqueDates = Array.from(
    new Set(jobs.map((job) => getMonthYear(job.date)))
  );

  return (
    <div className="container mt-5">
      {/* Filters */}
      <div className="row mb-4 w-75 mx-auto">
        <div className="col-md-4">
          <label htmlFor="jobTitle" className="form-label"></label>
          <select
            id="jobTitle"
            className="form-select"
            value={filteredTitle}
            onChange={(e) => {
              console.log(e.target.value);
              setFilteredTitle(e.target.value);
            }}
          >
            <option value="">Job Titles</option>
            {uniqueTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="salary" className="form-label"></label>
          <select
            id="salary"
            className="form-select"
            value={filteredSalary}
            onChange={(e) => setFilteredSalary(e.target.value)}
          >
            <option value="">Salary Range</option>
            {uniqueSalaries.map((salary, index) => (
              <option key={index} value={salary}>
                {salary}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="date" className="form-label"></label>
          <select
            id="date"
            className="form-select"
            value={filteredDate}
            onChange={(e) => setFilteredDate(e.target.value)}
          >
            <option value="">Posted Dates</option>
            {uniqueDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="row mt-5 mx-auto">
        {filteredJobs.map((job, index) => (
          <div key={index} className="col-md-6">
            <FilterCard
              date={job.date}
              title={job.title}
              desc={job.desc}
              employmentType={job.employmentType}
              salary={job.salary}
            />
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <div className="col-12">
            <p className="text-center color-primary">
              No jobs match your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
