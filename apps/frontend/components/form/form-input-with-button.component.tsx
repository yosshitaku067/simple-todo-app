import React, { useState } from 'react';
import InputButton from '../buttons/input-button.component';

type Props = {
  placeholder: string;
  submitLabel: string;
  onSubmit: (value: string) => void;
};

const FormInputWithButton: React.FC<Props> = ({
  placeholder,
  submitLabel,
  onSubmit,
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        required
        // className="mr-4 w-full appearance-none rounded py-2 px-3 shadow-inner focus:shadow-inner focus:shadow-sky-600 focus:outline-none"
        className="mr-4 w-full rounded-md border border-slate-300 bg-white px-6 py-4 text-2xl placeholder-slate-400 shadow-sm
      invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none
      focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      disabled:border-slate-200 disabled:bg-slate-50
      disabled:text-slate-500 disabled:shadow-none"
      />
      <InputButton
        type="submit"
        colorType="primary"
        disabled={!value}
        value={submitLabel}
      />
    </form>
  );
};

export default FormInputWithButton;
