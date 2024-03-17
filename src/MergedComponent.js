import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TextBoxList from './TextBoxList';
import TaskManager from './TaskManager';

const MergedComponent = () => {
  return (
    <Router>
      <div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/textboxlist">
            <button>TextBox List</button>
          </Link>
          <Link to="/taskmanager">
            <button>Task Manager</button>
          </Link>
        </div>
        <Routes>
          <Route path="/textboxlist" element={<TextBoxList />} />
          <Route path="/taskmanager" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MergedComponent;
