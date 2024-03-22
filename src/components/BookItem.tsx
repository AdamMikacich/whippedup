import React from 'react';

/**
 * BookItem component displays a book item with a placeholder gray background and text.
 */
export function BookItem() {
  return (
    <div>
      <div className="w-36 h-64 rounded-lg bg-gray-100"></div>
      <h1 className="font-semibold text-lg font-gray-700 mt-4">Book Name</h1>
      <p className="text-gray-300 text-sm">Created by you</p>
    </div>
  );
}
