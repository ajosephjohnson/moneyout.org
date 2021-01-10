import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const CapitolIcon: FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "capitol-icon.png" }) {
        childImageSharp {
          fixed(width: 56, height: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (!data?.placeholderImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>;
  }

  return (
    <Img loading="eager" fixed={data.placeholderImage.childImageSharp.fixed} />
  );
};

export default CapitolIcon;
