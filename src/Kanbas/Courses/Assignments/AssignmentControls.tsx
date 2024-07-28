import { SlMagnifier } from "react-icons/sl";
import "./InputWithIcon.css";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentControls(
    { assignmentName, setAssignmentName, assignmentDescription, setAssignmentDescription, addAssignment }:
    { 
        assignmentName: string; 
        setAssignmentName: (title: string) => void; 
        assignmentDescription: string;
        setAssignmentDescription: (description: string) => void;
        addAssignment: () => void; 
    }
) {
    return (
        <div id="wd-assignments-controls" className="assignment-control">
            <div className="input-wrapper">
                <SlMagnifier className="input-icon" />
                <input 
                    id="wd-search-assignment"
                    placeholder="       Search..."
                    className="assignment-control-search"
                />
            </div>

            <div className="d-inline me-1 float-end">
                <button 
                    id="wd-add-assignment-btn" 
                    className="btn btn-lg btn-danger me-1"
                    data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog"
                >
                    + Assignment
                </button>
                <AssignmentEditor 
                    dialogTitle="Add Assignment" 
                    assignmentName={assignmentName} 
                    setAssignmentName={setAssignmentName} 
                    assignmentDescription={assignmentDescription}
                    setAssignmentDescription={setAssignmentDescription}
                    addAssignment={addAssignment} 
                />     
            </div>
            <div className="d-inline me-1 float-end">
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">+ Group</button>
            </div>
        </div>
    );
}