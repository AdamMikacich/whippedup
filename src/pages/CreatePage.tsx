import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

type CreatePageProps = {
  setPageName: (pageName: string) => void;
};

export function CreatePage({ setPageName }: CreatePageProps) {
  return (
    <>
      <button
        className="absolute top-8 left-4 text-lg font-light text-gray-400 px-6 flex flex-row items-center gap-x-1 cursor-pointer"
        onClick={() => setPageName('kitchen')}
      >
        <IoChevronBackOutline className="inline" />
        Back
      </button>

      <div className="flex flex-col gap-y-3 px-8 mb-10 mt-36">
        <h1 className="text-4xl font-semibold">New Book</h1>
        <p className="font-light text-base text-gray-400">
          Please enter a name for the new book
        </p>
      </div>
      <div className="flex flex-col gap-y-3 px-8 mb-5">
        <input
          type="text"
          className="text-sm w-full h-14 rounded-xl border border-gray-200 px-4 placeholder:font-light active:outline-none focus:outline-none focus:ring-2 focus:ring-[#f05a24] focus:border-transparent"
          placeholder="Book Name"
          autoFocus
        />
        <button
          className="bg-[#f05a24] text-white py-4 px-5 text-base rounded-xl font-light"
          onClick={() => setPageName('kitchen')}
        >
          Submit
        </button>
      </div>
    </>
  );
}
