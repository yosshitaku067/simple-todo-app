import React, { useState } from 'react';
import CloseIconButton from '../buttons/close-icon-button.component';
import ModalLayout from './modal-layout.component';
import { TodoStatus } from '../../models';
import InputLabel from '../form/input-label.component';
import InputButton from '../buttons/input-button.component';

type Props = {
  progress: number;
  status: TodoStatus;
  onSave: (detail: { progress: number; status: TodoStatus }) => void;
  onClose: () => void;
};

const ModalEditTodoDetail: React.FC<Props> = ({
  progress: initialProgress,
  status: initialStatus,
  onClose,
  onSave,
}) => {
  const [progress, setProgress] = useState(initialProgress);
  const [status, setStatus] = useState(initialStatus);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ progress, status });
  };

  return (
    <ModalLayout>
      <div className="relative bg-white rounded-lg w-1/3">
        <CloseIconButton
          type="button"
          className="absolute right-0 p-4"
          onClick={onClose}
        />
        <form className="p-8" onSubmit={handleSubmit}>
          <InputLabel htmlFor="progress-edit-input">進捗率</InputLabel>
          <div className="flex items-center">
            <input
              id="progress-edit-input"
              type="number"
              placeholder="Project Name"
              required
              className="my-2 block px-3 py-2 bg-white border border-slate-300 rounded-md text-xl placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (!isNaN(value)) {
                  setProgress(value);
                }
              }}
            />
            <span className="text-2xl">％</span>
          </div>

          <InputLabel htmlFor="status-edit-select">ステータス</InputLabel>
          <select
            id="status-edit-select"
            className="my-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xl placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={status}
            required
            onChange={(e) => {
              const { value } = e.target;

              if (
                value === 'OPEN' ||
                value === 'CLOSED' ||
                value === 'COMPLETED'
              ) {
                setStatus(value);
              }
            }}
          >
            <option value="OPEN">OPEN</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CLOSED">CLOSED</option>
          </select>
          <div className="flex items-center justify-end">
            <InputButton type="submit" value="Save" colorType="primary" />
          </div>
        </form>
      </div>
    </ModalLayout>
  );
};

export default ModalEditTodoDetail;
