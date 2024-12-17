import React from 'react';

const Content = ({content,className}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 py-12 ${className}`}>
      <p className="text-lg text-gray-700 leading-relaxed">
       {content}
      </p>
    </div>
  );
}

export default Content;
