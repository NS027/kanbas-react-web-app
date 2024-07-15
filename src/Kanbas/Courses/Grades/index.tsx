import React from 'react';
import { FaPlus, FaEllipsisV, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grades() {
  return (
    <div id="wd-grades" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Grades</h2>
        <div>
          <button className="btn btn-outline-primary me-2"><FaPlus /> Import</button>
          <button className="btn btn-outline-secondary"><FaEllipsisV /> Export</button>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <label htmlFor="search-students" className="form-label">Student Names</label>
            <select id="search-students" className="form-select">
              <option>Search Students</option>
              {/* Add student options here */}
            </select>
          </div>
          <div className="col">
            <label htmlFor="search-assignments" className="form-label">Assignment Names</label>
            <select id="search-assignments" className="form-select">
              <option>Search Assignments</option>
              {/* Add assignment options here */}
            </select>
          </div>
          <div className="col-auto d-flex align-items-end">
            <button className="btn btn-outline-secondary"><FaFilter /> Apply Filters</button>
          </div>
        </div>
      </div>
      
      <div id="wd-css-styling-tables">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-light">
            <tr>
              <th className="align-middle"><strong>Student Name</strong></th>
              {['A1 SETUP', 'A2 HTML', 'A3 CSS', 'A4 BOOTSTRAP'].map((assignment, idx) => (
                <th key={idx} className="align-middle">
                  {assignment}<br />
                  <span style={{ fontSize: 'smaller', fontWeight: 'normal' }}>Out of 100</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Jane Adams', grades: ['100%', '96.67%', '92.18%', '66.42%'] },
              { name: 'Christina Allen', grades: ['100%', '100%', '100%', '100%'] },
              { name: 'Simreen Ansari', grades: ['100%', '100%', '100%', '100%'] },
              { name: 'Han Bao', grades: ['100%', '100%', '88.00%', '98.99%'] },
              { name: 'Mahi Sai Srinivas Bobbili', grades: ['100%', '96.67%', '98.78%', '100%'] },
              { name: 'Siran Cao', grades: ['100%', '100%', '100%', '100%'] },
            ].map((student, index) => (
              <tr key={student.name} className={index % 2 === 0 ? 'table-light' : ''}>
                <td className="text-danger align-middle">{student.name}</td>
                {student.grades.map((grade, idx) => (
                  <td key={idx} className="align-middle">
                    <input type="text" defaultValue={grade} className="form-control text-center" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}