import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => (
  <div>
    <div class="grid-container">
    <div class="c1">
        To Do
    </div>
    <div class="c2">
        In Progress
    </div>
    <div class="c3">
        Complete
    </div>
    </div>
    <div class="grid-container">
      <div class="to-do">
      {tasks.map((task) => 
        {
          if (task.status === 'to-do')
          return <div class="task" key={task.id}>
          <h2>{task.taskTitle}</h2>
            <body>
                <p>{task.description}</p>
                <p>Due Date: {task.dateDue}</p>
                <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
            </body>
          </div>
        }
      )}
      </div>

      <div class="in-progress">
      {tasks.map((task) => 
        {
          if (task.status === 'in-progress')
          return <div class="task" key={task.id}>
          <h2>{task.taskTitle}</h2>
            <body>
                <p>{task.description}</p>
                <p>Due Date: {task.dateDue}</p>
                <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
            </body>
          </div>
        }
      )}
      </div>

      <div class="complete">
      {tasks.map((task) => 
        {
          if (task.status === 'complete')
          return <div class="task" key={task.id}>
          <h2>{task.taskTitle}</h2>
            <body>
                <p>{task.description}</p>
                <p>Due Date: {task.dateDue}</p>
                <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
            </body>
          </div>
        }
      )}
      </div>


    </div>
  </div>
);

export default TaskList;
