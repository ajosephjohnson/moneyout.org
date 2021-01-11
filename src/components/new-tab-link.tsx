import React, { FC } from 'react';

const NewTabLink: FC<{ url: string }> = ({ children, url }) => (
  <a
    className="underline text-blue-700"
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default NewTabLink;
