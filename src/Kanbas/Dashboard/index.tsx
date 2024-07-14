export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/reactjs.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home">
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer
                </p>
                <a href="#/Kanbas/Courses/1234/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/reactjs.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="card-text">
                        Full Stack software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/5001.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5001/Home">
                  CS5001 Intensive Foundation of CS
                </a>
                <p className="wd-dashboard-course-title">
                  Foundation of Computer Science
                </p>
                <a href="#/Kanbas/Courses/5001/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/5001.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS5001 Intensive Foundation of CS
                    </h5>
                    <p className="card-text">
                        Foundation of Computer Science
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/5002.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5002/Home">
                  CS5002 Discrete Structure SEC
                </a>
                <p className="wd-dashboard-course-title">
                  Discrete Structure
                </p>
                <a href="#/Kanbas/Courses/5002/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/5002.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS5002 Discrete Structure SEC
                    </h5>
                    <p className="card-text">
                        Discrete Structure
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
              
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/5004.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5004/Home">
                  CS5004 Objective-Oriented Design
                </a>
                <p className="wd-dashboard-course-title">
                  OOD with Java
                </p>
                <a href="#/Kanbas/Courses/5004/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/5004.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS5004 Objective-Oriented Design
                    </h5>
                    <p className="card-text">
                        OOD with Java
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/5008.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5008/Home">
                  CS5008 Data Str, Algo & App in CmpSys
                </a>
                <p className="wd-dashboard-course-title">
                  Data Structure and Algorithm in computer system
                </p>
                <a href="#/Kanbas/Courses/5008/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/5008.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS5008 Data Str, Algo & App in CmpSys
                    </h5>
                    <p className="card-text">
                        Data Structure and Algorithm in computer system
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/5800.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5800/Home">
                  CS5800 Algorithm
                </a>
                <p className="wd-dashboard-course-title">
                  Master Level of Algorithm
                </p>
                <a href="#/Kanbas/Courses/5800/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/5800.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS5800 Algorithm
                    </h5>
                    <p className="card-text">
                        Master Level of Algorithm
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/5200.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5008/Home">
                  CS5200 Data Management
                </a>
                <p className="wd-dashboard-course-title">
                  Data Management with MySQL
                </p>
                <a href="#/Kanbas/Courses/5008/Home"> Go </a>
              </div> */}
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/5200.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS5200 Data Management
                    </h5>
                    <p className="card-text">
                        Data Management with MySQL
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              {/* <img src="/images/7980.jpg" width={200} />
              <div>
                <a className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5008/Home">
                  CS7980 Capstone
                </a>
                <p className="wd-dashboard-course-title">
                  Capstone for Industry Project
                </p>
                <a href="#/Kanbas/Courses/5008/Home"> Go </a>
              </div> */}
                <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/7980.jpg" width="100%"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                        CS7980 Capstone
                    </h5>
                    <p className="card-text">
                        Capstone for Industry Project
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );}
  