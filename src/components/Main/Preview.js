
import Card from "./Card";
import Profile from './Profile';

function Preview({ data, project, avatar, className }) {
  return (
    <section className="preview">
      <Profile avatar={project} className={'preview__image'} />
      {/* <img className="preview__image" src={cover} alt="Foto del proyecto" title="Foto del proyecto" /> */}
      <Card data={data} avatar={avatar}
      ></Card>
    </section>
  )
}
export default Preview;