import { IoChatbubbleEllipses, IoHome, IoPerson } from 'react-icons/io5';

function BookItem() {
  return (
    <div>
      <div className="w-36 h-64 rounded-lg bg-gray-100"></div>
      <h1 className="font-semibold text-lg font-gray-700 mt-4">Book Name</h1>
      <p className="text-gray-300 text-sm">Created by you</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="py-10 mt-12">
        <div className="pb-16">
          <div className="flex flex-row justify-between px-6 mb-5">
            <h1 className="text-4xl font-semibold">My Kitchen</h1>
            <button className="bg-[#f05a24] text-white py-3 px-5 text-xl rounded-2xl">
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
        </div>

        <div className="fixed bottom-0 text-4xl text-gray-400 w-full px-16 bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]">
          <div className="flex flex-row w-full justify-between h-20 items-center">
            <IoChatbubbleEllipses />
            <IoHome />
            <IoPerson />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
