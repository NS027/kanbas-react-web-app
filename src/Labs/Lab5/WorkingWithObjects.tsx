import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
        });
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Learn how to create a NodeJS server with ExpressJS",
        published: "2021-10-01", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <h5>Assignments</h5>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })}/>
            <br />

            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-score"
                value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })}/>
            <br />
            
            <input
                type="checkbox"
                id="wd-assignment-completed"
                checked={assignment.completed}
                onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
            />
            <label htmlFor="wd-assignment-completed">Completed</label>
            
            <a id="wd-update-assignment-completed"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed Status
            </a><br /><br />
            
            
            <h5>Modules</h5>
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })}/>
            <br />

            <a id="wd-update-module-description"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Description
            </a>
            <input className="form-control w-75" id="wd-module-description"
                value={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })}/>
            <hr />

            <h4>Retrieving Objects</h4>
            <h5>Assignments</h5>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><br/><br/>
            <h5>Modules</h5>
            <a id="wd-retrieve-modules" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Modules
            </a><hr/>
            <h4>Retriveing Properties</h4>
            <h5>Assignments</h5>
            <a id="wd-retriveve-assignments-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><br/><br/>
            <h5>Modules</h5>
            <a id="wd-retriveve-modules-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Name
            </a><hr/>
        </div>
);}