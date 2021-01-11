import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { FC } from 'react';

import Layout from '../components/layout';
import NewTabLink from '../components/new-tab-link';
import PageContent from '../components/page-content';
import SectionHeading from '../components/section-heading';
import SEO from '../components/seo';

const PodcastsPage: FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPodcast {
        edges {
          node {
            name
            rssLink
            googleLink
            appleLink
            description {
              description
            }
            logoImage {
              fixed(width: 200) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `);

  const podEdges: PodEdge[] = data?.allContentfulPodcast?.edges ?? [];

  return (
    <Layout>
      <SEO title="Podcasts" />
      <PageContent>
        <SectionHeading>Podcasts</SectionHeading>
        {podEdges.map((podEdge, i) => (
          <PodCard key={i} pod={podEdge.node} />
        ))}
      </PageContent>
    </Layout>
  );
};

const PodCard: FC<{ pod: PodDetails }> = ({ pod }) => (
  <div className="mb-10 flex w-5/6 mx-auto border-t-2 pt-8">
    <div className="mr-5">
      {pod.logoImage && <Img fixed={pod.logoImage.fixed} />}
    </div>
    <div>
      <h3 className="font-bold">{pod.name}</h3>
      <NewTabLink url={pod.rssLink}>RSS</NewTabLink>
      <br />
      <NewTabLink url={pod.googleLink}>Google Podcasts</NewTabLink>
      <br />
      <NewTabLink url={pod.appleLink}>Apple Podcasts</NewTabLink>
      <br />
      <br />
      <div className="max-h-24 overflow-hidden">
        {pod.description.description}
      </div>
    </div>
  </div>
);

interface PodEdge {
  node: PodDetails;
}

interface PodDetails {
  name: string;
  description: { description: string };
  logoImage: { fixed: FixedObject } | null;
  rssLink: string;
  googleLink: string;
  appleLink: string;
}

export default PodcastsPage;
