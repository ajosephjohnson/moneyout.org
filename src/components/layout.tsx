import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout: FC<{}> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="flex-grow">{children}</main>
      <footer className="border-t-2 flex justify-center py-4">
        <small>&copy; {new Date().getFullYear()}, MoneyOut.org</small>
      </footer>
    </div>
  );
};

export default Layout;
