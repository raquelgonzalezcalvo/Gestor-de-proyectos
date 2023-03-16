import dataApi from '../../services/api';
import { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";
import objectToExport from '../../services/localStorage';

function CreateProject() {
  const [data, setData] = useState({
    name: objectToExport.get('name', {}) || '',
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: ""
  })

  const [url, setUrl] = useState('');
  const [info, setInfo] = useState('');
  const [card, setCard] = useState('');

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    // const photo = data.photo
    setAvatar(avatar);
    setData({
      ...data, photo: avatar
    });
    objectToExport.set('photo', avatar)
  };

  const [project, setProject] = useState('');
  const updateProject = (project) => {
    // const image = data.image
    setProject(project);
    setData({
      ...data, image: project
    });
    objectToExport.set('image', project)
  };


  const handleInput = (inputValue, inputName) => {
    setData({
      ...data, [inputName]: inputValue
    });
    objectToExport.set(inputName, inputValue)
  }

  const handleSend = () => {
    dataApi(data)
      .then(info => {
        console.log(info);
        if (!info.success) {
          if (info.error.includes('Mandatory fields:')) {
            setCard('Todos los campos son obligatorios. Por favor, revise y cubra los campos restantes.');
          } else if (info.error.includes('Database error: ER_DATA_TOO_LONG')) {
            setCard('La foto es desmasiado grande debe ser de 200x200 px y menor a 120 KB, intente reducirla o use otra foto.');
          } else if (info.error.includes('Database error: Database was shut down')) {
            setCard('Ha ocurrido un error con el servidor, inténtelo de nuevo más tarde.');
          } else {
            setCard('Lo sentimos, ha ocurrido un error, inténtelo de nuevo más tarde.');
          }
          setUrl('')
          setInfo('')
        } else if (info.success) {
          setUrl(info.cardURL)
          setInfo(info)
        }
      })
  }
  return <main className="main">
    <Preview data={data} project={project} avatar={avatar} ></Preview>
    <Form handleChangeInput={handleInput}
      data={data}
      info={info} url={url}
      card={card}
      handle={handleSend}
      avatar={avatar}
      updateAvatar={updateAvatar}
      project={project}
      updateProject={updateProject}
    ></Form>
  </main>
}

export default CreateProject;