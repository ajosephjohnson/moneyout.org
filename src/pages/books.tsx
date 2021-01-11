import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { FC } from 'react';

import Layout from '../components/layout';
import NewTabLink from '../components/new-tab-link';
import PageContent from '../components/page-content';
import SectionHeading from '../components/section-heading';
import SEO from '../components/seo';

const BooksPage: FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBook {
        edges {
          node {
            title
            author
            link
            description {
              description
            }
            coverImage {
              fixed(width: 150) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `);

  const bookEdges: BookEdge[] = data?.allContentfulBook?.edges ?? [];

  return (
    <Layout>
      <SEO title="Books" />
      <PageContent>
        <SectionHeading>Books</SectionHeading>
        {bookEdges.map((bookEdge, i) => (
          <BookCard key={i} book={bookEdge.node} />
        ))}
      </PageContent>
    </Layout>
  );
};

const BookCard: FC<{ book: BookDetails }> = ({ book }) => (
  <div className="mb-10 flex w-5/6 mx-auto border-t-2 pt-8">
    <div className="mr-5">
      {book.coverImage && <Img fixed={book.coverImage.fixed} />}
    </div>
    <div>
      <h3 className="font-bold">{book.title}</h3>
      <div>by {book.author}</div>
      <NewTabLink url={book.link}>{book.link}</NewTabLink>
      <br />
      <br />
      <div className="max-h-24 overflow-hidden">
        {book.description.description}
      </div>
      <NewTabLink url={book.link}>Read more</NewTabLink>
    </div>
  </div>
);

interface BookEdge {
  node: BookDetails;
}

interface BookDetails {
  author: string;
  description: { description: string };
  coverImage: { fixed: FixedObject } | null;
  link: string;
  title: string;
}

export default BooksPage;
