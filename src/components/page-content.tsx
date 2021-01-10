import React, { FC } from 'react';

const PageContent: FC<{}> = ({ children }) => (
  <div className="flex flex-col items-center justify-center max-w-md mx-auto my-7 pb-8">
    {children}
  </div>
);

export default PageContent;
