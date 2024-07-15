import React from 'react';
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GradeStyle.css';

export default function Grades() {
  return (
    <div id="wd-grades" className="container mt-4">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <button className="btn btn-outline-secondary me-2 btn-icon">
          <FaFileImport />
          Import
        </button>
        <div className="btn-group me-2">
          <button className="btn btn-outline-secondary btn-icon">
            <FaFileExport />
            Export
          </button>
          <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Export as CSV</a></li>
            <li><a className="dropdown-item" href="#">Export as PDF</a></li>
          </ul>
        </div>
        <button className="btn btn-outline-secondary btn-icon">
          <FaCog />
        </button>
      </div>
      
      <div className="mb-3">
        <div className="row">
          <div className="col">
            <label htmlFor="search-students" className="form-label"><strong>Student Names</strong></label>
            <div className="input-group">
              <span className="input-group-text"><FaSearch /></span>
              <select id="search-students" className="form-select">
                <option>Search Students</option>
                {/* Student options */}
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="search-assignments" className="form-label"><strong>Assignment Names</strong></label>
            <div className="input-group">
              <span className="input-group-text"><FaSearch /></span>
              <select id="search-assignments" className="form-select">
                <option>Search Assignments</option>
                {/* Assignment options */}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 d-flex justify-content-start">
        <button className="btn btn-outline-secondary btn-apply-filters">
          <FaFilter /> Apply Filters
        </button>
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