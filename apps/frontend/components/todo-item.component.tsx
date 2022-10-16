import React, { useState } from 'react';
import { Todo } from '../models';
import Button from './buttons/button.component';
import EditIconButton from './buttons/edit-icon-button.component';
import OpenButton from './buttons/open-button.component';
import DatePanel from './date-panel.component';

type Props = {
  todo: Todo;
  onClcikTodoNameEdit: () => void;
  onClcikTodoDetailEdit: () => void;
};

const TodoItem: React.FC<Props> = ({
  todo,
  onClcikTodoNameEdit,
  onClcikTodoDetailEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="border-collapse border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="relative flex items-center">
        <div
          className="absolute h-full bg-gradient-to-r from-yellow-400 to-teal-100"
          style={{ width: `${todo.progress}%` }}
        />
        <div>
          <OpenButton
            icon="arrow"
            className="my-1 p-1"
            onClick={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>
        <div className="grow z-10 p-3 flex items-center">
          <h2 className="text-2xl font-bold mr-4">{todo.name}</h2>
          <EditIconButton onClick={onClcikTodoNameEdit} />
        </div>

        <div className="flex items-center justify-center z-10 mr-2">
          <DatePanel updatedAt={todo.updatedAt} createdAt={todo.createdAt} />
        </div>
      </div>

      {isOpen && (
        <div className="p-4">
          <div className="flex justify-between items-center py-3 text-lg border-b border-gray-300">
            <div className="flex items-center">
              <span className="text-rose-700">
                <span className="text-gray-600 font-bold">進捗率： </span>
                {todo.progress} %
              </span>
              <span className="font-bold text-gray-600 mx-2">{'//'}</span>
              <span className="text-rose-700">
                <span className="text-gray-600 font-bold">ステータス： </span>
                {todo.status}
              </span>
              <EditIconButton
                className="ml-4"
                onClick={onClcikTodoDetailEdit}
              />
            </div>
          </div>
          <div>
            <div className="p-2 flex justify-start bg-sky-400">
              <OpenButton
                icon="arrow"
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                isOpen={isDescriptionOpen}
              />
              <strong className="text-lg mx-4">メモ</strong>
            </div>
            <div className="p-2">
              {isDescriptionOpen && (
                <div>
                  {todo.descriptions.map((description) => {
                    return (
                      <div
                        key={description.id}
                        className=" border-b border-gray-300 py-2"
                      >
                        <div>
                          <DatePanel
                            updatedAt={description.updatedAt}
                            createdAt={description.createdAt}
                          />
                        </div>
                        <textarea
                          className="w-full"
                          value={description.text}
                          disabled={!isEditMode}
                        ></textarea>
                      </div>
                    );
                  })}
                  <div className="flex my-4">
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                      placeholder="Add Todo"
                    />
                    <Button colorType="primary">Add</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
