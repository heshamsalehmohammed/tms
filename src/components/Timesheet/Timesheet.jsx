import React from 'react';

const Timesheet = () => {
  const timesheetEntries = [
    { date: '2024-05-01', hours: 8 },
    { date: '2024-05-02', hours: 7 },
    { date: '2024-05-03', hours: 6 },
    { date: '2024-05-04', hours: 8 },
    { date: '2024-05-05', hours: 7 },
  ];

  return (
    <div>
      <h2>Timesheet Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {timesheetEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timesheet;