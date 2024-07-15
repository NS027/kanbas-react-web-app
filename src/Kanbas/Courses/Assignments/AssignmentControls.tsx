import GreenCheckmark from "./GreenCheckmark";
import { SlMagnifier } from "react-icons/sl";
import "./InputWithIcon.css";
export default function AssignmentControls() {
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
                <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1">+ Assignment</button>
            </div>
            <div className="d-inline me-1 float-end">
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">+ Group</button>
            </div>
        </div>
    );
}