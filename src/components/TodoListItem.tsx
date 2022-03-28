import React from 'react';
import { Todo } from '../TodoApp.types';
import { AppContext } from '../TodoApp.tsx';

export const TodoListItem = (props: Todo) => {
  const { label, status, id } = props;
  const { toggleCompleted } = React.useContext(AppContext);

  const handleCheck = () => {
    toggleCompleted(id);
  }

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status==='completed'} onChange={handleCheck} /> {label}
      </label>
    </li>
  )
}