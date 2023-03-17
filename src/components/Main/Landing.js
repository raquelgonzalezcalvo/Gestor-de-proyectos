import { Link } from "react-router-dom";
import objectToExport from '../../services/localStorage';
import CardList from './CardList';

function Landing() {

  const projectsCard = objectToExport.get('cardsLs', [])

  const cardsToShow = projectsCard.slice(0, 4)
  console.log(cardsToShow);

  return (
    <main>
      <Link to="/create">Crea un nuevo proyecto</Link>
      <CardList cardsToShowP={cardsToShow} />
    </main>

  )
}
export default Landing;



