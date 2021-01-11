import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { FC } from 'react';

import Layout from '../components/layout';
import NewTabLink from '../components/new-tab-link';
import PageContent from '../components/page-content';
import SectionHeading from '../components/section-heading';
import SEO from '../components/seo';

const OrganizationsPage: FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOrganization {
        edges {
          node {
            name
            websiteLink
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

  const orgEdges: OrgEdge[] = data?.allContentfulOrganization?.edges ?? [];

  return (
    <Layout>
      <SEO title="Organizations" />
      <PageContent>
        <SectionHeading>Organizations</SectionHeading>
        {orgEdges.map((orgEdge, i) => (
          <OrgCard key={i} org={orgEdge.node} />
        ))}
      </PageContent>
    </Layout>
  );
};

const OrgCard: FC<{ org: OrgDetails }> = ({ org }) => (
  <div className="mb-10 flex w-5/6 mx-auto border-t-2 pt-8">
    <div className="mr-5">
      {org.logoImage && <Img fixed={org.logoImage.fixed} />}
    </div>
    <div>
      <h3 className="font-bold">{org.name}</h3>
      <NewTabLink url={org.websiteLink}>{org.websiteLink}</NewTabLink>
      <br />
      <br />
      <div className="max-h-24 overflow-hidden">
        {org.description.description}
      </div>
    </div>
  </div>
);

interface OrgEdge {
  node: OrgDetails;
}

interface OrgDetails {
  name: string;
  description: { description: string };
  logoImage: { fixed: FixedObject } | null;
  websiteLink: string;
}

export default OrganizationsPage;
