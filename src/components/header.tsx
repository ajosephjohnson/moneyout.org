import React, { FC } from 'react';
import { Link } from 'gatsby';

import CapitolIcon from './capitol-icon';

const Header: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header className="h-20 border-b-2 flex">
    <Link to="/" className="h-full flex items-center w-max p-3 hover:underline">
      <div className="w-14">
        <CapitolIcon />
      </div>
      <h1 className="text-2xl ml-3 pt-1">{siteTitle}</h1>
    </Link>
    <div className="w-full flex justify-center">
      <Link
        to="/organizations/"
        activeStyle={{ textDecoration: 'underline' }}
        className="hover:underline text-xl p-3 flex items-center"
      >
        <h2 className="pt-1">Organizations</h2>
      </Link>
      <Link
        to="/books/"
        activeStyle={{ textDecoration: 'underline' }}
        className="hover:underline text-xl p-3 flex items-center"
      >
        <h2 className="pt-1">Books</h2>
      </Link>
      <Link
        to="/podcasts/"
        activeStyle={{ textDecoration: 'underline' }}
        className="hover:underline text-xl p-3 flex items-center"
      >
        <h2 className="pt-1">Podcasts</h2>
      </Link>
    </div>
  </header>
);

export default Header;
