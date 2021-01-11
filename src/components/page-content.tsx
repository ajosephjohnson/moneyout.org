import React, { FC } from 'react';

const PageContent: FC<{ centered?: boolean }> = ({ children, centered }) => (
  <div
    className={`flex flex-col mx-auto pb-8${
      centered ? ' items-center justify-center max-w-md my-7' : ''
    }`}
  >
    {children}
  </div>
);

export default PageContent;
