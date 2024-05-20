import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {data.data.map((review) => {
        console.log(review);
        return (
          <div className="review-card" key={review.id}>
            <div className="rating">{review.attributes.review}</div>
            <h2>{review.attributes.title}</h2>
            <small>Console list</small>
            {review.attributes.body.map((para) => (
              <p>{para.children[0].text.substring(0, 200)}</p>
            ))}
            <Link to={`/details/${review.id}`}>Read More</Link>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
