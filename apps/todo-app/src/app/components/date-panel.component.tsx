import React from 'react';

type Props = {
  updatedAt: string;
  createdAt: string;
  textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
};

const DatePanel: React.FC<Props> = ({
  updatedAt,
  createdAt,
  textSize = 'base',
}) => {
  return (
    <div className={`text-${textSize} flex items-baseline`}>
      <span className="text-rose-700">
        <span className="font-bold text-gray-600">作成日: </span>
        {createdAt}
      </span>
      <span className="mx-2 font-bold text-gray-600">{'//'}</span>
      <span className="text-rose-700">
        <span className="font-bold text-gray-600">更新日: </span>
        {updatedAt}
      </span>
    </div>
  );
};

export default DatePanel;
