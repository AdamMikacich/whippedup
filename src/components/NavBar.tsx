import React from 'react';
import { IoChatbubbleEllipses, IoHome, IoPerson } from 'react-icons/io5';

type NavBarProps = {
  setPageName: (pageName: string) => void;
};

export function NavBar({ setPageName }: NavBarProps) {
  return (
    <div className="fixed bottom-0 text-4xl text-black w-full px-16 bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
      <div className="flex flex-row w-full justify-between h-20 items-center">
        <IoChatbubbleEllipses className="cursor-pointer" />
        <IoHome
          onClick={() => setPageName('kitchen')}
          className="cursor-pointer"
        />
        <IoPerson className="cursor-pointer" />
      </div>
    </div>
  );
}
