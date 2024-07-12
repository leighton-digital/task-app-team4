import React from "react";

const dayNumberTODay = (dayNum) => {
  if(dayNum === 0)
    return 'Sunday'
  if(dayNum === 1)
    return 'Monday'
  if(dayNum === 2)
    return 'Tuesday'
  if(dayNum === 3)
    return 'Wednesday'
  if(dayNum === 4)
    return 'Thursday'
  if(dayNum === 5)
    return 'Friday'
  if(dayNum === 6)
    return 'Saturday'
}

const monNumTOMonth = (monNum) => {
  if(monNum === 0)
    return 'January'
  if(monNum === 1)
    return 'February'
  if(monNum === 2)
    return 'March'
  if(monNum === 3)
    return 'April'
  if(monNum === 4)
    return 'May'
  if(monNum === 5)
    return 'June'
  if(monNum === 6)
    return 'July'
  if(monNum === 7)
    return 'August'
  if(monNum === 8)
    return 'September'
  if(monNum === 9)
    return 'October'
  if(monNum === 10)
    return 'November'
  if(monNum === 11)
    return 'December'
}

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
    <div className="grid-container">
      <div className="to-do">
      {tasks.map((task) => 
        {
          const createdDate = new Date(task.createdDate)
          const createdDay = createdDate.getDay()
          const createdMon = createdDate.getMonth()
          const createdMonDay = createdDate.getDate()

          if (task.status === 'to-do')
          return <div className="task" key={task.id}>
          <h2>{task.taskTitle}</h2>
            <body>
                <p>{task.description}</p>
                <p>Due Date: {task.dateDue}</p>
                <p>Date Created: {dayNumberTODay(createdDay)+ " " + String(createdMonDay)+" "+monNumTOMonth(createdMon)}</p>
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
          const createdDate = new Date(task.createdDate)
          const createdDay = createdDate.getDay()
          const createdMon = createdDate.getMonth()
          const createdMonDay = createdDate.getDate()
          if (task.status === 'in-progress')
          return <div class="task" key={task.id}>
          <h2>{task.taskTitle}</h2>
            <body>
                <p>{task.description}</p>
                <p>Due Date: {task.dateDue}</p>
                <p>Date Created: {dayNumberTODay(createdDay)+ " " + String(createdMonDay)+" "+monNumTOMonth(createdMon)}</p>
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
          const createdDate = new Date(task.createdDate)
          const createdDay = createdDate.getDay()
          const createdMon = createdDate.getMonth()
          const createdMonDay = createdDate.getDate()
          if (task.status === 'complete')
          return <div class="task" key={task.id}>
          <h2>{task.taskTitle}</h2>
            <body>
                <p>{task.description}</p>
                <p>Due Date: {task.dateDue}</p>
                <p>Date Created: {dayNumberTODay(createdDay)+ " " + String(createdMonDay)+" "+monNumTOMonth(createdMon)}</p>
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
