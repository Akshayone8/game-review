import React from "react";
import { useParams } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query getReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          review
          body
        }
      }
    }
  }
`;

const ReviewDetails = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(REVIEW, { variables: { id: id } });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes.review}</div>
      <h2>{data.review.data.attributes.title}</h2>
      <small>Console list</small>
      {data.review.data.attributes.body.map((para, id) => (
        <p key={id}>{para.children[0].text}</p>
      ))}
    </div>
  );
};

export default ReviewDetails;
