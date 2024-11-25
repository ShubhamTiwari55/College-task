import React from 'react';

const Button = ({ label, onClick, color = 'blue' }) => {
  const buttonColor = color === 'blue' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700';

  return (
    <button
      onClick={onClick}
      className={`${buttonColor} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    >
      {label}
    </button>
  );
};

export default Button;
