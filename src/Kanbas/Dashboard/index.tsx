export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5001/Home">
                CS5001 Intensive Foundation of CS
              </a>
              <p className="wd-dashboard-course-title">
                Foundation of Computer Science
              </p>
              <a href="#/Kanbas/Courses/5001/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5002/Home">
                CS5002 Discrete Structure SEC
              </a>
              <p className="wd-dashboard-course-title">
                Discrete Structure
              </p>
              <a href="#/Kanbas/Courses/5002/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5004/Home">
                CS5004 Objective-Oriented Design
              </a>
              <p className="wd-dashboard-course-title">
                OOD with Java
              </p>
              <a href="#/Kanbas/Courses/5004/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5008/Home">
                CS5008 Data Str, Algo & App in CmpSys
              </a>
              <p className="wd-dashboard-course-title">
                Data Structure and Algorithm in computer system
              </p>
              <a href="#/Kanbas/Courses/5008/Home"> Go </a>
            </div>
          </div>

          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5800/Home">
                CS5800 Algorithm
              </a>
              <p className="wd-dashboard-course-title">
                Master Level of Algorithm
              </p>
              <a href="#/Kanbas/Courses/5800/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
  );}
  