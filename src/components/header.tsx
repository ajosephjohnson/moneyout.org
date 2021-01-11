import React, { FC } from 'react';
import { Link } from 'gatsby';

import CapitolIcon from './capitol-icon';

const navSections = ['Organizations', 'Books', 'Podcasts'];

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
      <div className="w-full flex justify-end mr-3">
        {navSections.map(navSection => (
          <Link
            key={navSection}
            to={`/${navSection.toLowerCase()}`}
            activeStyle={{ textDecoration: 'underline' }}
            className="hover:underline text-xl p-3 flex items-center"
          >
            <h2>{navSection}</h2>
          </Link>
        ))}
      </div>
    </header>
    <div className="italic pl-4 py-1.5 bg-gray-100 border-b-2">
      Educational material on the topic of campaign finance reform
    </div>
  </>
);

export default Header;
