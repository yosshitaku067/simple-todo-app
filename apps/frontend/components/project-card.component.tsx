import React, { useState } from 'react';
import { Project, Todo } from '../models';
import Button from './buttons/button.component';
import EditIconButton from './buttons/edit-icon-button.component';
import OpenButton from './buttons/open-button.component';
import DatePanel from './date-panel.component';
import TodoItem from './todo-item.component';

type Props = {
  project: Project;
  onClickProjectNameEdit: () => void;
  onClickProjectDescriptionEdit: () => void;
  onClickTodoNameEdit: (todo: Todo) => void;
  onClickTodoDetailEdit: (todo: Todo) => void;
  onAddTodo: (name: string) => void;
};

const ProjectCard: React.FC<Props> = ({
  project,
  onClickProjectNameEdit,
  onClickProjectDescriptionEdit,
  onClickTodoNameEdit,
  onClickTodoDetailEdit,
  onAddTodo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTodoName, setNewTodoName] = useState('');

  const handleClickNewTodo = () => {
    setNewTodoName('');
    onAddTodo(newTodoName);
  };

  return (
    <div
      className={`rounded-lg bg-white px-8 py-4 ${
        isOpen ? '' : ' hover:bg-teal-100'
      }`}
    >
      <div className={`flex items-center justify-between ${isOpen && 'mb-4'}`}>
        <div className="flex items-center">
          <OpenButton
            icon="arrow"
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <h2 className="mx-4 text-2xl font-bold">{project.name}</h2>
          <EditIconButton onClick={onClickProjectNameEdit} />
        </div>
        <DatePanel
          updatedAt={project.updatedAt}
          createdAt={project.createdAt}
        />
      </div>
      {isOpen && (
        <>
          <div className="flex items-center border-t-2 pt-4 pb-3 text-lg">
            <p className="grow rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3 text-xl">
              {project.description}
              <EditIconButton
                onClick={onClickProjectDescriptionEdit}
                className=" float-right"
              />
            </p>
          </div>
          <div className="border-b-2 py-4 text-xl">
            <span className="text-rose-700">
              <span className="font-bold text-gray-600">OPEN： </span>
              {project.counts.open} 件
            </span>
            <span className="mx-2 font-bold text-gray-600">{'//'}</span>
            <span className="text-rose-700">
              <span className="font-bold text-gray-600">COMPLETED： </span>
              {project.counts.completed} 件
            </span>
            <span className="mx-2 font-bold text-gray-600">{'//'}</span>
            <span className="text-rose-700">
              <span className="font-bold text-gray-600">CLOSED </span>
              {project.counts.closed} 件
            </span>
          </div>
          <div className="py-4">
            <div>
              <h3 className="text-lg font-bold">Project Todo List</h3>
            </div>

            <div className="">
              {project.todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <TodoItem
                      todo={todo}
                      onClcikTodoNameEdit={() => onClickTodoNameEdit(todo)}
                      onClcikTodoDetailEdit={() => onClickTodoDetailEdit(todo)}
                    />
                  </div>
                );
              })}
            </div>

            <div className="my-4 flex">
              <input
                type="text"
                className="text-grey-darker mr-4 w-full appearance-none rounded border py-2 px-3 shadow"
                placeholder="Add Todo"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)}
              />
              <Button
                colorType="primary"
                disabled={!newTodoName}
                onClick={handleClickNewTodo}
              >
                Add
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
