import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ReviewDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviews/" + id
  );

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="review-card">
      <div className="rating">{data.data.attributes.review}</div>
      <h2>{data.data.attributes.title}</h2>
      <small>Console list</small>
      {data.data.attributes.body.map((para) => (
        <p>{para.children[0].text}</p>
      ))}
    </div>
  );
};

export default ReviewDetails;
