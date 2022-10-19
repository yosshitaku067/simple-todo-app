import React, { useState } from 'react';
import CloseIconButton from '../buttons/close-icon-button.component';
import InputButton from '../buttons/input-button.component';
import InputLabel from '../form/input-label.component';
import ModalLayout from './modal-layout.component';

type Props = {
  label: string;
  name: string;
  onSave: (text: string) => void;
  onClose: () => void;
};

const ModalEditOneText: React.FC<Props> = ({
  label,
  name: defaultName,
  onSave,
  onClose,
}) => {
  const [name, setName] = useState(defaultName);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    onSave(name);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    handleSubmit(e);
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
          <InputLabel htmlFor="name-edit-input" className="mb-2">
            {label}
          </InputLabel>
          <input
            id="name-edit-input"
            type="text"
            placeholder="Project Name"
            required
            className="my-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-xl placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            // className="border appearance-none rounded font-bold text-xl p-2 w-full mb-8 focus:border-sky-600 focus-within:border-sky-600 focus-visible:border-sky-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="flex items-center justify-end">
            <InputButton type="submit" value="Save" colorType="primary" />
          </div>
        </form>
      </div>
    </ModalLayout>
  );
};

export default ModalEditOneText;
