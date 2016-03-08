import React from 'react';

export default ({tasks}) => {
  let i = 0;
  return (
    <div className="checklist">
      <ul>
        {tasks.map(task =>
          <li className="checklist__task" key={i++}>
            <input type="checkbox" defaultChecked={task.done} />
            {task.name}
            <a href="#" className="checklist__task--remove" />
          </li>
        )}
      </ul>
    </div>
  );
}
