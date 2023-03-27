import { Link } from "react-router-dom";
import Card from "./Card";

function CardList({ cardsToShowP }) {
  const loqsea = cardsToShowP.map((eachCard) => {
    return (
      <li className="eachCard">
        <Link to={`/card/` + id}>
          <Card data={eachCard} avatar={eachCard.photo} />
        </Link>
      </li>
    );
  });

  return <ul className="ulCard">{loqsea}</ul>;
}

export default CardList;
