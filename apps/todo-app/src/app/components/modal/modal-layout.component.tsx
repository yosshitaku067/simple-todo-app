import React from 'react';
import { PropsOnlyChildren } from '../../helper/props-only-children.type';

const ModalLayout: React.FC<PropsOnlyChildren> = ({ children }) => {
  return (
    <div className="z-50 fixed top-0 left-0 flex h-full w-full items-center justify-center">
      <div className="bg-slate-500 absolute h-full w-full opacity-50" />
      {children}
    </div>
  );
};

export default ModalLayout;
