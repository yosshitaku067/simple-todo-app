import React from 'react';

type Props = {
  updatedAt: string;
  createdAt: string;
};

const DatePanel: React.FC<Props> = ({ updatedAt, createdAt }) => {
  return (
    <div className="flex items-baseline">
      <span className="text-2xl text-rose-700">
        <span className="font-bold text-gray-600">作成日: </span>
        {createdAt}
      </span>
      <span className=" mx-2 text-2xl font-bold text-gray-600">{'//'}</span>
      <span className="text-2xl text-rose-700">
        <span className="font-bold text-gray-600">更新日: </span>
        {updatedAt}
      </span>
    </div>
  );
};

export default DatePanel;
