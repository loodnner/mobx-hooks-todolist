import React, { useState } from 'react';
import TodoItemClass from '../stores/todo-item';
import { useStore } from '../helper/use-store';
import { onEnterPress } from '../helper/use-enter';

interface Props {
  todo: TodoItemClass;
}
export const TodoItem = ({ todo }: Props) => {
  const todoList = useStore();
  const [newText, setText] = useState('');
  const [isEditing, setEdit] = useState(false);

  const saveText = () => {
    todo.updateText(newText);
    setEdit(false);
    setText('');
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={onEnterPress(saveText)}
          />
          <button onClick={saveText}>save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            onChange={todo.toggleIsDone}
            defaultChecked={todo.isDone}
          />
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            edit
          </button>
          <button
            onClick={() => {
              todoList.removeTodo(todo);
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
