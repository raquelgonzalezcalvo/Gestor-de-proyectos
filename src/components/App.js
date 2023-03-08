import "../styles/App.scss";
import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";
import { useState } from "react";
import logo from '../images/logo-adalab.png';
// import cover2 from '../images/cover_2.jpeg';
//pepino

function App() {
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [desc, setDesc] = useState("");
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "slogan") {
      setSlogan(inputValue);
    } else if (inputName === "repo") {
      setRepo(inputValue);
    } else if (inputName === "demo") {
      setDemo(inputValue);
    } else if (inputName === "technologies") {
      setTechnologies(inputValue);
    } else if (inputName === "desc") {
      setDesc(inputValue);
    } else if (inputName === "autor") {
      setAutor(inputValue);
    } else if (inputName === "job") {
      setJob(inputValue);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className="container">
      <header className="header">
        <i className="fa-solid fa-laptop-code"></i>
        <h1 className="header__text">Gestor de proyectos</h1>
      </header>
      <main className="main">
        <section className="preview">
          <img className="preview__image" src={cover} alt="" />

          <article className="preview__autor">
            <div className="preview__autor__info-project">
              <p className="preview__autor__info-project--subtitle">Personal Project Card</p>
              {/* <hr className="line" /> */}

              <h2 className="preview__autor__info-project--title">{name || "Elegant Workspace"}</h2>
              <p className="preview__autor__info-project--slogan">{slogan || "Diseños Exclusivos"}</p>
              <p className="preview__autor__info-project--desc">
                {desc ||
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipi harum laboriosam"}
              </p>
              <div className="preview__autor__info-project--technologies">
                <p className="preview__autor__info-project--technologies--text">{technologies || "React JS, MongoDB"}</p>
              </div>
              <div className="preview__autor__info-project--icons">
                <a href={repo} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github-alt"></i>
                </a>
                <a href={demo} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-globe"></i>
                </a>
              </div>
            </div>

            <div className="preview__autor__info-autor">
              <img className="preview__autor__info-autor--image" src={user} alt="" />
              <p className="preview__autor__info-autor--job">{job || "Full Stack Developer"}</p>
              <p className="preview__autor__info-autor--name">{autor || "Emmelie Björklund"}</p>
            </div>
          </article>
        </section>
        <section className='sectionForm'>
          <h2 className="sectionForm__title">Información</h2>
          <form className="sectionForm__form" onSubmit={handleSubmit}>
            <fieldset className="sectionForm__form__project">
              <legend className="sectionForm__form__project--info">
                Cuéntanos sobre el proyecto
                {/* <hr className="line" /> */}
              </legend>
              <label htmlFor="name" className="sectionForm__form__project--label">Nombre del proyecto:
                <input
                  className="sectionForm__form__project--input"
                  type="text"
                  placeholder="Ejemplo: Mi proyecto"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="slogan" className="sectionForm__form__project--label">Slogan:
                <input
                  className="sectionForm__form__project--input"
                  type="text"
                  name="slogan"
                  id="slogan"
                  placeholder="Ejemplo: "
                  value={slogan}
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="repo" className="sectionForm__form__project--label">Repositorio:
                <input
                  className="sectionForm__form__project--input"
                  type="text"
                  name="repo"
                  id="repo"
                  placeholder="Ejemplo: https://github.com/Adalab/my-project"
                  value={repo}
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="demo" className="sectionForm__form__project--label">Demo:
                <input
                  className="sectionForm__form__project--input"
                  type="text"
                  placeholder="Ejemplo: http://beta.adalab.es/my-project/"
                  name="demo"
                  id="demo"
                  value={demo}
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="technologies" className="sectionForm__form__project--label">Tecnologías:
                <input
                  className="sectionForm__form__project--input"
                  type="text"
                  placeholder="Ejemplo: React - SASS - HTML"
                  name="technologies"
                  id="technologies"
                  value={technologies}
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="desc" className="sectionForm__form__project--label">Descripción:
                <textarea
                  className="sectionForm__form__project--textarea"
                  type="text"
                  placeholder="Ejemplo: Este es mi proyecto."
                  name="desc"
                  id="desc"
                  value={desc}
                  onChange={handleInput}
                ></textarea>
              </label>
            </fieldset>

            <fieldset className="sectionForm__form__autor">
              <legend className="sectionForm__form__autor--info">
                Cuéntanos sobre la autora
                {/* <hr className="line" /> */}
              </legend>
              <label htmlFor="autor" className="sectionForm__form__project--label">Nombre:
                <input
                  className="sectionForm__form__autor--input"
                  type="text"
                  placeholder="Ejemplo: MariCarmen"
                  name="autor"
                  id="autor"
                  value={autor}
                  onChange={handleInput}
                />
              </label>
              <label htmlFor="job" className="sectionForm__form__project--label">Profesión:
                <input
                  className="sectionForm__form__autor--input"
                  type="text"
                  placeholder="Ejemplo: Front-end developer"
                  name="job"
                  id="job"
                  value={job}
                  onChange={handleInput}
                />
              </label>
            </fieldset>

            <fieldset className="sectionForm__form__button">
              <input
                className="sectionForm__form__button--btn"
                type="button"
                value="Subir foto de proyecto"
              />
              <input
                className="sectionForm__form__button--btn"
                type="button"
                value="Subir foto de autora"
              />
            </fieldset>

            <fieldset className="sectionForm__form__button">
              <input
                className="sectionForm__form__button--btnLarge"
                onClick="{handleClickCreateCard}"
                type="submit"
                value="CREAR TARJETA"
              />
            </fieldset>
          </form>
          <div className="sectionForm__form__card hidden">
            <p className=""> La tarjeta ha sido creada: </p>
            <a href="" className="" target="_blank" rel="noreferrer">
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copy">Nombre del equipo</p>
        <img src={logo} alt="Logo Adalab" className="footer__image"/>
      </footer>
  
    </div>
  );
}

export default App;
