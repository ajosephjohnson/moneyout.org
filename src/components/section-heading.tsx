import React, { FC } from 'react';

const SectionHeading: FC<{}> = ({ children }) => (
  <div className="text-2xl underline ml-20 pl-1 my-6 pb-1">{children}</div>
);

export default SectionHeading;
