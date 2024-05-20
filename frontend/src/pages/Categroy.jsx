import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          reviews {
            data {
              id
              attributes {
                title
                review
                body
                categories {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Category = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(CATEGORY, {
    variables: { id },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error :(</p>;

  if (!data || !data.category) {
    return <p>No data available</p>;
  }

  const { name, reviews } = data.category.data.attributes;

  return (
    <div>
      <h1>{name}</h1>
      {reviews.data.map((review) => (
        <div className="review-card" key={review.id}>
          <div className="rating">{review.attributes.review}</div>
          <h2>{review.attributes.title}</h2>
          <small>Console list</small>
          {review.attributes.body.map((para, index) => (
            <p key={index}>{para.children[0].text.substring(0, 200)}</p>
          ))}
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
