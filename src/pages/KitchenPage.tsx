import React from 'react';
import { BookItem } from '../components/BookItem';

type KitchenPageProps = {
  setPageName: (pageName: string) => void;
};

export function KitchenPage({ setPageName }: KitchenPageProps) {
  const bookCount = 12;

  // Create a list of BookItem components
  const books = Array.from({ length: bookCount }).map((_, index) => (
    <BookItem key={index} />
  ));

  return (
    <>
      <div className="flex flex-row justify-between px-6 mb-5">
        <h1 className="text-4xl font-semibold">My Kitchen</h1>
        <button
          className="bg-[#f05a24] text-white py-2 px-8 text-xl rounded-2xl"
          onClick={() => setPageName('create')}
        >
          New
        </button>
      </div>
      <div className="flex flex-row gap-x-4 overflow-x-auto">
        <div className="flex flex-row gap-x-4 mx-6">{books}</div>
      </div>
      <div className="flex flex-row justify-between px-6 mb-5 mt-10">
        <h1 className="text-4xl font-semibold">Favorites</h1>
      </div>
      <div className="flex flex-row gap-x-4 overflow-x-auto">
        <div className="flex flex-row gap-x-4 mx-6">{books}</div>
      </div>
    </>
  );
}
