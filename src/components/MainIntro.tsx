import React from 'react';
import { HeroHeader } from './HeroHeader';
import { SubHeader } from './SubHeader';

export const MainIntro = () => {
  return (
    <div
      className="w-full flex flex-col h-screen"
    >
      <div
        className="my-auto flex-col"
      >
        <HeroHeader />
        <SubHeader />
      </div>
      
    </div>
  )
};
