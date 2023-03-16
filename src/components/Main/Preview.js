import cover from "../../images/cover.jpeg";
import Card from "./Card";
import Profile from "./Profile";
import { useState } from "react";

function Preview({ data, avatar, project }) {
  
  return (
    <section className="preview">
      <Profile project={project}></Profile>
      {/* <img className="preview__image" src={} alt="Foto del proyecto" title="Foto del proyecto" /> */}
      <Card avatar={avatar} data={data}></Card>
    </section>
  )
}
export default Preview;