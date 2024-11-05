import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function AssignmentsControls() {
  const [isGroupOpen, setIsGroupOpen] = React.useState(false);
  const [isAssignmentOpen, setIsAssignmentOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleAdd = (type: 'group' | 'assignment') => {
    console.log(`Adding new ${type}:`, name);
    setName("");
    if (type === 'group') {
      setIsGroupOpen(false);
    } else {
      setIsAssignmentOpen(false);
    }
  };

  const AddDialog = ({ 
    isOpen, 
    title, 
    type 
  }: { 
    isOpen: boolean; 
    title: string; 
    type: 'group' | 'assignment' 
  }) => (
    <div 
      className={`modal fade ${isOpen ? 'show' : ''}`} 
      style={{ display: isOpen ? 'block' : 'none' }}
      data-bs-backdrop="static" 
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={() => type === 'group' ? setIsGroupOpen(false) : setIsAssignmentOpen(false)}
            />
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`${type.charAt(0).toUpperCase() + type.slice(1)} Name`}
            />
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => type === 'group' ? setIsGroupOpen(false) : setIsAssignmentOpen(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleAdd(type)}
            >
              Add {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="float-end">
      <button 
        className="btn btn-light me-2"
        onClick={() => setIsGroupOpen(true)}
      >
        <FaPlus /> Group
      </button>
      
      <button 
        className="btn btn-danger"
        onClick={() => setIsAssignmentOpen(true)}
      >
        <FaPlus /> Assignment
      </button>

      <AddDialog
        isOpen={isGroupOpen}
        title="Add New Group"
        type="group"
      />
      
      <AddDialog
        isOpen={isAssignmentOpen}
        title="Add New Assignment"
        type="assignment"
      />
    </div>
  );
}