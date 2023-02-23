import React from 'react';
import SearchCheckbox from '../components/atoms/SearchCheckbox';
import SearchText from '../components/atoms/SearchText';
import ListJob from '../components/molecular/ListJob';

function HomePage() {
  return (
    <div className="w-full justify-center p-10">
      <div className="flex mx-auto gap-4">
        <div className="flex-none">
          <SearchText />
        </div>
        <div className="flex-none mt-[17px] text-xs">
          <div className="flex gap-4">
            <div className="flex-none font-light text-slate-500">
              <p className="text-xs">Full time</p>
            </div>
            <div className="flex-initial w-full">
              <SearchCheckbox />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ListJob />
      </div>
    </div>
  );
}

export default HomePage;
