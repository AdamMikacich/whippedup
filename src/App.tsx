import { useState } from 'react';
import React from 'react';
import { KitchenPage } from './pages/KitchenPage';
import { CreatePage } from './pages/CreatePage';
import { NavBar } from './components/NavBar';

/**
 * App component handles the routing of the application between pages.
 * @returns
 */
export function App(): JSX.Element {
  const [pageName, setPageName] = useState('kitchen');
  let page;

  /**
   * Switch statement to determine which page to render based on the pageName state.
   */
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
