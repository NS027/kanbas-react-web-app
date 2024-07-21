import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GradeStyle.css';
import users from '../../Database/users.json';
import enrollments from '../../Database/enrollments.json';
import grades from '../../Database/grades.json';
import assignments from '../../Database/assignments.json';

export default function Grades() {
  const { cid } = useParams();

  // Get the enrolled students for the current course
  const enrolledStudents = enrollments
    .filter(enrollment => enrollment.course === cid)
    .map(enrollment => users.find(user => user._id === enrollment.user))
    .filter(student => student !== undefined);

  // Get the assignments for the current course
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

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
                {enrolledStudents.map(student => (
                  <option key={student?._id}>{`${student?.firstName} ${student?.lastName}`}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col">
            <label htmlFor="search-assignments" className="form-label"><strong>Assignment Names</strong></label>
            <div className="input-group">
              <span className="input-group-text"><FaSearch /></span>
              <select id="search-assignments" className="form-select">
                <option>Search Assignments</option>
                {courseAssignments.map(assignment => (
                  <option key={assignment._id}>{assignment.shortname}</option>
                ))}
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
              {courseAssignments.map(assignment => (
                <th key={assignment._id} className="align-middle">
                  {assignment.shortname}<br />{assignment.title}<br />
                  <span style={{ fontSize: 'smaller', fontWeight: 'normal' }}>Out of 100</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student, index) => (
              <tr key={student?._id} className={index % 2 === 0 ? 'table-light' : ''}>
                <td className="text-danger align-middle">{`${student?.firstName} ${student?.lastName}`}</td>
                {courseAssignments.map(assignment => {
                  const grade = grades.find(g => g.student === student?._id && g.assignment === assignment._id);
                  return (
                    <td key={assignment._id} className="align-middle">
                      {grade ? grade.grade : 'N/A'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
