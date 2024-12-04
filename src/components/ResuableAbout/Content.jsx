import React from 'react';

const Content = ({content}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <p className="text-lg text-gray-700 leading-relaxed">
       {content}
      </p>
    </div>
  );
}

export default Content;
