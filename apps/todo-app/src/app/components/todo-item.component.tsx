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
  onClickAddActivity: (todoId: number, text: string) => void;
  onClickActivityEdit: (id: number, text: string) => void;
};

const TodoItem: React.FC<Props> = ({
  todo,
  onClcikTodoNameEdit,
  onClcikTodoDetailEdit,
  onClickAddActivity,
  onClickActivityEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);

  const [newActivityText, setNewActivityText] = useState('');

  const handleOnClickAddNewActivity = () => {
    onClickAddActivity(todo.id, newActivityText);
    setNewActivityText('');
  };

  return (
    <div className="border-collapse border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <div className="relative flex items-center">
        <div
          className="absolute h-full bg-gradient-to-r from-yellow-400 to-teal-100"
          style={{ width: `${todo.progress}%` }}
        />
        <OpenButton
          icon="arrow"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
        <div className="z-10 flex grow items-center p-1">
          <h4 className="mr-4 text-base font-bold">{todo.name}</h4>
          <EditIconButton onClick={onClcikTodoNameEdit} />
        </div>

        <div className="z-10 mr-2 flex items-center justify-center">
          <DatePanel updatedAt={todo.updatedAt} createdAt={todo.createdAt} />
        </div>
      </div>

      {isOpen && (
        <div className="p-4">
          <div className="flex items-center justify-between border-b border-gray-300 py-3 text-lg">
            <div className="flex items-center">
              <span className="text-rose-700">
                <span className="font-bold text-gray-600">進捗率： </span>
                {todo.progress} %
              </span>
              <span className="mx-2 font-bold text-gray-600">{'//'}</span>
              <span className="text-rose-700">
                <span className="font-bold text-gray-600">ステータス： </span>
                {todo.status}
              </span>
              <EditIconButton
                className="ml-4"
                onClick={onClcikTodoDetailEdit}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-start bg-teal-100 p-2">
              <OpenButton
                icon="arrow"
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                isOpen={isDescriptionOpen}
              />
              <strong className="mx-4 text-lg">メモ</strong>
            </div>
            <div className="p-2">
              {isDescriptionOpen && (
                <>
                  {todo.activities.map((activity) => {
                    return (
                      <div
                        key={activity.id}
                        className=" border-b border-gray-300 py-2"
                      >
                        <div>
                          <DatePanel
                            updatedAt={activity.updatedAt}
                            createdAt={activity.createdAt}
                          />
                        </div>
                        <div className="flex w-full items-center justify-between rounded border border-teal-100 bg-teal-50 py-1 pl-2">
                          {activity.text}
                          <EditIconButton
                            className="ml-4"
                            onClick={() =>
                              onClickActivityEdit(activity.id, activity.text)
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="my-4 flex">
                    <textarea
                      value={newActivityText}
                      className="text-grey-darker mr-4 w-full appearance-none rounded border py-2 px-3 shadow"
                      placeholder="Add Todo"
                      onChange={(e) => setNewActivityText(e.target.value)}
                    />
                    <Button
                      colorType="primary"
                      disabled={newActivityText === ''}
                      onClick={handleOnClickAddNewActivity}
                    >
                      Add
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
