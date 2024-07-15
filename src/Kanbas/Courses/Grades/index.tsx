import React from 'react';
import { BsGripVertical } from 'react-icons/bs';
import { FaPlus, FaEllipsisV } from 'react-icons/fa';
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
            <input id="search-students" type="text" className="form-control" placeholder="Search Students" />
          </div>
          <div className="col">
            <label htmlFor="search-assignments" className="form-label">Assignment Names</label>
            <input id="search-assignments" type="text" className="form-control" placeholder="Search Assignments" />
          </div>
          <div className="col-auto d-flex align-items-end">
            <button className="btn btn-outline-secondary"><FaPlus /> Apply Filters</button>
          </div>
        </div>
      </div>
      
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>A1 SETUP<br />Out of 100</th>
            <th>A2 HTML<br />Out of 100</th>
            <th>A3 CSS<br />Out of 100</th>
            <th>A4 BOOTSTRAP<br />Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.42%</td>
          </tr>
          <tr>
            <td>Christina Allen</td>
            <td>100%</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Simreen Ansari</td>
            <td></td>
            <td>100%</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Han Bao</td>
            <td>100%</td>
            <td>100%</td>
            <td>
              <input type="number" defaultValue="88.00" className="form-control" />
            </td>
            <td>98.99%</td>
          </tr>
          <tr>
            <td>Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.78%</td>
            <td></td>
          </tr>
          <tr>
            <td>Siran Cao</td>
            <td>100%</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}