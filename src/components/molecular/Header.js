import React from 'react';
import Title from '../atoms/Title';

function Header() {
  return (
    <div className="w-full flex justify-center items-center h-24 mx-auto bg-gradient-to-b from-pink-200">
      <div>
        <Title className="w-full text-4xl uppercase font-bold text-pink-400 flex mx-auto">
          <p>JobList</p>
        </Title>
      </div>
    </div>
  );
}

export default Header;
