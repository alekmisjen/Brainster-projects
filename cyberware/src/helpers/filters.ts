// Helper: Group salaries into ranges
export const getSalaryRange = (salary: number): string => {
  if (salary < 1000) return "Below 1000";
  if (salary < 2000) return "1000-1999";
  if (salary < 3000) return "2000-2999";
  return "3000+";
};

// Helper: Extract month and year from date
export const getMonthYear = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
};
