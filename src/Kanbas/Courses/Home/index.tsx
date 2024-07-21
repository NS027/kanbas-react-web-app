import Modules from "../Modules";
import CourseStatus from "./Status";
import './HomeStyle.css';

export default function Home() {
  return (
    <div id="wd-home" className="d-flex flex-wrap">
      <div className="flex-grow-1 p-2">
        <Modules />
      </div>
      <div className="course-status-container p-2">
        <CourseStatus />
      </div>
    </div>
  );
}

