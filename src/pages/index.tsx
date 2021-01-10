import React, { FC } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: FC<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <div className="flex flex-col items-center justify-center max-w-md mx-auto my-7 text-base">
      <p>Hi, My name is Alan &#128075;</p>
      <br />
      <p>
        I&#39;m a software engineer who lives in Brooklyn, and I happen to be
        interested in the topic of how our elections are funded.
      </p>
      <br />
      <p>
        This website contains curated lists of reference and educational
        material on the subject of campaign finance reform through a variety of
        different mediums.
      </p>
      <br />
      <p>
        I hope you find some of this helpful and that we can continue to learn
        and, ultimately, fight together for the fundamental reform that our
        country dearly needs.
      </p>
      <br />
      <p>
        Know of a great resource that I am missing? Have a question burning a
        hole in your brain? Reach me at{' '}
        <a
          className="underline"
          href="mailto:ajosephjohnson@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          ajosephjohnson@gmail.com
        </a>
        .
      </p>
      <br />
      <p>Hope you enjoy!</p>
    </div>
  </Layout>
);

export default IndexPage;
