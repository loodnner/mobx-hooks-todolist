import { useState } from 'react';
import { onEnterPress } from '../helper/use-enter';
import { useStore } from '../helper/use-store';

export const TodoNew = () => {
  const [newTodo, setTodo] = useState('');
  const todoList = useStore();

  const addTodo = () => {
    todoList.addTodo(newTodo);
    setTodo('');
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        value={newTodo}
        onKeyDown={onEnterPress(addTodo)}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>addTodo</button>
    </div>
  );
};
