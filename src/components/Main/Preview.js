import cover from "../../images/cover.jpeg";
import Card from "./Card";

function Preview({ data }) {
  return (
    <section className="preview">
      <img className="preview__image" src={cover} alt="Foto del proyecto" title="Foto del proyecto" />
      <Card data={data}></Card>
    </section>
  )
}
export default Preview;