import React from 'react';

const HoverCard = ({newcontent,hovertext,title,initialcontent}) => {
  return (
    <div className="w-72 h-80 relative group">
      {/* Card Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D)' }}
      >
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          {/* Content that appears on hover */}
          <div className="text-white text-center">
            <h3 className="text-xl font-semibold mb-2">{newcontent}</h3>
            <p>{hovertext}</p>
          </div>
        </div>
      </div>

      {/* Initial card content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-50 p-4 group-hover:hidden">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{initialcontent}</p>
      </div>
    </div>
  );
};

export default HoverCard;