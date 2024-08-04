import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BsGripVertical } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';
import { addAssignment, deleteAssignment, setAssignments, updateAssignment } from './assignmentsReducer';
import './StyledBox.css';
import AssignmentControls from './AssignmentControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import DeleteAssignmentModal from './DeleteAssignmentModal';
import * as client from './client';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  shortname: string;
  available: string;
  due: string;
  pts: number;
  description?: string;
}

interface RootState {
  assignmentsReducer: {
    assignments: Assignment[];
  }
}

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const assignments = useSelector((state: RootState) => 
    state.assignmentsReducer.assignments.filter(a => a.course === cid)
  );

  const [assignmentName, setAssignmentName] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('New Assignment Description');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<Assignment | null>(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      const fetchedAssignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(fetchedAssignments));
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const addNewAssignment = async () => {
    const newAssignment: Partial<Assignment> = {
      title: assignmentName || "New Assignment",
      description: assignmentDescription,
      course: cid,
      shortname: `A${assignments.length + 1}`,
      available: "Not available until May 1 at 12:00am",
      due: "Due on May 15 at 11:59pm",
      pts: 100,
    };
    const createdAssignment = await client.createAssignment(cid as string, newAssignment);
    dispatch(addAssignment(createdAssignment));
    setAssignmentName('');
    setAssignmentDescription('New Assignment Description');
  };

  const confirmDeleteAssignment = (assignment: Assignment) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirmation = async () => {
    if (assignmentToDelete) {
      await client.deleteAssignment(assignmentToDelete._id);
      dispatch(deleteAssignment(assignmentToDelete._id));
      setShowDeleteDialog(false);
      setAssignmentToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const handleUpdateAssignment = async (assignment: Assignment) => {
    const updatedAssignment = await client.updateAssignment(assignment);
    dispatch(updateAssignment(updatedAssignment));
  };

    return (
    <div id="wd-assignments">
      <AssignmentControls 
        assignmentName={assignmentName} 
        setAssignmentName={setAssignmentName} 
        assignmentDescription={assignmentDescription}
        setAssignmentDescription={setAssignmentDescription}
        addAssignment={addNewAssignment}
      />
      <br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span>ASSIGNMENT</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="styled-box me-2">
                40% of Total
              </div>
              <FaPlus 
              className="me-2"
              style={{ cursor: 'pointer' }} onClick={addNewAssignment} 
              />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ul className="wd-assignments list-group rounded-0">
            {assignments
              .filter((assignment: Assignment) => assignment.course === cid)
              .map((assignment: Assignment) => (
              <li key={assignment._id} className="wd-assignment list-group-item p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <AiOutlineFileText className="me-2 fs-3" style={{ color: 'green' }} />
                <div className="flex-grow-1">
                  <div>
                    <div className="fw-bold">
                      <a className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.shortname} - {assignment.title}
                      </a>
                    </div>
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | <span className="text-muted">{assignment.available}</span> | {assignment.due} | {assignment.pts} pts
                    </div>
                  </div>
                </div>
                <FaTrash className="text-danger me-2 mb-1" style={{ cursor: 'pointer' }} onClick={() => confirmDeleteAssignment(assignment)}/>
                <AssignmentControlButtons />
              </li>
            ))}
          </ul>
          </li>
      </ul>

      {/* Delete Assignment Modal */}
      <DeleteAssignmentModal
        show={showDeleteDialog}
        onHide={handleDeleteCancel}
        assignmentTitle={assignmentToDelete ? assignmentToDelete.title : ''}
        deleteAssignment={handleDeleteConfirmation}
      />
    </div>
  );
}