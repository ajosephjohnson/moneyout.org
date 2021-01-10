import React, { FC } from 'react';
import { Link } from 'gatsby';

const Header: FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/" className="no-underline">
        {siteTitle}
      </Link>
    </h1>
  </header>
);

export default Header;
