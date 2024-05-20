import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const REVIEWS = gql`
  {
    reviews {
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

const HomePage = () => {
  const { data, error, loading } = useQuery(REVIEWS);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data.reviews.data.map((review) => {
        console.log(review);
        return (
          <div className="review-card" key={review.id}>
            <div className="rating">{review.attributes.review}</div>
            <h2>{review.attributes.title}</h2>
            <small>Console list</small>
            {review.attributes.body.map((para, id) => (
              <p key={id}>{para.children[0].text.substring(0, 200)}</p>
            ))}
            <Link to={`/details/${review.id}`}>Read More</Link>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
