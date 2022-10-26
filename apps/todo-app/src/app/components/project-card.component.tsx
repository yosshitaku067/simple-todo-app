import React, { useState } from 'react';
import { Project, Todo } from '../models';
import Button from './buttons/button.component';
import EditIconButton from './buttons/edit-icon-button.component';
import OpenButton from './buttons/open-button.component';
import DatePanel from './date-panel.component';
import HeadingSecondary from './heading/heading-secondary.component';
import TodoItem from './todo-item.component';

type Props = {
  project: Project;
  onClickProjectNameEdit: () => void;
  onClickProjectDescriptionEdit: () => void;
  onClickTodoNameEdit: (todo: Todo) => void;
  onClickTodoDetailEdit: (todo: Todo) => void;
  onAddTodo: (name: string) => void;
  onClickAddActivity: (todoId: number, text: string) => void;
  onClickActivityEdit: (id: number, text: string) => void;
};

const ProjectCard: React.FC<Props> = ({
  project,
  onClickProjectNameEdit,
  onClickProjectDescriptionEdit,
  onClickTodoNameEdit,
  onClickTodoDetailEdit,
  onAddTodo,
  onClickAddActivity,
  onClickActivityEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTodoName, setNewTodoName] = useState('');

  const handleClickNewTodo = () => {
    setNewTodoName('');
    onAddTodo(newTodoName);
  };

  return (
    <div
      className={`rounded-lg bg-white px-4 py-2 ${
        isOpen ? '' : ' hover:bg-teal-100'
      }`}
    >
      <div className={`flex items-center justify-between ${isOpen && 'mb-2'}`}>
        <div className="flex items-center">
          <OpenButton
            icon="arrow"
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <h2 className="mx-4 text-lg font-bold">{project.name}</h2>
          <EditIconButton onClick={onClickProjectNameEdit} />
        </div>
        <DatePanel
          textSize="lg"
          updatedAt={project.updatedAt}
          createdAt={project.createdAt}
        />
      </div>
      {isOpen && (
        <>
          <div className="mt-2 flex w-full items-center border-t-2 pt-2 text-base">
            <div className="flex w-full rounded-lg border border-yellow-300 bg-yellow-50">
              <p className="grow  px-3 py-2">{project.description}</p>
              <EditIconButton
                onClick={onClickProjectDescriptionEdit}
                className=" float-right"
              />
            </div>
          </div>
          <div className="border-b-2 py-3 px-3">
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
            <div className="mb-4 px-3">
              <HeadingSecondary data-en="Todos">Todo一覧</HeadingSecondary>
            </div>

            <div className="px-3">
              {project.todos.map((todo) => {
                return (
                  <div key={todo.id}>
                    <TodoItem
                      todo={todo}
                      onClcikTodoNameEdit={() => onClickTodoNameEdit(todo)}
                      onClcikTodoDetailEdit={() => onClickTodoDetailEdit(todo)}
                      onClickAddActivity={onClickAddActivity}
                      onClickActivityEdit={onClickActivityEdit}
                    />
                  </div>
                );
              })}
            </div>

            <div className="my-4 flex px-3">
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
