import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editors";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
export default function Courses() {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      {/* <table width="100%">
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
            <Route path="/"
                     element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
            <Route path="Home" element={<h3>Home</h3>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments"element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            </Routes>
          </td>
        </tr>
      </table> */}
      <CoursesNavigation />
      <div>
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
);}

  