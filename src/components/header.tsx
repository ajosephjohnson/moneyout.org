import React, { FC } from 'react';
import { Link } from 'gatsby';

import CapitolIcon from './capitol-icon';

const Header: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <>
    <header className="h-20 border-b-2 flex pt-1">
      <Link
        to="/"
        className="h-full flex items-center w-max p-3 hover:underline"
      >
        <CapitolIcon />
        <h1 className="text-2xl ml-3">{siteTitle}</h1>
      </Link>
      <div className="w-full flex justify-center">
        <Link
          to="/organizations/"
          activeStyle={{ textDecoration: 'underline' }}
          className="hover:underline text-xl p-3 flex items-center"
        >
          <h2>Organizations</h2>
        </Link>
        <Link
          to="/books/"
          activeStyle={{ textDecoration: 'underline' }}
          className="hover:underline text-xl p-3 flex items-center"
        >
          <h2>Books</h2>
        </Link>
        <Link
          to="/podcasts/"
          activeStyle={{ textDecoration: 'underline' }}
          className="hover:underline text-xl p-3 flex items-center"
        >
          <h2>Podcasts</h2>
        </Link>
      </div>
    </header>
    <div className="italic ml-4 mt-1.5">
      Educational material on the topic of campaign finance reform
    </div>
  </>
);

export default Header;
