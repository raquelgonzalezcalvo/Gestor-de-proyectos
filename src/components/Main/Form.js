import Input from "./Input";

function Form({handleSubmit, data, handleInput, handleClickSend, info, url, card}) {
    return ( 
   <section className='sectionForm'>
          <h2 className="sectionForm__title">Información</h2>
          <form className="sectionForm__form" onSubmit={handleSubmit}>
            <fieldset className="sectionForm__form__project">
              <legend className="sectionForm__form__project--info">
                Cuéntanos sobre el proyecto
                {/* <hr className="line" /> */}
              </legend>
              <Input htmlFor={'name'} placeholder={"Ejemplo: Mi proyecto"} data={data.name} handleInput={handleInput}
              text={'Nombre del proyecto:'}></Input>
              
              <Input htmlFor={"slogan"} placeholder={"Ejemplo: "} data={data.slogan} handleInput={handleInput}
              text={'Slogan:'}></Input>
           
            <Input htmlFor={"repo"} placeholder={"Ejemplo: https://github.com/Adalab/my-project"} data={data.repo} handleInput={handleInput}
            text={'Repositorio:'} pattern={'^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$'}></Input> 
              
            <Input htmlFor={"demo"} placeholder={"Ejemplo: http://beta.adalab.es/my-project/"} data={data.demo} handleInput={handleInput}
              text={"Demo:"} pattern={'^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$'}></Input> 
             
            <Input htmlFor={"technologies"} placeholder={"Ejemplo: React - SASS - HTML"} data={data.technologies} handleInput={handleInput}
              text={"Tecnologías:"}></Input>
            
              <label htmlFor="desc" className="sectionForm__form__project--label">Descripción:
                <textarea
                  className="sectionForm__form__project--textarea"
                  type="text"
                  placeholder="Ejemplo: Este es mi proyecto."
                  name="desc"
                  id="desc"
                  value={data.desc}
                  onChange={handleInput}
                ></textarea>
              </label>
            </fieldset>

            <fieldset className="sectionForm__form__autor">
              <legend className="sectionForm__form__autor--info">
                Cuéntanos sobre la autora
               
              </legend>
              <Input htmlFor={"autor"} placeholder={"Ejemplo: MariCarmen"} data={data.autor} handleInput={handleInput}
              text={"Nombre:"}></Input>
              
              <Input htmlFor={"job"} placeholder={"Ejemplo: Front-end developer"} data={data.job} handleInput={handleInput}
              text={"Profesión:"}></Input>
            </fieldset>

            <fieldset className="sectionForm__form__button">
              <label className="sectionForm__form__button--btn" htmlFor="">Subir foto del proyecto</label>
              <input
                className="hidden"
                type="button"
                value="Subir foto de proyecto"
              />
              <label className="sectionForm__form__button--btn" htmlFor="">Subir foto de la autora</label>
              <input
                className="hidden"
                type="button"
                value="Subir foto de autora"
              />
            </fieldset>

            <fieldset className="sectionForm__form__button">
              <input
                className="sectionForm__form__button--btnLarge"
                type="submit"
                value="CREAR TARJETA"
                onClick={handleClickSend}
              />
            </fieldset>
          </form>
          <div className={info.success ? "sectionForm__form__card" : "sectionForm__form__card hidden"}>
            <p className='sectionForm__form__card--text'> La tarjeta ha sido creada: </p>
            <a className='sectionForm__form__card--text' href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </div>
          <p className={info.success ? "hidden" : "sectionForm__form__card--errorMsg"}>{card}</p>
        </section>
)
}
export default Form;