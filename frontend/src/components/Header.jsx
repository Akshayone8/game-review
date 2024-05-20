import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

const Header = () => {
  const { data, error, loading } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="site-header">
      <Link to="/">
        <h1>Game Reviews</h1>
      </Link>
      <nav className="categories">
        <span>Filter Review by Categroy:</span>
        {data.categories.data.map((category) => {
          return (
            <Link key={category.id} to={`/category/${category.id}`}>
              {category.attributes.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
