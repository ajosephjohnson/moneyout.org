import React, { FC } from 'react';

import Layout from '../components/layout';
import PageContent from '../components/page-content';
import SEO from '../components/seo';

const NotFoundPage: FC<{}> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageContent>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </PageContent>
  </Layout>
);

export default NotFoundPage;
