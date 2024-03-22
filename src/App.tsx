import { useState } from 'react';
import React from 'react';
import { KitchenPage } from './pages/KitchenPage';
import { CreatePage } from './pages/CreatePage';
import { NavBar } from './components/NavBar';

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

  return (
    <>
      <div className="py-10 mt-12">
        <div className="pb-16">{page}</div>

        <NavBar setPageName={setPageName} />
      </div>
    </>
  );
}

export default App;
