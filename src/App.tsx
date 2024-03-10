import {
  IoChatbubbleEllipses,
  IoChevronBack,
  IoChevronBackOutline,
  IoHome,
  IoPerson,
} from 'react-icons/io5';
import { useState } from 'react';
import React from 'react';

function BookItem() {
  return (
    <div>
      <div className="w-36 h-64 rounded-lg bg-gray-100"></div>
      <h1 className="font-semibold text-lg font-gray-700 mt-4">Book Name</h1>
      <p className="text-gray-300 text-sm">Created by you</p>
    </div>
  );
}

type KitchenPageProps = {
  setPageName: (pageName: string) => void;
};

function KitchenPage({ setPageName }: KitchenPageProps) {
  return (
    <>
      <div className="flex flex-row justify-between px-6 mb-5">
        <h1 className="text-4xl font-semibold">My Kitchen</h1>
        <button
          className="bg-[#f05a24] text-white py-3 px-5 text-xl rounded-2xl"
          onClick={() => setPageName('create')}
        >
          Create
        </button>
      </div>
      <div className="flex flex-row gap-x-4 overflow-x-auto">
        <div className="flex flex-row gap-x-4 mx-6">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
      <div className="flex flex-row justify-between px-6 mb-5 mt-10">
        <h1 className="text-4xl font-semibold">Favorites</h1>
      </div>
      <div className="flex flex-row gap-x-4 overflow-x-auto">
        <div className="flex flex-row gap-x-4 mx-6">
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
    </>
  );
}

function CreatePage({ setPageName }: KitchenPageProps) {
  return (
    <>
      <button
        className="absolute top-8 left-4 text-lg font-light text-gray-400 px-6 flex flex-row items-center gap-x-1 cursor-pointer"
        onClick={() => setPageName('kitchen')}
      >
        <IoChevronBackOutline className="inline" />
        Back
      </button>

      <div className="flex flex-col gap-y-4 px-6 mb-8 mt-36">
        <h1 className="text-4xl font-semibold">New Book</h1>
        <p className="font-light text-base text-gray-400">
          Please enter a name for the new book
        </p>
      </div>
      <div className="flex flex-col gap-y-2 px-6 mb-5">
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

export function App(): JSX.Element {
  const [pageName, setPageName] = useState('kitchen');
  let page;

  switch (pageName) {
    case 'kitchen':
      page = <KitchenPage setPageName={setPageName} />;
      break;
    case 'create':
      page = <CreatePage setPageName={setPageName} />;
      break;
    default:
      page = <div>404</div>;
      break;
  }

  console.log;

  return (
    <>
      <div className="py-10 mt-12">
        <div className="pb-16">{page}</div>

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
      </div>
    </>
  );
}

export default App;
