import React from 'react';

export default function DeleteAssignmentModal(
    { 
        show, 
        onHide, 
        assignmentTitle, 
        deleteAssignment 
    }: {
        show: boolean;
        onHide: () => void;
        assignmentTitle: string;
        deleteAssignment: () => void;
    }
) {
    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} id="deleteAssignmentModal" tabIndex={-1} aria-labelledby="deleteAssignmentLabel" aria-hidden={!show} style={{ backgroundColor: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteAssignmentLabel">Delete Assignment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the assignment <strong>{assignmentTitle}</strong>?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={deleteAssignment}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}