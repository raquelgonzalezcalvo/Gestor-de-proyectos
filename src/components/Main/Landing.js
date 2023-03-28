import { Link } from "react-router-dom";
import objectToExport from "../../services/localStorage";
import CardList from "./CardList";
import "../../styles/layout/Landing.scss";

function Landing({ foundCard, idCard }) {
  const projectsCard = objectToExport.get("cardsLs", []);

  const cardsToShow = projectsCard.slice(0, 4);
  console.log(cardsToShow);

  return (
    <main className="mainLanding">
      <section className="mainLanding__section">
        {/* <label className="sectionForm__form__button--btn"> */}
        <label className="btn">
          <Link className="mainLanding__link" to="/create">
            Crea un nuevo proyecto
          </Link>
        </label>
      </section>
      <section className="mainLanding__sectionCard">
        <CardList
          cardsToShowP={cardsToShow}
          foundCard={foundCard}
          idCard={idCard}
        />
      </section>
    </main>
  );
}
export default Landing;
