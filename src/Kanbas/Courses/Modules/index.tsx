export default function Modules() {
    return (
      <div>
        <table width="100%">
          <tr>
            <td>
              <button id="wd-collapse-all">Collapse All</button>
              <button id="wd-view-progress">View Progress</button>
              <select id="wd-select-publish-all">
              <option selected value="PublishAll">Publish All</option>
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
              <option value="Option3">Option3</option>
              <option value="Option4">Option4</option>
              </select>
              <button id="wd-module-add">+Module</button>
            </td>
          </tr>
        </table>
            <ul id="wd-modules">
              <li id="wd-module">
                  <div id="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                  <ul id="wd-lessons">
                      <li id="wd-lesson">
                          <span id="wd-title">LEARNING OBJECTIVES</span>
                          <ul id="wd-content">
                              <li id="wd-content-item">Introduction to the course</li>
                              <li id="wd-content-item">Learn what is Web Development</li>
                          </ul>
                      </li>
                      <li id="wd-lesson">
                          <span id="wd-title">READING</span>
                          <ul id="wd-content">
                              <li id="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                              <li id="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                          </ul>
                      </li>
                      <li id="wd-lesson">
                          <span id="wd-title">SLIDES</span>
                          <ul id="wd-content">
                              <li id="wd-content-item">Introduction to Web Development</li>
                              <li id="wd-content-item">Creating an HTTP server with Node.js</li>
                              <li id="wd-content-item">Creating a React Application</li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li id="wd-module">
                  <div id="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                  <ul id="wd-lessons">
                      <li id="wd-lesson">
                          <span id="wd-title">LEARNING OBJECTIVES</span>
                          <ul id="wd-content">
                              <li id="wd-content-item">Learn how to create user interfaces with HTML</li>
                              <li id="wd-content-item">Deploy the assignment to Netlify</li>
                          </ul>
                      </li>
                      <li id="wd-lesson">
                          <span id="wd-title">SLIDES</span>
                          <ul id="wd-content">
                              <li id="wd-content-item">Introduction to HTML and the DOM</li>
                              <li id="wd-content-item">Formatting Web content with Headings and</li>
                              <li id="wd-content-item">Formatting content with Lists and Tables</li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
      </div>
  );}
  